autorizacion = {
    id: "9374097nx3o0x3",
    mz: 1,
    villa: 3,
    tipo: "temporal",
    usuario: "residente || empleado || etc",
    imagen: "64",
    nombres: "William ",
    apellidos: "Diaz Chavez",
    cedula: 3567485874,
    asunto: "visitar amigo",
    telefono: +17484747943,
    pin: 1234,
    status: "activa || anulada || validada",
    date: "19-11-2021"
}

// Verificar si un usuario tiene permitido crear autorizaciones.
// POST crear autorizacion OJO al crear una autorizacion de tipo temporal debe llegar pin al telefono
// GET obtener todas las autorizaciones por mz y villa
// GET obtener por pin
// PUT actualizar estado de la autorizacion [status]

// APP GUARDIANES
// registro de entrada y salida

visita = {
    mz: 1,
    villa: 3,
    usuario: "residente || empleado || etc",
    imagen: "64",
    nombres: "William ",
    apellidos: "Diaz Chavez",
    cedula: 3567485874,
    asunto: "visitar amigo",
    medio: "auto",
    placa: "74d7t8dt7d",
    date: "19-11-2021",
}

debo poder hacer una peticion de usuarios usando manzana y villa

