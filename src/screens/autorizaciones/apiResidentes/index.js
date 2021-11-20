const authURL = 'https://api.practical.com.ec/auth';
const apiURL = 'https://api.practical.com.ec/residente/';
const ue = "2",
export const crearAutorizacion = async (data, token) => {
    const { mz, villa, tipo, tipo_usuario, nombres, apellidos, cedula, telefono } = data
    const body = {
        mz,
        villa,
        tipo,
        tipo_usuario,
        nombres,
        apellidos,
        cedula,
        asunto,
        telefono
    }
    const response = await fetch(`${apiURL}/residente/autorizacion`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Expires': '0',
            token: token
        },
        body: JSON.stringify(body),
    });
    const json = await response.json();
    return { success: response.ok, json, status: response.status };
}

export const getAutorizaciones = async (mz, villa, token) => {
    const response = await fetch(`${apiURL}//residente/autorizacion?mz=${124}&villa=${12}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Expires': '0',
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2wiOiJyZXNpZGVudGUiLCJJZCI6NjUsIlRva2VuUmFuZG9tIjoiNzEyOTUwIiwiZXhwIjoxNjY3Mzg4NTMxfQ.XbbGzRjUiJ090AzfbD1UFZUGHJrTdmJVAkFD8gpE9Rs"
        }
    });
    const json = await response.json();
    return { success: response.ok, json, status: response.status };
}