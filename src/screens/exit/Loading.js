import React from 'react';
import { ActivityIndicator, View} from 'react-native';
import theme from '../../theme';

const Loading = () => {
	return (
		<View style={{flex:1,alignItems:'center',justifyContent:'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
			<ActivityIndicator size="large" color={theme.palette.white}/>
		</View>
	);
};


export default Loading;