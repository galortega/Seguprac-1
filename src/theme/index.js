import { Dimensions, Platform, PixelRatio } from 'react-native';

const theme = {};
const { width, height } = Dimensions.get('window');

const checkDeviceType = () => {
	if (width > 450 && width < height) return "tablet"
	if (width < 450 && width < height) return "phone"
	if (width > 450 && width > height) return "desktop"
}

const normalize = (size) => {
	if (width >= 450) {
		return size
	} else {
		const scale = width / 320;
		const newSize = size * scale;
		if (Platform === 'ios') {
			return Math.round(PixelRatio.roundToNearestPixel(newSize));
		}
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
	}
};

const normalizeAllScreens = (size) => {
	const scale = width / 320;
	const newSize = size * scale;
	if (Platform === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	}
	return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

theme.device = checkDeviceType();
theme.normalize = normalize;
theme.normalizeAllScreens = normalizeAllScreens;

theme.palette = {
	white: '#ffffff',
	black: '#323232',
	purple: '#7476EC',
	lightPurple: 'rgba(116, 118, 236, 0.5)',
	red: '#9d0208',
	green: '#aacc00',
	grey: 'rgba(0,0,0,0.5)',
	lightGrey: 'rgba(0,0,0,0.2)',
};

theme.scaleLimits = {
	inputWidth: normalize(300),
	inputHeigh: normalize(50),
};

theme.screenSize = {
	width,
	height,
};

theme.fontsize = {
	small: 14,
	medium: 16,
	large: 18,
	extra: 20,
	title: 24,
};

theme.fontsizeResponsive = {
	mini: normalize(14),
	input: normalize(16),
	button: normalize(18),
	title: normalize(20),
};

theme.fontsizeResponsiveAllScreen = {
	small: normalizeAllScreens(5),
	medium: normalizeAllScreens(10),
	large: normalizeAllScreens(15),
	extra: normalizeAllScreens(25),
	big: normalizeAllScreens(50),
}

theme.padding = {
	small: 5,
	medium: 10,
	large: 15,
	extra: 25,
	big: 50,
}

theme.paddingResponsive = {
	small: normalize(5),
	medium: normalize(10),
	large: normalize(15),
	extra: normalize(25),
	big: normalize(50),
}

theme.paddingResponsiveAllScreen = {
	small: normalizeAllScreens(5),
	medium: normalizeAllScreens(10),
	large: normalizeAllScreens(15),
	extra: normalizeAllScreens(25),
	big: normalizeAllScreens(50),
}

export default theme;
