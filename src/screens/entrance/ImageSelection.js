import React from 'react';
import { View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import theme from '../../theme';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

export function ImageSelection(props) {
	console.log(props.images)
	return (
		<TouchableWithoutFeedback onPress={props.pickImage}>
			<View style={styles.imagePickerContainer}>
				{props.images && <Image source={{ uri: props.images }} style={styles.image} />}
				<AntDesign name="camera" color={theme.palette.black} style={{ fontSize: theme.normalize(50) }} />
			</View>
		</TouchableWithoutFeedback>
	);
}
