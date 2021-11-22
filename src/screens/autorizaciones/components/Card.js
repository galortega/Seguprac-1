import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import foto from '../../../../assets/avatar.jpeg';
import theme from '../../../theme';
import { estadosAutorizacion } from '../../../utils/constants';
export function Card({ type, pressHandler, data }) {
	const {
		tipo_usuario,
		nombres,
		apellidos,
		asunto,
		telefono,
		CreatedAt,
		image = true,
		estado,
		imagen
	} = data;
	return (
		<TouchableOpacity onPress={() => pressHandler(data)} style={styles.authCardContainer}>
			{type && estado === estadosAutorizacion.ACEPTADA && (
				<AntDesign
					name="checkcircleo"
					size={theme.normalize(22)}
					color={theme.palette.green}
					style={{ position: 'absolute', top: theme.normalize(10), right: theme.normalize(10) }}
				/>
			)}
			{type && estado === estadosAutorizacion.RECHAZADA && (
				<AntDesign
					name="closecircleo"
					size={theme.normalize(22)}
					color={theme.palette.red}
					style={{ position: 'absolute', top: theme.normalize(10), right: theme.normalize(10) }}
				/>
			)}
			{type && estado === estadosAutorizacion.PENDIENTE && (
				<AntDesign
					name="clockcircleo"
					size={theme.normalize(22)}
					color={theme.palette.black}
					style={{ position: 'absolute', top: theme.normalize(10), right: theme.normalize(10) }}
				/>
			)}
			<View style={styles.imageContainer}>
				{image && <Image source={imagen || foto} style={styles.img} resizeMode="contain" />}
				{!image && (
					<AntDesign
						name="camera"
						color={theme.palette.black}
						style={{ fontSize: theme.normalize(24) }}
					/>
				)}
			</View>
			<View style={styles.cardDataContainer}>
				<View style={styles.data}>
					<Text style={styles.text}>{`${nombres} ${apellidos}`}</Text>
				</View>
				<View style={[styles.data, { justifyContent: 'space-between' }]}>
					{type && <Text style={styles.text}>{asunto}</Text>}
					{!type && <Text style={styles.text}>{tipo_usuario}</Text>}
					<Text style={styles.text}>{moment(CreatedAt).format('YYYY-MM-DD')}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	authCardContainer: {
		width: theme.screenSize.width * 0.9,
		maxWidth: theme.normalize(400),
		height: theme.normalize(70),
		marginBottom: theme.normalize(10),
		borderRadius: theme.normalize(7),
		backgroundColor: theme.palette.white,
		flexDirection: 'row',
		alignItems: 'center',
		elevation: 5,
		shadowColor: theme.palette.black,
		shadowOffset: { width: 5, height: 5 },
		shadowOpacity: 0.3,
		padding: theme.normalize(10),
	},
	imageContainer: {
		width: theme.normalize(55),
		height: theme.normalize(55),
		backgroundColor: theme.palette.lightGrey,
		alignItems: 'center',
		justifyContent: 'center',
	},
	img: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	cardDataContainer: {
		flex: 1,
		height: '90%',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingHorizontal: theme.normalize(10),
	},
	data: {
		width: '100%',
		height: '33%',
		flexDirection: 'row',
		borderRadius: theme.normalize(7),
	},
	text: {
		fontsize: theme.fontsize.input,
		color: theme.palette.black,
	},
});

export default styles;
