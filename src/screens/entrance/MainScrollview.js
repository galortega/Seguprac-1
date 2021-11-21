import React from 'react';
import { View, TextInput, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Selection from '../../components/selection';
import { Pin } from '../../components/Pin';
import { FirstSelection } from '../../components/FirstSelection';
import { styles } from './styles';
import { ImageSelection } from './ImageSelection';
import { SendButton } from '../../components/sendButton';
import { TAXI, MEDIOS } from './index';

export function MainScrollview(props) {
	return (<ScrollView style={{
		width: '100%',
		flex: 1
	}} contentContainerStyle={styles.scrollview} scrollEnabled={Platform.OS === 'android' ? true : false}>
		<ImageSelection images={props.images} pickImage={props.pickImage}></ImageSelection>
		<Pin pin1={props.pin1} pin2={props.pin2} pin3={props.pin3} pin4={props.pin4} pin1Ref={props.pin1Ref} pin2Ref={props.pin2Ref} pin3Ref={props.pin3Ref} pin4Ref={props.pin4Ref} pinHandler={props.pinHandler}></Pin>
		<FirstSelection manzana={props.manzana} setManzana={props.setManzana} usuario={props.usuario} setUsuario={props.setUsuario} villa={props.villa} setVilla={props.setVilla} selectionEnable={props.selectionEnable} setSelection={props.setSelection} openBottomDrawer={props.openBottomDrawer}></FirstSelection>
		{props.usuario === 'Taxi' && <Selection setOpen={props.openBottomDrawer} style={styles.picker2} placeholder={props.taxiAsunto} options={TAXI} setResponse={props.setTaxiAsunto} setSelection={props.setSelection} />}
		{props.usuario == 'Residente' || props.usuario == 'Empleado' || props.usuario == 'Expreso escolar' || props.taxiAsunto == 'Taxi a dejar residente'
			? <Selection setOpen={props.openBottomDrawer} style={styles.picker2} placeholder={props.userType} options={props.selectionData} setResponse={props.setUserType} setSelection={props.setSelection} />
			: <View style={styles.textInput2Container}>
				<TextInput placeholder="Nombres" style={[styles.textInput, {
					width: '49.5%',
					margin: 0
				}]} returnKeyType="next" value={props.nombre} onChangeText={text => props.setNombre(text)} />
				<TextInput placeholder="Apellidos" style={[styles.textInput, {
					width: '49.5%',
					margin: 0
				}]} returnKeyType="next" value={props.apellido} onChangeText={text => props.setApellido(text)} />
			</View>}
		<TextInput placeholder="Cédula" keyboardType="numeric" style={styles.textInput} returnKeyType="next" value={props.cedula} onChangeText={text => props.setCedula(text)} />
		{props.usuario !== 'Taxi' && <TextInput placeholder="Asunto" style={styles.textInput} returnKeyType="next" value={props.asunto} onChangeText={text => props.setAsunto(text)} />}
		<Selection setOpen={props.openBottomDrawer} style={styles.picker2} placeholder={props.entryVehicle} options={MEDIOS} setResponse={props.setEntryVehicle} setSelection={props.setSelection} />
		<TextInput placeholder="Placa" style={styles.textInput} returnKeyType="next" editable={props.editable} ref={props.placaRef} value={props.placa} onChangeText={text => props.setPlaca(text)} />
		<SendButton title={'Enviar'} sendButtonActivationHandler={props.sendButtonActivationHandler} sendVal={props.sendVal}></SendButton>
	</ScrollView>);
}
