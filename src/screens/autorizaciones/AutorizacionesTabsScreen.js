import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FijasScreen from './screens/Fijas';
import TemporalScreen from './screens/Temporales';
import { Entypo } from "@expo/vector-icons"
import theme from './styles/theme';
import { getAutorizaciones } from "./apiResidentes"

const Tab = createMaterialTopTabNavigator();

function FloatingButton({ pressHandler }) {
	return (
		<TouchableOpacity style={styles.floatButton} onPress={pressHandler}>
			<Entypo name="plus" color={theme.palette.white} size={theme.normalize(25)} />
		</TouchableOpacity>);
}

export default function Authorizations({ navigation, usuario }) {

	const pressHandler = () => navigation.navigate("Crear autorizaciones")

	useEffect(() => {
		const obtenerAutorizaciones = async () => {
			// const response = await getProfile(usuario.token);
			// const { casa } = response.respuesta;
			const res = await getAutorizaciones(124, 12)
			console.log(res)
		}

		obtenerAutorizaciones()
	}, [])

	return (
		<React.Fragment>
			<Tab.Navigator
				initialRouteName="Temporales"
				screenOptions={{
					tabBarLabelStyle: { textTransform: 'capitalize', fontWeight: "bold", fontSize: theme.fontsize.input },
					tabBarIndicatorStyle: { backgroundColor: theme.palette.purple },
					tabBarActiveTintColor: theme.palette.purple,
					tabBarInactiveTintColor: theme.palette.lightGrey,
					tabBarPressColor: theme.palette.lightPurple,
					tabBarPressOpacity: theme.palette.lightPurple,
				}}>
				<Tab.Screen name="Temporales" component={TemporalScreen} />
				<Tab.Screen name="Fijas" component={FijasScreen} />
			</Tab.Navigator>
			<FloatingButton pressHandler={pressHandler} />
		</React.Fragment>
	);
}

const styles = StyleSheet.create({
	floatButton: {
		position: 'absolute',
		width: theme.normalize(55),
		height: theme.normalize(55),
		right: theme.normalize(15),
		bottom: theme.normalize(15),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: theme.normalize(55),
		backgroundColor: theme.palette.purple,
		elevation: 5,
		shadowColor: theme.palette.black,
		shadowOffset: { width: 5, height: 5 },
		shadowOpacity: 0.3,
	},
	floatButtonText: {
		fontSize: theme.normalize(30),
		color: theme.palette.white,
		fontWeight: 'bold',
	},
});