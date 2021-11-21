import React ,{useState, useEffect, useRef, useContext} from 'react';
import {SafeAreaView, Platform, Modal, StatusBar} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { UserContext } from '../../user_context';

//IMPORTING COMMON COMPONENTS
import Header from '../../components/header';

//IMPORTING INNER COMPONENTS
import AccessDenied from './AccessDeniedAnimationLottie';
import AccessGranted from '../../components/lottie/AccessGrantedAnimationLottie';
import ErrorConexion from '../../components/ErrorConexion';
import Counter from './Counter';
import { TaxiNamePopup } from './TaxiNamePopup';
import { ModalBottomSelection } from '../../components/ModalBottomSelection';
import { MainScrollview } from './MainScrollview';

//IMPORTING STYLES
import { styles } from './styles';
import theme from '../../theme';

//IMPORTING COMMON FUNCTIONS
import validateBeforeSend from '../../functions/validateBeforeSend';

// IMPORTING INNER FUNCTIONS
import { pickImageFuntion } from './functions/pickImageFuntion';
import api from '../../api';
import { pinHnadlerFunction } from './functions/pinHnadlerFunction';
import { selectionHandlerFunctions } from './functions/selectionHandlerFunctions';
import { defaultStateHandler } from './functions/defaultStateHandler';

export const TAXI = ['Asunto','Taxi a recoger','Taxi a dejar residente','Taxi a dejar visita'];
export const MEDIOS = ['Medio','Caminando','Auto','Camioneta','Buseta', 'Moto', 'Motoneta','Camión','Bicicleta'];

