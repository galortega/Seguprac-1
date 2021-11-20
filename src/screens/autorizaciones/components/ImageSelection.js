import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import theme from '../../../theme';
import { AntDesign } from '@expo/vector-icons';

export function ImageSelection({ image, pickImage }) {
	return (
		<TouchableWithoutFeedback onPress={pickImage}>
			<View style={styles.imagePickerContainer}>
				{image && <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />}
				{!image && <AntDesign name="camera" color={theme.palette.black} style={{ fontSize: theme.normalize(45) }} />}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	imagePickerContainer: {
		width: theme.screenSize.width * 0.9,
		maxWidth: theme.screenSize.width > 400 ? theme.scaleLimits.inputWidth : theme.screenSize.width,
		height: theme.screenSize.height > 800 ? theme.normalize(180) : theme.normalize(160),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.1)',
		marginBottom: theme.normalize(10),
		marginTop: theme.normalize(10),
		overflow: 'hidden',
	},
	image: {
		width: "100%",
		height: "100%",
		position: 'absolute',
	},
});

export default styles;
