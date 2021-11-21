export function pinHnadlerFunction(setPin1, pin2Ref, setPin2, pin3Ref, setPin3, pin4Ref, setPin4) {
	return (text, id) => {
		console.log(text, id);
		if (id == '1') { setPin1(text); pin2Ref.current.focus(); }
		if (id == '2') { setPin2(text); pin3Ref.current.focus(); }
		if (id == '3') { setPin3(text); pin4Ref.current.focus(); }
		if (id == '4') { setPin4(text); }
	};
}
