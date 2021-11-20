import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../theme';

export function SendButton(props) {
	return (
		<TouchableOpacity style={[styles.button, {backgroundColor: props.sendButtonActivationHandler() ? 'rgba(0,0,0,0.4)' : theme.palette.black}]} onPress={props.sendVal} disabled={props.sendButtonActivationHandler() ? true : false}>
			<Text style={styles.buttonText}>
				{props.title}
			</Text>
		</TouchableOpacity>);
}

const styles = StyleSheet.create({
	button: {
		width: '90%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.palette.black,
		borderRadius: theme.normalize(7),
		// elevation: 5,
		// shadowColor: theme.palette.black,
		// shadowOffset: {width:5,height:5},
		// shadowOpacity: 0.3,
		// marginBottom: theme.normalize(5),
	},
	buttonText: {
		fontSize: theme.fontsize.button,
		fontWeight: 'bold',
		color: theme.palette.white,
		textAlign: 'center'
	},
});

