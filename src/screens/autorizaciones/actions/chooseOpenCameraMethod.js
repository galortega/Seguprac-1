export function chooseOpenCameraMethod(cameraOptionsRef) {
	return () => {
		const modal = cameraOptionsRef.current;

		if (modal) {
			modal.open();
		}
	};
}
