import React, { useState, useEffect, useRef, useContext } from 'react';
import { SafeAreaView, View, TextInput, Platform, Modal, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import Header from '../../components/header';
import theme from '../../theme';
import Loading from './Loading';
import { UserContext } from '../../user_context';
import Selection from '../../components/selection';
import validateBeforeSend from '../../functions/validateBeforeSend';
import AccessGranted from '../../components/lottie/AccessGrantedAnimationLottie';
import ErrorConexion from '../../components/ErrorConexion';
import { Pin } from '../../components/Pin';
import { ModalBottomSelection } from '../../components/ModalBottomSelection';
import { SendButton } from '../../components/sendButton';
import { FirstSelection } from '../../components/FirstSelection';

const { width, height } = Dimensions.get('screen');
const TAXI = ['Asunto', 'Taxi vacio', 'Taxi con residente', 'Taxi con visita', 'Taxi con empleados'];
const MEDIOS = ['Medio', 'Caminando', 'Auto', 'Camioneta', 'Buseta', 'Moto', 'Motoneta', 'Camión', 'Bicicleta'];

const Main = ({ navigation }) => {
	// STATES
	// eslint-disable-next-line no-unused-vars
	const [user, setUser] = useContext(UserContext);
	const [response, setResponse] = useState('');
	const [manzana, setManzana] = useState('Mz');
	const [usuario, setUsuario] = useState('Usuario');
	const [villa, setVilla] = useState('Villa');
	const [placa, setPlaca] = useState('');
	const [selectionData, setselectionData] = useState([]);
	const [selectionEnable, setSelectionEnable] = useState(true);
	const [cedula, setCedula] = useState('');
	const [cedulaTaxista, setCedulaTaxista] = useState('');
	const [asunto, setAsunto] = useState('');
	const [taxiAsunto, setTaxiAsunto] = useState('Asunto');
	const [entryVehicle, setEntryVehicle] = useState('Medio');
	const [userType, setUserType] = useState('Listas');
	const [userTypeTaxi, setUserTypeTaxi] = useState('Listas');
	const [pin1, setPin1] = useState('');
	const [pin2, setPin2] = useState('');
	const [pin3, setPin3] = useState('');
	const [pin4, setPin4] = useState('');
	const [modalState, setModalState] = useState(false);
	const [editable, setEditable] = useState(true);
	const [selection, setSelection] = useState([]);

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

	const openBottomDrawer = () => {
		const modal = modalRef.current;

		if (modal) {
			modal.open();
		}
	};

	const sendButtonActivationHandler = () => {
		if (['Visita', 'Delivery', 'Mudanza', 'Servicios Básicos'].includes(usuario)) {
			return !validateBeforeSend.type1({ usuario, manzana, villa, cedula, asunto, entryVehicle, placa });
		} else if (['Residente', 'Empleado'].includes(usuario)) {
			return !validateBeforeSend.type2({ usuario, manzana, villa, userType, cedula, asunto, entryVehicle, placa });
		} else if (usuario === 'Expreso escolar') {
			return !validateBeforeSend.type3({ usuario, userType, cedula, asunto, entryVehicle, placa });
		} else if (usuario === 'Taxi') {
			return !validateBeforeSend.type4({ usuario, manzana, villa, taxiAsunto, cedula, userType, entryVehicle, placa });
		}
		else {
			return true;
		}
	};

	const setDefault = (fromUsuarios = 'default') => {

		if (fromUsuarios === 'asunto') {
			setselectionData([]);
			setSelectionEnable(true);
			setCedula('');
			setCedulaTaxista('');
			setEntryVehicle('Medio');
			setModalState(false);
			setEditable(true);
			setSelection([]);
			setPlaca('');
			setResponse('');
		} else {
			setManzana('Mz');
			setUsuario('Usuario');
			setResponse('');
			setVilla('Villa');
			setPin1('');
			setPin2('');
			setPin3('');
			setPin4('');
			setAsunto('');
			setselectionData([]);
			setSelectionEnable(true);
			setCedula('');
			setCedulaTaxista('');
			setTaxiAsunto('Asunto');
			setEntryVehicle('Medio');
			setUserType('Listas');
			setModalState(false);
			setEditable(true);
			setSelection([]);
			setPlaca('');
		}
	};

	const send = () => {
		setModalState(true);
		setResponse('load');
		setTimeout(() => setResponse(response == 'fail' ? 'success' : 'fail'), 3000);
		// enviar solicitud
		// api.peticionEntrada({})
	};

	// const manageResponse = (resp) => {

	// }

	const pinHandler = (text, id) => {
		console.log(text, id);
		if (id == '1') { setPin1(text); pin2Ref.current.focus(); }
		if (id == '2') { setPin2(text); pin3Ref.current.focus(); }
		if (id == '3') { setPin3(text); pin4Ref.current.focus(); }
		if (id == '4') { setPin4(text); }
	};

	const select = (item, type) => {
		console.log(type, item);
		const arr = ['Caminando', 'Bicicleta', 'Motoneta'];
		if (type === 'Medio') {
			if (arr.includes(item)) setEditable(false);
			else setEditable(true);
			setEntryVehicle(item);
		}
		if (type === 'Mz') setManzana(item);
		if (type === 'Villas') setVilla(item);
		if (type === 'Asunto') taxiHandler(item);
		if (type === 'Usuario') { setDefault('usuarios'); setUsuario(item); userTypeSelectedHandler(item); }
		modalRef.current.close();
	};

	const userTypeSelectedHandler = (userType) => {

		if (userType === 'Residente') setUserType('Lista de residentes');
		if (userType === 'Empleado') setUserType('Lista de empleados');
		if (userType === 'Expreso escolar') expresoEscolarHandler();
		if (userType === 'Taxi') setUserType('Nombre del taxista');
		if (userType === 'Visita') setUserType('Lista de visitas');
		if (userType === 'Delivery') setUserType('Lista de delivery');
		if (userType === 'Mudanza') setUserType('Lista de mudanza');
		if (userType === 'Servicios Básicos') setUserType('Lista de servicios básicos');
		if (userType === 'Familiar') setUserType('Lista de familiares');


	};

	const taxiHandler = (item) => {
		setTaxiAsunto(item);
		setDefault('asunto');
		if (item === 'Taxi con residente') setUserTypeTaxi('Nombre del residente');
		if (item === 'Taxi con visita') setUserTypeTaxi('Nombre del visitante');
		if (item === 'Taxi con empleados') setUserTypeTaxi('Nombre del empleado');
	};

	const expresoEscolarHandler = () => {
		setUserType('Lista de expreso escolar');
		setSelectionEnable(false);
	};

	return (
		<SafeAreaView style={styles.container}>
			{
				Platform.OS === 'android'
					? <StatusBar translucent={false} barStyle="dark-content" hidden={false} backgroundColor={theme.palette.white} />
					: null
			}
			<Header navigation={navigation} screen={false} />
			<ScrollView style={{ width: '100%', flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={Platform.OS === 'android' ? true : false}>
				<Pin pin1={pin1} pin2={pin2} pin3={pin3} pin4={pin4} pin1Ref={pin1Ref} pin2Ref={pin2Ref} pin3Ref={pin3Ref} pin4Ref={pin4Ref} pinHandler={pinHandler}></Pin>
				<FirstSelection manzana={manzana} setManzana={setManzana} usuario={usuario} setUsuario={setUsuario} villa={villa} setVilla={setVilla} selectionEnable={selectionEnable} setSelection={setSelection} openBottomDrawer={openBottomDrawer} />
				{usuario === 'Taxi' && <Selection setOpen={openBottomDrawer} style={styles.picker2} placeholder={taxiAsunto} options={TAXI} setResponse={setTaxiAsunto} setSelection={setSelection} />}
				<Selection setOpen={openBottomDrawer} style={styles.picker2} placeholder={userType} options={selectionData} setResponse={setUserType} setSelection={setSelection} />
				{!['Taxi vacio', 'Asunto'].includes(taxiAsunto) && <TextInput placeholder="Cédula" keyboardType="numeric" style={styles.textInput} returnKeyType="next" value={cedulaTaxista} onChangeText={(text) => setCedulaTaxista(text)} />}
				{!['Taxi vacio', 'Asunto'].includes(taxiAsunto) && <View style={{ width: '90%', height: theme.normalize(5), backgroundColor: theme.palette.white, marginTop: theme.normalize(7), marginBottom: theme.normalize(14) }} />}
				{!['Taxi vacio', 'Asunto'].includes(taxiAsunto) && <Selection setOpen={openBottomDrawer} style={styles.picker2} placeholder={userTypeTaxi} options={selectionData} setResponse={setUserTypeTaxi} setSelection={setSelection} />}
				<TextInput placeholder="Cédula" keyboardType="numeric" style={styles.textInput} returnKeyType="next" value={cedula} onChangeText={(text) => setCedula(text)} />
				{usuario !== 'Taxi' && <TextInput placeholder="Asunto" style={styles.textInput} returnKeyType="next" value={asunto} onChangeText={(text) => setAsunto(text)} />}
				<Selection setOpen={openBottomDrawer} style={styles.picker2} placeholder={entryVehicle} options={MEDIOS} setResponse={setEntryVehicle} setSelection={setSelection} />
				<TextInput placeholder="Placa" style={styles.textInput} returnKeyType="next" editable={editable} ref={placaRef} value={placa} onChangeText={(text) => setPlaca(text)} />
				<SendButton title={'Guardar'} sendButtonActivationHandler={sendButtonActivationHandler} sendVal={send}></SendButton>
			</ScrollView>
			<ModalBottomSelection selection={selection} modalRef={modalRef} select={select}></ModalBottomSelection>
			{response === 'load' && <Modal visible={modalState} animationType="fade" transparent={true} children={<Loading />} />}
			{response === 'success' && <Modal visible={modalState} animationType="fade" transparent={true} children={<AccessGranted setOpen={setModalState} setDefault={setDefault} />} />}
			{response === 'fail' && <Modal visible={modalState} animationType="fade" transparent={true} children={<ErrorConexion saveAgain={send} />} />}
		</SafeAreaView>
	);
};

export const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		width: width,
		alignItems: 'center',
		backgroundColor: theme.palette.white
	},
	keyboardAware: {
		display: 'flex',
		width: width,
		alignItems: 'center',
		justifyContent: 'center',
	},
	scrollview: {
		width: '100%',
		alignItems: 'center',
		paddingTop: theme.normalize(15)
	},
	imagePickerContainer: {
		width: theme.screenSize.width * 0.9,
		maxWidth: width > 400 ? theme.scaleLimits.inputWidth : width,
		height: height > 800 ? theme.normalize(180) : theme.normalize(160),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.1)',
		marginBottom: theme.normalize(10),
		marginTop: theme.normalize(10),
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	picker: {
		width: '25%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.black,
		borderWidth: theme.normalize(3),
		marginBottom: theme.normalize(7),
		paddingHorizontal: theme.normalize(10),
		fontSize: theme.fontsizeResponsive.input,
	},
	picker1: {
		width: '45%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.black,
		borderWidth: theme.normalize(3),
		marginBottom: theme.normalize(7),
		paddingHorizontal: theme.normalize(10),
		fontSize: theme.fontsizeResponsive.input,
	},
	picker2: {
		width: '90%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.black,
		borderWidth: theme.normalize(3),
		marginBottom: theme.normalize(7),
		paddingHorizontal: theme.normalize(10),
		fontSize: theme.fontsizeResponsive.input,
	},
	pinContainer: {
		width: '90%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: theme.normalize(7)
	},
	pinInput: {
		width: '24%',
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.black,
		borderWidth: theme.normalize(3),
		fontSize: theme.fontsizeResponsive.input,
		fontWeight: 'bold',
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		textAlign: 'center'
	},
	textInput: {
		width: '90%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.black,
		borderWidth: theme.normalize(3),
		marginBottom: theme.normalize(7),
		fontSize: theme.fontsizeResponsive.input,
		padding: theme.normalize(10),
	},
	textInput2Container: {
		width: '90%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: theme.normalize(7)
	},
	textInput2: {
		width: '33%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.black,
		borderWidth: theme.normalize(3),
		fontSize: theme.fontsizeResponsive.input,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	textInput3: {
		width: '38%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.black,
		borderWidth: theme.normalize(3),
		fontSize: theme.fontsizeResponsive.input,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	button: {
		width: '90%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.palette.black,
		borderRadius: theme.normalize(7),
	},
	buttonText: {
		fontSize: theme.fontsizeResponsive.button,
		fontWeight: 'bold',
		color: theme.palette.white,
		textAlign: 'center'
	},
});

export default Main;