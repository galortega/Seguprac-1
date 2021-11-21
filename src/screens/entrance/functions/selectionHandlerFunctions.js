export function selectionHandlerFunctions(modalRef, setEditable, setEntryVehicle, setManzana, setVilla, setDefault, setTaxiAsunto, setAsunto, setUsuario, setUserType, setSelectionEnable) {
    const openBottomDrawer = () => {
        const modal = modalRef.current;

        if (modal) {
            modal.open();
        }
    };

    const select = (item, type) => {
        console.log(type, item);
        const arr = ["Caminando", "Bicicleta", "Motoneta"];
        if (type === "Medio") {
            if (arr.includes(item))
                setEditable(false);

            else
                setEditable(true);
            setEntryVehicle(item);
        }
        if (type === "Mz") setManzana(item);
        if (type === "Villas") setVilla(item);
        if (type === "Asunto") { setDefault("asunto"); setTaxiAsunto(item); setAsunto(item); }
        if (type === "Usuario") { setDefault("usuario"); setUsuario(item); userTypeSelectedHandler(item); }
        modalRef.current.close();
    };

    const userTypeSelectedHandler = (userType) => {
        console.log("hey", userType);
        if (userType === "Residente")
            setUserType("Lista de residentes");
        if (userType === "Empleado")
            setUserType("Lista de empleados");
        if (userType === "Expreso escolar")
            expresoEscolarHandler();
        if (userType === "Taxi")
            setUserType("Lista de residentes");
        if (userType === "Familiar")
            setUserType("Lista de familiares");
    };

    const expresoEscolarHandler = () => {
        setUserType("Lista de expreso escolar");
        setSelectionEnable(false);
    };
    return { openBottomDrawer, select };
}
