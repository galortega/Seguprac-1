/* eslint-disable no-unused-vars */
import React, { useState, useRef, useContext } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Image,
	Platform,
	TouchableOpacity,
	StatusBar,
	TextInput,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../../../assets/logo.png';
import theme from '../../theme';
import Loading from './Loading';
import api from '../../api';
import { UserContext } from '../../user_context';

const Login = ({ navigation }) => {
	const [user, setUser] = useContext(UserContext);
	const [show, setShow] = useState(false); // password visibility state
	const [username, setUsername] = useState(''); // username text input state
	const [password, setPassword] = useState(''); // password text input state
	const [modalState, setModalState] = useState(false); // modal visibility state
	const [snackbarState, setSnackbarState] = useState(false); //
	const [signResponse, setSignResponse] = useState(false); //
	const usernameRef = useRef(); // username input reference
	const passwordRef = useRef(); // password input reference
	const usernameRefContainer = useRef(); // username input view container reference
	const passwordRefContainer = useRef(); // password input view container reference

	const passwordVisibility = () => setShow(!show);

	const usernameHandler = (text) => {
		setUsername(text);
	};

	const passwordHandler = (text) => {
		setPassword(text);
	};

	const goNextInput = () => {
		passwordRef.current.focus();
	};

	const sign = async () => {
		usernameRefContainer.current.setNativeProps({ borderColor: theme.palette.white });
		passwordRefContainer.current.setNativeProps({ borderColor: theme.palette.white });
		if (username === '' || password === '') {
			if (username == '')
				usernameRefContainer.current.setNativeProps({ borderColor: theme.palette.red });
			if (password == '')
				passwordRefContainer.current.setNativeProps({ borderColor: theme.palette.red });
		} else {
			setModalState(true);
			// Making login request
			const { response, userData } = await api.login(username, password);
			console.log(userData)
			setUser(userData);
			setTimeout(() => {
				if (response) {
					navigation.navigate('Entrance');
					setModalState(false);
					setSnackbarState(false);
					setUsername('');
					setPassword('');
				} else {
					setSnackbarState(true);
					setSignResponse(false);
				}
			}, 2000);
		}
		console.log(username, password);
	};

	return (
		<SafeAreaView style={styles.container}>
			{Platform.OS === 'android' ? (
				<StatusBar
					translucent={false}
					barStyle="dark-content"
					hidden={false}
					backgroundColor={theme.palette.white}
				/>
			) : null}
			<KeyboardAwareScrollView
				contentContainerStyle={styles.container}
				bounces={false}
				enableOnAndroid={true}
				extraHeight={10}
			>
				<Image source={logo} style={styles.image} resizeMode="center" />
				<Text style={styles.title}>Inicio de sesión</Text>
				<View style={styles.textInputWrapper} ref={usernameRefContainer}>
					<MaterialIcons
						color={theme.palette.black}
						name="person"
						style={{ position: 'absolute', left: '4%', fontSize: theme.fontsizeResponsive.title }}
					/>
					<TextInput
						placeholder="Usuario"
						style={styles.textInput}
						value={username}
						returnKeyType="next"
						onSubmitEditing={goNextInput}
						ref={usernameRef}
						onChangeText={usernameHandler}
					/>
				</View>
				{modalState && (
					<Loading
						open={modalState}
						navigation={navigation}
						change={snackbarState}
						snackbarResponse={signResponse}
						openModal={setModalState}
						changeState={setSnackbarState}
					/>
				)}
				<View style={styles.textInputWrapper} ref={passwordRefContainer}>
					<MaterialIcons
						color={theme.palette.black}
						name="lock"
						style={{ position: 'absolute', left: '4%', fontSize: theme.fontsizeResponsive.title }}
					/>
					<TextInput
						value={password}
						placeholder="Contraseña"
						style={styles.textInput}
						secureTextEntry={show ? false : true}
						returnKeyType="done"
						ref={passwordRef}
						onSubmitEditing={sign}
						onChangeText={passwordHandler}
					/>
					<TouchableOpacity
						style={{
							position: 'absolute',
							right: '5%',
							alignItems: 'center',
							justifyContent: 'center',
							width: '10%',
							height: '50%',
						}}
						onPress={passwordVisibility}
					>
						<MaterialIcons
							color={theme.palette.black}
							name={show ? 'visibility-off' : 'visibility'}
							style={{ fontSize: theme.fontsizeResponsive.title }}
						/>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.button} onPress={sign}>
					<Text style={styles.buttonText}>Iniciar</Text>
				</TouchableOpacity>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		width: theme.screenSize.width,
		height: theme.screenSize.height,
		alignItems: 'center',
		// justifyContent:"center",
		backgroundColor: theme.palette.white,
	},
	image: {
		width: theme.normalize(200),
		transform: [{ scale: 0.7 }],
		height: theme.screenSize.height * 0.33,
	},
	title: {
		fontSize: theme.normalize(30),
		fontWeight: 'bold',
		color: theme.palette.black,
		marginBottom: theme.normalize(50),
	},
	textInputWrapper: {
		width: '90%',
		// maxWidth: theme.scaleLimits.inputWidth,
		height: theme.normalize(50),
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: theme.palette.white,
		borderWidth: theme.normalize(4),
		marginBottom: theme.normalize(10),
		elevation: 5,
		shadowColor: theme.palette.black,
		shadowOffset: { width: 5, height: 5 },
		shadowOpacity: 0.3,
	},
	textInput: {
		width: '100%',
		height: '100%',
		borderRadius: theme.normalize(7),
		fontSize: theme.fontsizeResponsive.input,
		paddingLeft: '14%',
		paddingRight: '14%',
	},
	button: {
		width: '90%',
		maxWidth: theme.scaleLimits.inputWidth,
		height: theme.normalize(50),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.palette.black,
		borderRadius: theme.normalize(7),
		elevation: 5,
		shadowColor: theme.palette.black,
		shadowOffset: { width: 5, height: 5 },
		shadowOpacity: 0.3,
		marginTop: theme.normalize(10),
	},
	buttonText: {
		fontSize: theme.fontsizeResponsive.button,
		fontWeight: 'bold',
		color: theme.palette.white,
		textAlign: 'center',
	},
});

export default Login;
