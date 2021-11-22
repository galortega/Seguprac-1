import React, { useRef, useState } from 'react';
import {
	FlatList,
	Image,
	Platform,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import cameraIcon from '../../../assets/camara.png';
import galeryIcon from '../../../assets/captura-de-pantalla.png';
import { tiposAutorizacion, tiposUsuario } from '../../utils/constants';
import { chooseOpenCameraMethod } from './actions/chooseOpenCameraMethod';
import { pickImageFuntion } from './actions/pickImageFunction';
import { postAutorizacion } from './apiResidentes';
import { ImageSelection } from './components/ImageSelection';
import Selection from './components/SelectionComponent';
import theme from './styles/theme';

const TIPO_AUTH = _.values(tiposAutorizacion);
const USUARIOS = _.values(tiposUsuario);

export default function CrearAutorizacionesScreen() {
	const [imagen, setImagen] = useState(null);
	const [nombres, setNombre] = useState('');
	const [apellidos, setApellido] = useState('');
	const [cedula, setCedula] = useState('');
	const [asunto, setAsunto] = useState('');
	const [telefono, setTelefono] = useState('');
	const [tipo, setTipo] = useState('Tipo de autorización');
	const [tipo_usuario, setTipoUsuario] = useState(tiposUsuario.VISITA);
	const [selectionList, setSelectionList] = useState([]);
	const modalRef = useRef(null);
	const cameraOptionsRef = useRef(null);

	const openBottomDrawer = () => {
		const modal = modalRef.current;

		if (modal) {
			modal.open();
		}
	};

	const selectionHandler = (item, type) => {
		if (type === tiposUsuario.VISITA) setTipoUsuario(item);
		else setTipo(item);
		modalRef.current.close();
	};

	const buttonActivationHandler = () => {
		if ([nombres, apellidos, cedula, asunto, telefono].includes('')) return false;
		else return true;
	};

	const openCameraOptions = chooseOpenCameraMethod(cameraOptionsRef);
	const pickImageCamera = pickImageFuntion(setImagen, true);
	const pickImageGallery = pickImageFuntion(setImagen, false);

	return (
		<SafeAreaView style={styles.container}>
			{Platform.OS === 'android' ? (
				<StatusBar
					translucent={false}
					barStyle="light-content"
					hidden={false}
					backgroundColor={theme.palette.purple}
				/>
			) : null}
			<ImageSelection image={imagen} pickImage={openCameraOptions} />
			<Selection
				placeholder={tipo}
				options={TIPO_AUTH}
				setSelectionList={setSelectionList}
				openHandler={openBottomDrawer}
			/>
			{tipo === tiposAutorizacion.FIJA && (
				<Selection
					placeholder={tipo_usuario}
					options={USUARIOS}
					setSelectionList={setSelectionList}
					openHandler={openBottomDrawer}
				/>
			)}
			<View style={styles.textInput2Container}>
				<TextInput
					placeholder="Nombres"
					style={styles.textInputInside}
					returnKeyType="next"
					value={nombres}
					onChangeText={(text) => setNombre(text)}
				/>
				<TextInput
					placeholder="Apellidos"
					style={styles.textInputInside}
					returnKeyType="next"
					value={apellidos}
					onChangeText={(text) => setApellido(text)}
				/>
			</View>
			<TextInput
				placeholder="Cédula"
				keyboardType="numeric"
				style={styles.textInput}
				returnKeyType="next"
				value={cedula}
				onChangeText={(text) => setCedula(text)}
			/>
			<TextInput
				placeholder="Asunto"
				style={styles.textInput}
				returnKeyType="next"
				value={asunto}
				onChangeText={(text) => setAsunto(text)}
			/>
			<TextInput
				placeholder="Telefono"
				keyboardType="numeric"
				style={styles.textInput}
				returnKeyType="next"
				value={telefono}
				onChangeText={(text) => setTelefono(text)}
			/>
			<TouchableOpacity
				disabled={!buttonActivationHandler()}
				onPress={async () => {
					await postAutorizacion({
						imagen,
						nombres,
						apellidos,
						cedula,
						asunto,
						telefono,
						tipo,
						tipo_usuario,
						mz: '124',
						villa: '12',
					});
				}}
				style={[
					styles.button,
					{
						backgroundColor: buttonActivationHandler()
							? theme.palette.purple
							: theme.palette.lightGrey,
					},
				]}
			>
				<Text style={styles.buttonText}>Autorizar</Text>
			</TouchableOpacity>
			<Modalize
				ref={modalRef}
				snapPoint={theme.screenSize.height * 0.3}
				modalHeight={theme.screenSize.height * 0.3}
			>
				<FlatList
					data={selectionList}
					style={{ padding: theme.normalize(10) }}
					keyExtractor={(i) => i}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								style={{ width: '100%', height: theme.normalize(45), alignItems: 'center' }}
								onPress={() => selectionHandler(item, selectionList[0])}
							>
								<Text style={{ fontSize: theme.fontsize.input }}>{item}</Text>
							</TouchableOpacity>
						);
					}}
				/>
			</Modalize>
			<Modalize
				ref={cameraOptionsRef}
				snapPoint={theme.screenSize.height * 0.2}
				modalHeight={theme.screenSize.height * 0.2}
				disableScrollIfPossible={true}
			>
				<View
					style={{
						width: theme.screenSize.width,
						height: theme.screenSize.height * 0.2,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-around',
						padding: theme.normalize(25),
					}}
				>
					<TouchableOpacity onPress={pickImageCamera} style={{ alignItems: 'center' }}>
						<Image
							source={cameraIcon}
							style={{ width: theme.normalize(50), height: theme.normalize(50) }}
						/>
						<Text
							style={{
								fontsize: theme.fontsize.title,
								color: theme.palette.black,
								fontWeight: 'bold',
							}}
						>
							Camara
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={pickImageGallery} style={{ alignItems: 'center' }}>
						<Image
							source={galeryIcon}
							style={{ width: theme.normalize(50), height: theme.normalize(50) }}
						/>
						<Text
							style={{
								fontsize: theme.fontsize.title,
								color: theme.palette.black,
								fontWeight: 'bold',
							}}
						>
							Galeria
						</Text>
					</TouchableOpacity>
				</View>
			</Modalize>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: theme.screenSize.width,
		alignItems: 'center',
		backgroundColor: theme.palette.white,
	},
	keyboardAware: {
		width: theme.screenSize.width,
		alignItems: 'center',
		justifyContent: 'center',
	},
	scrollview: {
		width: '100%',
		alignItems: 'center',
	},
	picker2: {
		width: '90%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.lightGrey,
		borderWidth: theme.normalize(3),
		marginBottom: theme.normalize(7),
		paddingHorizontal: theme.normalize(10),
		fontSize: theme.fontsize.input,
	},
	textInput: {
		width: '90%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.lightGrey,
		borderWidth: theme.normalize(3),
		marginBottom: theme.normalize(10),
		fontSize: theme.fontsize.input,
		padding: theme.normalize(10),
	},
	textInputInside: {
		width: '49.5%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.lightGrey,
		borderWidth: theme.normalize(3),
		fontSize: theme.fontsize.input,
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
		marginBottom: theme.normalize(10),
	},
	textInput2: {
		width: '33%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.lightGrey,
		borderWidth: theme.normalize(3),
		fontSize: theme.fontsize.input,
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
		borderColor: theme.palette.lightGrey,
		borderWidth: theme.normalize(3),
		fontSize: theme.fontsize.input,
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
		backgroundColor: theme.palette.lightGrey,
		borderRadius: theme.normalize(7),
		// elevation: 5,
		// shadowColor: theme.palette.black,
		// shadowOffset: { width: 5, height: 5 },
		// shadowOpacity: 0.3,
		marginBottom: theme.normalize(5),
	},
	buttonText: {
		fontSize: theme.fontsize.button,
		fontWeight: 'bold',
		color: theme.palette.white,
		textAlign: 'center',
	},
});
