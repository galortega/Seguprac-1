import React from 'react';
import access_granted from '../../../assets/lottie/access-granted.json';
import LottieView from 'lottie-react-native';
import theme from '../../theme';
import { View } from 'react-native';

const SIZE = theme.normalize(300);
const AccessGranted = ({setOpen, setDefault}) => {

	const animationEnd = () => {
		setDefault();
		setOpen(false);
	};

	return (
		<View style={{flex:1,alignItems:'center',justifyContent:'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
			<LottieView
				source={access_granted}
				style={{width:SIZE,height:SIZE}}
				autoPlay={true}
				loop={false}
				onAnimationFinish={()=> setTimeout(animationEnd,1000)}
				// OR find more Lottie files @ https://lottiefiles.com/featured
				// Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
			/>
		</View>
	);
};

export default AccessGranted;