export function defaultStateHandler(setImages, setselectionData, setNombre, setApellido, setSelectionEnable, setCedula, setCedulaTaxista, setResponse, setPhone, setEntryVehicle, setCounter, setModalState, setEditable, setSelection, setPlaca, setintentsCounter, setManzana, setUsuario, setVilla, setPin1, setPin2, setPin3, setPin4, setAsunto, setTaxiAsunto, setUserType, IDinterval) {
	const setDefault = (fromUsuarios = 'default') => {

		if (fromUsuarios === 'default')
			setImages(null);
		if (fromUsuarios === 'asunto') {
			setselectionData([]);
			setNombre('');
			setApellido('');
			setSelectionEnable(true);
			setCedula('');
			setCedulaTaxista('');
			setResponse('');
			setPhone('');
			setEntryVehicle('Medio');
			setCounter(15);
			setModalState(false);
			setEditable(true);
			setSelection([]);
			setPlaca('');
			restoreCounter();
			setintentsCounter(0);
		} else {
			restoreCounter();
			setManzana('Mz');
			setPhone('');
			setUsuario('Usuario');
			setResponse('');
			setVilla('Villa');
			setNombre('');
			setintentsCounter(0);
			setApellido('');
			setPin1('');
			setPin2('');
			setPin3('');
			setPin4('');
			setAsunto('');
			setselectionData([]);
			setSelectionEnable(true);
			setCedula('');
			setCedulaTaxista('');
			setTaxiAsunto('Asunto');
			setEntryVehicle('Medio');
			setUserType('');
			setCounter(15);
			setModalState(false);
			setEditable(true);
			setSelection([]);
			setPlaca('');
		}
	};

	const restoreCounter = () => {
		setCounter(15);
		IDinterval.forEach((id) => clearInterval(id));
	};
	return { setDefault, restoreCounter };
}
