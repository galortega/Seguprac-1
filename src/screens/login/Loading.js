import React from 'react';
import { ActivityIndicator, Modal, StatusBar, StyleSheet, Text, View } from 'react-native';
import theme from '../../theme';
import { Snackbar } from 'react-native-paper';

const Loading = ({ navigation, open, change, openModal, changeState, snackbarResponse }) => {

	const close = () => {
		openModal(false);
		changeState(false);
		if (snackbarResponse) navigation.navigate('Entrance');
	};

	return (
		<Modal visible={open} animationType="fade" transparent={true}>
			<StatusBar translucent={false} barStyle="dark-content" hidden={false} backgroundColor={theme.palette.white} />
			<View style={styles.container}>
				{/* <ActivityIndicator size="large" color="white" style={{transform:[{scale:2}]}} /> */}
				{change
					? <Snackbar
						wrapperStyle={{ position: 'relative' }}
						visible={change}
						duration={1500}
						onDismiss={close}
						style={styles.snackbar}
					><Text style={{ textAlign: 'center', fontSize: theme.fontsizeResponsive.input }}>Acceso denegado, verifique el usuario y la contraseña</Text>
					</Snackbar>
					: <ActivityIndicator size="large" color="white" />
				}
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	container: {
		width: theme.screenSize.width,
		height: theme.screenSize.height,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)'
	},
	snackbar: {
		backgroundColor: '#b80000',
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.normalize(5),
	}
});

export default Loading;