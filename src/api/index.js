import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ENDPOINT = {
	LOGIN: 'https://api.practical.com.ec/auth/admin-garita',
	REQUEST: 'https://api.practical.com.ec/admin-garita/visita',
	RESPONSE: 'https://api.practical.com.ec/admin-garita/visita-notificaciones',
	GETCASA: 'https://api.practical.com.ec/admin-garita/casa',
	GETRESIDENTE: 'https://api.practical.com.ec/admin-garita/residente',
};
const api = {};

api.login = async (username, password) => {


	try {
		const { data } = await axios.post(ENDPOINT.LOGIN, { usuario: username, contrasena: password });

		console.log(data);
		if (data.error === true) return { response: false };

		const { token } = data.respuesta;
		console.log(token);
		const { nombres, usuario, imagen } = data.respuesta.usuario;

		const res = await getManzanaVilla(token)

		const jsonValue = JSON.stringify({ token, nombres, usuario, imagen, ...res });

		await AsyncStorage.setItem('@user_data', jsonValue);

		return { response: true, userData: { token, nombres, usuario, imagen, ...res } };
	} catch (error) {
		console.log(error);
		return { response: false };
	}

};

api.obtenerResidentes = async (token) => {

	try {
		const config = {
			method: 'get',
			url: ENDPOINT.GETRESIDENTE,
			headers: {
				'token': `${token}`
			},
		};

		const { data } = await axios(config)
		return data.respuesta;
	} catch (error) {
		console.log(error)
		return false
	}
};

api.peticionEntrada = async (data) => {
	const { token, nombres, apellidos, cedula, placa, motivo, id_casa, tipo_entrada } = data;

	try {
		const response = await fetch(ENDPOINT.REQUEST, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				'token': `${token}`
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify({ nombres, apellidos, cedula, placa, motivo, id_casa, tipo_entrada }) // body data type must match "Content-Type" header
		});

		const body = await response.json();
		console.log(body.error);
		return body.error;
	} catch (error) {
		console.log(error);
		return false;
	}
};

api.checkResponse = async (data) => {
	const { token, nombres, cedula, placa, motivo, id_casa } = data;

	console.log(data);

	const config = {
		method: 'get',
		url: ENDPOINT.RESPONSE,
		headers: {
			'token': `${token}`
		},
		// data : JSON.stringify( {token, nombres, cedula, placa, motivo, id_casa})
	};

	axios(config)
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
};

const getManzanaVilla = async (token) => {

	console.log(token);

	const config = {
		method: 'get',
		url: ENDPOINT.GETCASA,
		headers: {
			'token': `${token}`
		},
	};

	const { data } = await axios(config)
	// .then(function (response) {
	// 	const mz = [];
	// 	const villas = []
	// 	response.data.respuesta.forEach((item) => {
	// 		console.log(item.manzana, item.villa)
	// 		mz.push(item.manzana)
	// 		villas.push(item.villa)
	// 	})
	// 	return { mz, villas }
	// })
	// .catch(function (error) {
	// 	console.log(error);
	// });

	const mz = ["Mz"];
	const villas = ["Villas"]
	data.respuesta.forEach((item) => {
		mz.push(item.manzana)
		villas.push(item.villa)
	})
	return { mz, villas }
}

api.getManzanaVilla = getManzanaVilla;

export default api;