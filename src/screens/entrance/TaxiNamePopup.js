import React from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import { Dialog } from 'react-native-paper';
import { styles } from './styles';

export function TaxiNamePopup(props) {
    
	return (
		<Modal visible={props.visible} transparent={true}>
			<Dialog visible={props.visible} onDismiss={props.taxiModalClose} style={{
				alignItems: 'center',
				flexDirection: 'column',
				borderRadius: theme.normalize(5),
				padding: theme.normalize(7)
			}}>
				<Text style={{
					fontSize: theme.normalize(35),
					marginBottom: theme.normalize(20),
					fontWeight: 'bold',
					color: theme.palette.black,
					textAlign: 'center'
				}}>Taxi</Text>
				<View style={styles.textInput2Container}>
					<TextInput placeholder="Nombres" style={[styles.textInput, {width: '49.5%',margin: 0}]} returnKeyType="next" value={props.nombreTaxista} onChangeText={text => props.setNombreTaxista(text)} />
					<TextInput placeholder="Apellidos" style={[styles.textInput, {width: '49.5%',margin: 0}]} returnKeyType="next" value={props.apellidoTaxista} onChangeText={text => props.setApellidoTaxista(text)} />
				</View>
				<TextInput placeholder="Cédula" keyboardType="numeric" style={styles.textInput} returnKeyType="next" value={props.cedulaTaxista} onChangeText={text => props.setCedulaTaxista(text)} />
				<View style={styles.textInput2Container}>
					<TouchableOpacity onPress={()=>props.taxiModalClose(false)} style={[styles.button, {width: '49.5%',marginTop: theme.normalize(10)}]}>
						<Text style={styles.buttonText}>Cancelar</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {props.taxiModalClose(true);props.send();}} style={[styles.button, {width: '49.5%',marginTop: theme.normalize(10)}]}>
						<Text style={styles.buttonText}>Enviar</Text>
					</TouchableOpacity>
				</View>
			</Dialog>
		</Modal>);
}