const Main = ({navigation}) => {
	// STATES
	const [user] = useContext(UserContext);
	const [intentsCounter,setintentsCounter] = useState(0);
	const [phone, setPhone] = useState('');
	const [response, setResponse] = useState('');
	const [images, setImages] = useState(null);
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [nombreTaxista, setNombreTaxista] = useState('');
	const [apellidoTaxista, setApellidoTaxista] = useState('');
	const [manzana, setManzana] = useState('Mz');
	const [usuario, setUsuario] = useState('Usuario');
	const [villa, setVilla] = useState('Villa');
	const [placa, setPlaca] = useState('');
	const [selectionData, setselectionData] = useState([]);
	const [selectionEnable, setSelectionEnable] = useState(true);
	const [cedula, setCedula] = useState('');
	const [cedulaTaxista, setCedulaTaxista] = useState('');
	const [asunto,setAsunto] = useState('');
	const [taxiAsunto, setTaxiAsunto] = useState('Asunto');
	const [entryVehicle, setEntryVehicle] = useState('Medio');
	const [userType, setUserType] = useState('');
	const [pin1, setPin1] = useState('');
	const [pin2, setPin2] = useState('');
	const [pin3, setPin3] = useState('');
	const [pin4, setPin4] = useState('');
	const [counter, setCounter] = useState(15);
	const [modalState, setModalState] = useState(false);
	const [editable, setEditable] = useState(true);
	const [selection, setSelection] = useState([]);
	const [visible, setVisible] = useState(false);
	const [IDinterval, setIDinterval] = useState([]);

	// REFS
	const modalRef = useRef(null);
	const pin1Ref = useRef();
	const pin2Ref = useRef();
	const pin3Ref = useRef();
	const pin4Ref = useRef();
	const placaRef = useRef();

	// METHODS AND EFFECT
	useEffect(() => {
		(async () => {
			if (Platform.OS !== 'web') {
				const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== 'granted') {
					alert('Sorry, we need camera roll permissions to make this work!');
				}
			}

		})();
	}, []);

	const { setDefault, restoreCounter } = defaultStateHandler(setImages, setselectionData, setNombre, setApellido, setSelectionEnable, setCedula, setCedulaTaxista, setResponse, setPhone, setEntryVehicle, setCounter, setModalState, setEditable, setSelection, setPlaca, setintentsCounter, setManzana, setUsuario, setVilla, setPin1, setPin2, setPin3, setPin4, setAsunto, setTaxiAsunto, setUserType, IDinterval);

	const sendButtonActivationHandler = () => {
		if(['Visita','Delivery','Mudanza','Servicios Básicos'].includes(usuario)){
			return !validateBeforeSend.type1({usuario,manzana,villa,nombre,apellido,cedula,asunto,entryVehicle,placa});
		}else if(['Residente','Empleado'].includes(usuario)){
			return !validateBeforeSend.type2({usuario,manzana,villa,userType,cedula,asunto,entryVehicle,placa});
		}else if(usuario === 'Expreso escolar'){
			return !validateBeforeSend.type3({usuario,userType,cedula,asunto,entryVehicle,placa});
		}else if(usuario === 'Taxi'){
			return !validateBeforeSend.type4({usuario,manzana,villa,taxiAsunto,nombre,apellido,cedula,userType,entryVehicle,placa});
		}else{
			return true;
		}
	};

	const sendVal = () => {
		console.log('aqui');
		if(taxiAsunto=='Taxi a recoger' || taxiAsunto=='Asunto') {
			console.log('si');
			send();
		}else {
			console.log('no');
			setVisible(true);
		}
	};

	const send = async (origin='default') => {
    
		if(origin === 'reintent') {
			if(intentsCounter === 2) {setDefault(); return null;}
			setintentsCounter(intentsCounter+1);
		}

		restoreCounter();
		setModalState(true);
		setResponse('counter');

		// make resquest
		const res = await api.peticionEntrada({
			token: user.token,
			nombres:nombre,
			apellidos:apellido,
			cedula, placa,
			motivo:asunto,
			id_casa:9,
			tipo_entrada: entryVehicle
		});

		if(!res){
			let id = setInterval(async()=> await counting(),1000);
			setIDinterval(prev=> [...prev, id]);
		}else {
			setResponse('fail');
			restoreCounter();
		}   
	};

	const counting = async() => {
		setCounter(prev => prev-1);
		// revisar respuesta
		if(counter === 0) restoreCounter();
		// if(response) MAKE REQUEST
		// eslint-disable-next-line no-unused-vars
		const res = await api.checkResponse({
			token: user.token,
			nombres:nombre,
			cedula, placa,
			motivo:asunto,
			id_casa:9,
		});

		// console.log(res)
		// console.log(counter)
		// if(res==="aceptada"){
		//     restoreCounter()
		//     setResponse("granted");
		// }
		// if(res==="reachazada"){
		//     restoreCounter()
		//     setResponse("denied");
		// }
		// if(res==="error"){
		//     restoreCounter()
		//     setResponse("fail");
		// }
		// if(res==="pendiente"){
		//     if(res.number !== "") setPhone(res.number)
		// }
        
	};

	// const manageResponse = (resp) => {

	// }

	const taxiModalClose = (close_only) => {
		setVisible(false);
		close_only && setTaxiAsunto('Asunto');
	};

	const pinHandler = pinHnadlerFunction(setPin1, pin2Ref, setPin2, pin3Ref, setPin3, pin4Ref, setPin4);

	const { openBottomDrawer, select } = selectionHandlerFunctions(modalRef, setEditable, setEntryVehicle, setManzana, setVilla, setDefault, setTaxiAsunto, setAsunto, setUsuario, setUserType, setSelectionEnable);

	const pickImage = pickImageFuntion(setImages);

	return (
		<SafeAreaView style={styles.container}>
			{
				Platform.OS === 'android'
					?<StatusBar translucent={false} barStyle="dark-content" hidden={false} backgroundColor={theme.palette.white}/>
					:null
			}
			<Header navigation={navigation} screen={true}/>
			<MainScrollview images={images} nombre={nombre} setNombre={setNombre} apellido={apellido} setApellido={setApellido} manzana={manzana} setManzana={setManzana} usuario={usuario} setUsuario={setUsuario} villa={villa} setVilla={setVilla} placa={placa} setPlaca={setPlaca} selectionData={selectionData} selectionEnable={selectionEnable} cedula={cedula} setCedula={setCedula} asunto={asunto} setAsunto={setAsunto} taxiAsunto={taxiAsunto} setTaxiAsunto={setTaxiAsunto} entryVehicle={entryVehicle} setEntryVehicle={setEntryVehicle} userType={userType} setUserType={setUserType} pin1={pin1} pin2={pin2} pin3={pin3} pin4={pin4} editable={editable} setSelection={setSelection} pin1Ref={pin1Ref} pin2Ref={pin2Ref} pin3Ref={pin3Ref} pin4Ref={pin4Ref} placaRef={placaRef} openBottomDrawer={openBottomDrawer} sendButtonActivationHandler={sendButtonActivationHandler} sendVal={sendVal} pinHandler={pinHandler} pickImage={pickImage}></MainScrollview>
			<ModalBottomSelection selection={selection} modalRef={modalRef} select={select}></ModalBottomSelection>
			{response==='counter' && <Modal visible={modalState} animationType="fade" transparent={true} children={<Counter phone={phone} counter={counter} setOpen={setModalState} setDefault={setDefault}/>}/>}
			{response==='granted' && <Modal visible={modalState} animationType="fade" transparent={true} children={<AccessGranted setOpen={setModalState} setDefault={setDefault}/>} />}
			{response==='denied' && <Modal visible={modalState} animationType="fade" transparent={true} children={<AccessDenied setOpen={setModalState} setDefault={setDefault}/>} />}
			{response==='fail' && <Modal visible={modalState} animationType="fade" transparent={true} children={<ErrorConexion saveAgain={send} />}/>}
			{visible && <TaxiNamePopup nombreTaxista={nombreTaxista} setNombreTaxista={setNombreTaxista} apellidoTaxista={apellidoTaxista} setApellidoTaxista={setApellidoTaxista} cedulaTaxista={cedulaTaxista} setCedulaTaxista={setCedulaTaxista} visible={visible} setVisible={setVisible} send={send} taxiModalClose={taxiModalClose}/>}
		</SafeAreaView>
	);
};

export default Main;



