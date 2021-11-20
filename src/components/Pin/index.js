import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import theme from '../../theme';

export function Pin(props) {
	return (
		<View style={styles.pinContainer}>
			<TextInput value={props.pin1} style={styles.pinInput} keyboardType="numeric" maxLength={1} onChangeText={text => props.pinHandler(text, '1')} ref={props.pin1Ref} />
			<TextInput value={props.pin2} style={styles.pinInput} keyboardType="numeric" maxLength={1} onChangeText={text => props.pinHandler(text, '2')} ref={props.pin2Ref} />
			<TextInput value={props.pin3} style={styles.pinInput} keyboardType="numeric" maxLength={1} onChangeText={text => props.pinHandler(text, '3')} ref={props.pin3Ref} />
			<TextInput value={props.pin4} style={styles.pinInput} keyboardType="numeric" maxLength={1} onChangeText={text => props.pinHandler(text, '4')} ref={props.pin4Ref} />
		</View>);
}

const styles = StyleSheet.create({
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
		fontSize: theme.fontsize.input,
		fontWeight: 'bold',
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		textAlign: 'center'
	},
});
