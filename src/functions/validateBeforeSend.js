const validation = {};

const MEDIOS = ["Medio","Caminando","Auto","Camioneta","Buseta", "Moto", "Motoneta","Camión","Bicicleta"]

validation.type1 = (data) => {// VALIDACION PARA VISITA/DELIVERY/MUDANZA/SERVICIOS BASICOS
    let val;
    if(["Caminando","Motoneta","Bicicleta"].includes(data.entryVehicle)){
        val = [data.usuario === "Usuario",data.manzana === "Mz",data.villa === "Villa",data.nombre === "",
        data.apellido === "",data.cedula === "",data.asunto === "",data.entryVehicle === "Medio"]

    }else {
        val = [data.usuario === "Usuario",data.manzana === "Mz",data.villa === "Villa",data.nombre === "",
        data.apellido === "",data.cedula === "",data.asunto === "",data.entryVehicle === "Medio",data.placa === ""]
    }

    return !val.includes(true);
}

validation.type2 = (data) => {// VALIDACION PARA RESIDENTE/EMPLEADO
    let val;
    if(["Caminando","Motoneta","Bicicleta"].includes(data.entryVehicle)){
        val = [data.usuario === "Usuario",data.manzana === "Mz",data.villa === "Villa",data.userType === "",
        data.cedula === "",data.asunto === "",data.entryVehicle === "Medio"]

    }else {
        val = [data.usuario === "Usuario",data.manzana === "Mz",data.villa === "Villa",data.userType === "",
        data.cedula === "",data.asunto === "",data.entryVehicle === "Medio",data.placa === ""]
    }

    return !val.includes(true);
}

validation.type3 = (data) => {// VALIDACION PARA EXPRESO ESCOLAR
    let val;
    if(["Caminando","Motoneta","Bicicleta"].includes(data.entryVehicle)){
        val = [data.usuario === "Usuario",data.userType === "",
        data.cedula === "",data.asunto === "",data.entryVehicle === "Medio"]

    }else {
        val = [data.usuario === "Usuario",data.userType === "",
        data.cedula === "",data.asunto === "",data.entryVehicle === "Medio",data.placa === ""]
    }

    return !val.includes(true);
}

validation.type4 = (data) => {// TAXI
    let val;
    if(data.taxiAsunto === "Taxi a recoger"){
        if(["Caminando","Motoneta","Bicicleta"].includes(data.entryVehicle)){
            val = [data.usuario === "Usuario",data.manzana === "Mz",data.villa === "Villa",data.nombre === "",
            data.apellido === "",data.taxiAsunto === "Asunto",
            data.cedula === "",data.entryVehicle === "Medio"]

        }else {
            val = [data.usuario === "Usuario",data.manzana === "Mz",data.villa === "Villa",data.nombre === "",
            data.apellido === "",data.taxiAsunto === "Asunto",
            data.cedula === "",data.entryVehicle === "Medio",data.placa === ""]
        }
    }else{
        if(["Caminando","Motoneta","Bicicleta"].includes(data.entryVehicle)){
            val = [data.usuario === "Usuario",data.manzana === "Mz",data.villa === "Villa",data.taxiAsunto === "Asunto",
            data.cedula === "",data.userType==="",data.entryVehicle === "Medio"]
    
        }else {
            val = [data.usuario === "Usuario",data.manzana === "Mz",data.villa === "Villa",data.taxiAsunto === "Asunto",
            data.cedula === "",data.userType==="",data.entryVehicle === "Medio",data.placa === ""]
        }
    }

    return !val.includes(true);
}

export default validation