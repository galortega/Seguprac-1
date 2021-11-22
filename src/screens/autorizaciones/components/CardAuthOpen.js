import React from 'react';
import { StyleSheet, Platform, Text, View, Image, TouchableOpacity } from 'react-native';
import theme from '../../../theme';
import photo from '../../../../assets/avatar.jpeg';
import { AntDesign } from '@expo/vector-icons';
import { estadosAutorizacion } from '../../../utils/constants';
import { putAutorizacion } from '../apiResidentes/index';

const CardAuthOpen = ({ closeModal, data, refrescar }) => {
    console.log(refrescar);
	const {
		ID,
		tipo_usuario,
		nombres,
		apellidos,
		asunto,
		telefono,
		date,
		image = true,
		estado,
		imagen,
	} = data;

	return (
		<View style={styles.container}>
			{Platform.OS === 'android' ? (
				<estadoBar
					translucent={false}
					barStyle="light-content"
					hidden={false}
					backgroundColor={theme.palette.purple}
				/>
			) : null}
			<View style={styles.dataContainer}>
				<TouchableOpacity
					onPress={closeModal}
					style={{ position: 'absolute', top: theme.normalize(10), right: theme.normalize(10) }}
				>
					<AntDesign name="closecircle" size={theme.normalize(24)} color={theme.palette.black} />
				</TouchableOpacity>
				<View style={styles.imgContainer}>
					<Image source={imagen || photo} style={styles.img} />
				</View>
				<Text style={styles.text}>{tipo_usuario}</Text>
				<Text style={styles.text}>{`${nombres} ${apellidos}`}</Text>
				<Text style={styles.text}>{asunto}</Text>
				<Text style={styles.text}>{telefono}</Text>
				{estado === estadosAutorizacion.ACEPTADA && (
					<Text
						style={[styles.text, { borderColor: theme.palette.green, color: theme.palette.green }]}
					>
						Pin validado
					</Text>
				)}
				{estado === estadosAutorizacion.RECHAZADA && (
					<Text style={[styles.text, { borderColor: theme.palette.red, color: theme.palette.red }]}>
						Pin anulado
					</Text>
				)}
				{estado === estadosAutorizacion.PENDIENTE && (
					<TouchableOpacity
						style={styles.button}
						onPress={async () => {
							await putAutorizacion(ID);
							await refrescar();
						}}
					>
						<Text style={styles.textOnly}>Anular</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.palette.lightGrey,
	},
	dataContainer: {
		width: theme.screenSize.width * 0.9,
		maxWidth: theme.normalize(300),
		maxHeight: theme.screenSize.width > 450 && 600,
		height: theme.screenSize.height * 0.9,
		borderRadius: theme.normalize(7),
		backgroundColor: theme.palette.white,
		alignItems: 'center',
		padding: theme.normalize(15),
		overflow: 'hidden',
	},
	imgContainer: {
		width: '90%',
		height: theme.normalize(200),
		marginTop: theme.normalize(24),
		marginBottom: theme.normalize(10),
	},
	img: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	text: {
		width: '90%',
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.lightGrey,
		borderWidth: theme.normalize(3),
		marginBottom: theme.normalize(10),
		fontSize: theme.fontsizeResponsive.input,
		padding: theme.normalize(10),
		color: theme.palette.black,
		marginBottom: theme.normalize(10),
	},
	button: {
		width: '90%',
		alignItems: 'center',
		justifyContent: 'center',
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.red,
		borderRadius: theme.normalize(7),
		marginBottom: theme.normalize(10),
		padding: theme.normalize(10),
	},
	textOnly: {
		fontSize: theme.fontsizeResponsive.button,
		color: theme.palette.white,
	},
});

export default CardAuthOpen;
