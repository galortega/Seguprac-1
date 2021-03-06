import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		width: theme.screenSize.width,
		alignItems: 'center',
		backgroundColor: theme.palette.white
	},
	keyboardAware: {
		display: 'flex',
		width: theme.screenSize.width,
		alignItems: 'center',
		justifyContent: 'center',
	},
	scrollview: {
		width: '100%',
		alignItems: 'center',
	},
	imagePickerContainer: {
		width: theme.screenSize.width * 0.9,
		maxWidth: theme.screenSize.width > 400 ? theme.scaleLimits.inputWidth : theme.screenSize.width,
		height: theme.screenSize.height > 800 ? theme.normalize(180) : theme.normalize(160),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.1)',
		marginBottom: theme.normalize(10),
		marginTop: theme.normalize(10),
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	picker2: {
		width: '90%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.black,
		borderWidth: theme.normalize(3),
		marginBottom: theme.normalize(7),
		paddingHorizontal: theme.normalize(10),
		fontSize: theme.fontsizeResponsive.input,
	},
	textInput: {
		width: '90%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.black,
		borderWidth: theme.normalize(3),
		marginBottom: theme.normalize(7),
		fontSize: theme.fontsizeResponsive.input,
		padding: theme.normalize(10),
	},
	textInput2Container: {
		width: '90%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: theme.normalize(7)
	},
	textInput2: {
		width: '33%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.black,
		borderWidth: theme.normalize(3),
		fontSize: theme.fontsizeResponsive.input,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	textInput3: {
		width: '38%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		backgroundColor: theme.palette.white,
		borderRadius: theme.normalize(7),
		borderColor: theme.palette.black,
		borderWidth: theme.normalize(3),
		fontSize: theme.fontsizeResponsive.input,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	button: {
		width: '90%',
		maxWidth: theme.scaleLimits.inputWidth,
		maxHeight: theme.normalize(45),
		height: theme.screenSize.height * 0.065,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.palette.black,
		borderRadius: theme.normalize(7),
		// elevation: 5,
		// shadowColor: theme.palette.black,
		// shadowOffset: {width:5,height:5},
		// shadowOpacity: 0.3,
		// marginBottom: theme.normalize(5),
	},
	buttonText: {
		fontSize: theme.fontsizeResponsive.button,
		fontWeight: 'bold',
		color: theme.palette.white,
		textAlign: 'center'
	},
});
