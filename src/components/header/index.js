import React, { useEffect, useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { UserContext } from '../../user_context';
import { Dialog } from 'react-native-paper';
import avatar from '../../../assets/avatar.jpeg';

const Header = ({ navigation, screen }) => {
	const [user, setUser] = useContext(UserContext);
	const [visible, setVisible] = React.useState(false);

	const signout = async () => {
		try {
			await AsyncStorage.removeItem('@user_data');
			setUser({});
			setVisible(false);
			navigation.navigate('Login');

		} catch (e) {
			console.log(e);
		}
	};

	const hideDialog = () => setVisible(false);

	const goTo = (destination) => {
		navigation.navigate(destination);
	};

	return (
		<View style={styles.headerContainer}>
			<View style={styles.container}>
				<View style={styles.userContainer}>
					<View style={styles.avatarContainer}>
						{user && <Image source={avatar/*{uri: user.imagen}*/} style={{ width: '100%', height: '100%' }} resizeMode="cover" />}
					</View>
					{user && <Text style={styles.usernameText}>{user.usuario}</Text>}
				</View>
				<View style={styles.iconsContainer}>
					<TouchableOpacity style={[styles.logoutButton, { marginLeft: theme.normalize(15), backgroundColor: theme.palette.white, borderRadius: theme.normalize(30), width: theme.normalize(30), height: theme.normalize(30) }]} onPress={() => goTo('Entrance')}>
						<AntDesign name="downcircle" color={screen ? theme.palette.green : theme.palette.grey} style={{ fontSize: theme.normalize(30) }} />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.logoutButton, { marginLeft: theme.normalize(15), backgroundColor: theme.palette.white, borderRadius: theme.normalize(30), width: theme.normalize(30), height: theme.normalize(30) }]} onPress={() => goTo('Exit')}>
						<AntDesign name="upcircle" color={screen ? theme.palette.grey : theme.palette.red} style={{ fontSize: theme.normalize(30) }} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.logoutButton} onPress={() => setVisible(true)}>
						<MaterialCommunityIcons name="logout" color={theme.palette.black} style={{ fontSize: theme.normalize(30) }} />
					</TouchableOpacity>
				</View>
			</View>
			<Modal visible={visible} transparent={true}>
				<Dialog visible={visible} onDismiss={hideDialog} style={{ alignItems: 'center', borderRadius: theme.normalize(5), padding: theme.normalize(7) }}>
					<Text style={{ fontSize: theme.fontsize.button, fontWeight: 'bold', color: theme.palette.black, textAlign: 'center' }}>¿Está seguro de cerrar la sesión?</Text>
					<Dialog.Actions style={{ marginTop: theme.normalize(10), width: '100%' }}>
						<View style={{ flexDirection: 'row', width: '90%', justifyContent: 'flex-end', alignItems: 'center', marginTop: theme.normalize(15) }}>
							<TouchableOpacity onPress={signout}>
								<Text style={styles.textButton}>Si</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={hideDialog}>
								<Text style={styles.textButton}>No</Text>
							</TouchableOpacity>
						</View>
					</Dialog.Actions>
				</Dialog>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: theme.screenSize.height > 800 ? theme.screenSize.height * 0.066 : theme.screenSize.height * 0.07,
		backgroundColor: theme.palette.white,
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		maxWidth: theme.normalize(400),
		height: '100%',
		paddingLeft: theme.normalize(15),
		paddingRight: theme.normalize(15),
		backgroundColor: theme.palette.white,
	},
	userContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	avatarContainer: {
		width: theme.screenSize.width > theme.screenSize.height ? theme.normalize(25) : theme.normalize(30),
		height: theme.screenSize.width > theme.screenSize.height ? theme.normalize(25) : theme.normalize(30),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: theme.normalize(45),
		overflow: 'hidden',
	},
	usernameText: {
		fontSize: theme.fontsize.button,
		color: theme.palette.black,
		fontWeight: 'bold',
		marginLeft: theme.normalize(10),
	},
	iconsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	logoutButton: {
		width: theme.normalize(40),
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: theme.normalize(15),
	},
	buttonText: {
		fontSize: theme.normalize(14),
		color: theme.palette.white,
		fontWeight: 'bold',
	},
	textButton: {
		fontSize: theme.fontsize.button,
		color: theme.palette.black,
		fontWeight: 'bold',
		marginLeft: theme.normalize(25),
		marginRight: theme.normalize(15),
	}
});

export default Header;