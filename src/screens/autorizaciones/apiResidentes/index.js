const authURL = 'https://api.practical.com.ec/auth';
const apiURL = 'https://api.practical.com.ec/residente/';
const ue = '2';
import axios from 'axios';
import { estadosAutorizacion } from '../../../utils/constants';
const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2wiOiJyZXNpZGVudGUiLCJJZCI6NjUsIlRva2VuUmFuZG9tIjoiNDc5MjA0IiwiZXhwIjoxNjY3NTU1Njk4fQ.AFEP1hjdcvYEsFvLYJs121NNwfOWvsBs-2uEwuEsj5Q';
export const crearAutorizacion = async (data, token) => {
	const { mz, villa, tipo, tipo_usuario, nombres, apellidos, cedula, telefono } = data;
	const body = {
		mz,
		villa,
		tipo,
		tipo_usuario,
		nombres,
		apellidos,
		cedula,
		asunto,
		telefono,
	};
	const response = await fetch(`${apiURL}/residente/autorizacion`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-cache',
			Expires: '0',
			token: token,
		},
		body: JSON.stringify(body),
	});
	return { success: response.ok, json, status: response.status };
};

export const putAutorizacion = async (id) => {
	const response = await axios({
		method: 'put',
		url: `${apiURL}autorizacion/${id}`,
		headers: {
			token: `${token}`,
		},
		data: { estado: estadosAutorizacion.RECHAZADA },
	});
	return response.data;
};

export const postAutorizacion = async (data) => {
	const response = await axios({
		method: 'post',
		url: `${apiURL}autorizacion`,
		headers: {
			token: `${token}`,
		},
		data,
	});
	return response.data;
};

export const getAutorizaciones = async (mz, villa) => {
	const response = await axios({
		method: 'get',
		url: `${apiURL}autorizacion`,
		headers: {
			token: `${token}`,
		},
		params: { mz, villa },
	});
	return response.data.respuesta;
};
