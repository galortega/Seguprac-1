import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Selection from '../selection';
import theme from '../../theme';
import api from '../../api';
import { UserContext } from '../../user_context';

const USUARIOS = ['Usuario', 'Visita', 'Residente', 'Familiar', 'Empleado', 'Expreso escolar', 'Delivery', 'Taxi', 'Mudanza', 'Servicios Básicos'];

export function FirstSelection(props) {
	const [user] = useContext(UserContext);


	return (
		<View style={styles.textInput2Container}>
			<Selection setOpen={props.openBottomDrawer} style={styles.picker1} placeholder={props.usuario} options={USUARIOS} setResponse={props.setUsuario} setSelection={props.setSelection} />
			<Selection setOpen={props.openBottomDrawer} style={props.usuario !== 'Expreso escolar' ? styles.picker : [styles.picker, {
				backgroundColor: 'rgba(0,0,0,0.4)'
			}]} placeholder={props.manzana} options={user.mz} setResponse={props.setManzana} setSelection={props.setSelection} disabled={props.selectionEnable} />
			<Selection setOpen={props.openBottomDrawer} style={props.usuario !== 'Expreso escolar' ? styles.picker : [styles.picker, {
				backgroundColor: 'rgba(0,0,0,0.4)'
			}]} placeholder={props.villa} options={user.villas} setResponse={props.setVilla} setSelection={props.setSelection} disabled={props.selectionEnable} />
		</View>);
}

const styles = StyleSheet.create({
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
		fontSize: theme.fontsize.input,
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
		fontSize: theme.fontsize.input,
	}
});
