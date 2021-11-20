/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, SafeAreaView, StyleSheet, Animated, Platform } from 'react-native';
import theme from '../../theme';
import logo from '../../../assets/logo.png';
import { UserContext } from '../../user_context';
import axios from 'axios';

// SplashScreen.preventAutoHideAsync()
const Splash = ({ navigation }) => {
	const [user, setUser] = useContext(UserContext);
	const imageAnimatedValue = new Animated.Value(0);

	useEffect(() => {
		animationEvent();

		setTimeout(getUserDataStorage, 4000);
	}, []);

	const getUserDataStorage = async () => {
		// await SplashScreen.hideAsync();
		try {
			const jsonValue = await AsyncStorage.getItem('@user_data');
			const data = jsonValue != null ? JSON.parse(jsonValue) : null;
			console.log(data);
			if (data === null) {
				navigation.navigate('Login');
				axios.defaults.headers.common['Authorization'] = `token ${data.token}`;
				axios.defaults.headers.post['Content-Type'] = 'application/json';
			}
			else { setUser(data); navigation.navigate('Entrance'); }

		} catch (e) {
			console.log(e);
			navigation.navigate('Login');
		}
	};

	const animationLogoStart = {
		opacity: imageAnimatedValue,
		transform: [{
			scale: imageAnimatedValue,
		}]
	};

	const animationEvent = () => {
		Animated.timing(imageAnimatedValue, {
			toValue: 1,
			useNativeDriver: true,
			duration: 1200,
			delay: 300,
		}).start();
	};

	return (
		<SafeAreaView style={styles.container}>
			{
				Platform.OS === 'android'
					? <StatusBar translucent={false} barStyle="light-content" hidden={false} backgroundColor={theme.palette.white} />
					: null
			}
			<Animated.View style={[styles.imgContainer, animationLogoStart]}>
				<Image source={logo} style={styles.image} resizeMode="cover" />
			</Animated.View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.palette.white,
	},
	imgContainer: {
	},
	image: {
		width: theme.normalize(150),
		height: theme.normalize(150),
	}
});
export default Splash;