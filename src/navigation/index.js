import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import Entrance from '../screens/entrance';
import Splash from '../screens/splash';
import AutorizacionesTabsScreen from "../screens/autorizaciones/AutorizacionesTabsScreen";
import CrearAutorizaciones from "../screens/autorizaciones/CrearAutorizacionesScreen";
import Exit from '../screens/exit';
import theme from '../theme';

const Navigator = () => {
	const Stack = createStackNavigator();

	const config = {
		animation: 'easing',
		config: {
			stiffness: 1000,
			damping: 500,
			mass: 3,
			overshootClamping: true,
			restDisplacementThreshold: 0.01,
			restSpeedThreshold: 0.01,
		},
	};

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Autorizaciones" screenOptions={{ transitionSpec: { open: config, close: config } }}>
				<Stack.Screen
					name="Splash"
					component={Splash}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Autorizaciones"
					component={AutorizacionesTabsScreen}
					options={{
						headerShown: true,
						headerTintColor: theme.palette.white,
						headerTitleAlign: "center",
						headerStyle: { backgroundColor: theme.palette.purple },
						headerTitleStyle: { color: theme.palette.white, fontSize: theme.fontsizeResponsive.button, fontWeight: "400" },
					}}
				/>
				<Stack.Screen
					name="Crear autorizaciones"
					component={CrearAutorizaciones}
					options={{
						headerShown: true,
						title: "Crear autorización",
						headerTintColor: theme.palette.white,
						headerTitleAlign: "center",
						headerStyle: { backgroundColor: theme.palette.purple },
						headerTitleStyle: { color: theme.palette.white, fontSize: theme.fontsizeResponsive.button, fontWeight: "400" },
					}}
				/>
				<Stack.Screen
					name="Entrance"
					component={Entrance}
					options={{ headerShown: false, animationEnabled: false }}
				/>
				<Stack.Screen
					name="Exit"
					component={Exit}
					options={{ headerShown: false, animationEnabled: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
