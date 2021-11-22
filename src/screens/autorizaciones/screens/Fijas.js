import React, { useEffect, useState } from 'react';
import theme from '../../../theme';
import {
	FlatList,
	SafeAreaView,
	ScrollView,
	Platform,
	StatusBar,
	StyleSheet,
	Modal,
} from 'react-native';
import { Card } from '../components/Card';
import CardAuthOpen from '../components/CardAuthOpen';
import { getAutorizaciones } from '../apiResidentes/index';
import _ from 'lodash';
import { tiposAutorizacion } from '../../../utils/constants';
const AutorizacionesFijas = ({ navigate }) => {
	const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
	const [visible, setVisible] = useState(false);
	const [selectedData, setSelectedData] = useState('');

	const cargarDatos = async () => {
		setData(await getAutorizaciones(124, 12, tiposAutorizacion.FIJA));
	};

	useEffect(() => {
		cargarDatos();
	}, []);

	const openModal = (data) => {
		setSelectedData(data);
		setVisible(true);
	};

	const closeModal = (e) => {
		console.log(e);
		setVisible(false);
	};

	return (
		<SafeAreaView style={styles.container}>
			{Platform.OS === 'android' ? (
				<StatusBar
					translucent={false}
					barStyle="light-content"
					hidden={false}
					backgroundColor={theme.palette.purple}
				/>
			) : null}
			<ScrollView contentContainerStyle={styles.scrollviewContent}>
				{_.map(data, (item) => (
					<Card type={true} pressHandler={openModal} data={item} />
				))}
			</ScrollView>
			<Modal
				visible={visible}
				transparent={true}
				children={
					<CardAuthOpen closeModal={closeModal} data={selectedData} refrescar={cargarDatos} />
				}
			/>
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
	},
});

export default AutorizacionesFijas;
