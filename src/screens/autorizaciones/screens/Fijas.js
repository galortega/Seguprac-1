import React, { useEffect, useState } from 'react';
import theme from '../../../theme';
import { FlatList, SafeAreaView, ScrollView, Platform, StatusBar, StyleSheet, Modal } from 'react-native';
import { Card } from '../components/Card';
import CardAuthOpen from '../components/CardAuthOpen';

const AutorizacionesFijas = ({ navigate }) => {
	const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
	const [visible, setVisible] = useState(false)
	const [selectedData, setSelectedData] = useState('')

	useEffect(() => {
		// Pedir las autorizaciones al servidor
	}, []);

	const openModal = (data) => {
		setSelectedData(data)
		setVisible(true)
	}

	const closeModal = (e) => {
		console.log(e)
		setVisible(false)
	}

	return (
		<SafeAreaView style={styles.container}>
			{
				Platform.OS === 'android'
					? <StatusBar translucent={false} barStyle="light-content" hidden={false} backgroundColor={theme.palette.purple} />
					: null
			}
			<ScrollView contentContainerStyle={styles.scrollviewContent}>
				<Card type={false} pressHandler={openModal} data={{ userType: "visita", nombres: "William Diaz Chavez", asunto: "Visitar amigo", phone: "5786865874", date: "24-10-2021", status: "validado" }} />
				<Card type={false} pressHandler={openModal} data={{ userType: "visita", nombres: "William Diaz Chavez", asunto: "Visitar amigo", phone: "5786865874", date: "24-10-2021", status: "anulado" }} />
				<Card type={false} pressHandler={openModal} data={{ userType: "visita", nombres: "William Diaz Chavez", asunto: "Visitar amigo", phone: "5786865874", date: "24-10-2021", status: "activo" }} />
				{/* {
					data.map(item => {
						return (
							<Card type={true} pressHandler={openModal} index={item} key={item} />
						)
					})
				} */}
			</ScrollView>
			<Modal visible={visible} transparent={true} children={<CardAuthOpen closeModal={closeModal} data={selectedData} />} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	scrollviewContent: {
		flex: 1,
		width: theme.screenSize.width,
		alignItems: 'center',
		paddingVertical: theme.normalize(10),
	}
});


export default AutorizacionesFijas;