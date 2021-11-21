import React from 'react';
import theme from '../../theme';
import { Text, TouchableOpacity, View } from 'react-native';

const ErrorConexion = ({saveAgain}) => {

	return (
		<View style={{flex:1,alignItems:'center',justifyContent:'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
			<View style={{flexDirection:'row',padding:theme.normalize(5),alignItems:'center',width:'90%',height:theme.normalize(55), borderRadius:theme.normalize(35),backgroundColor:theme.palette.red}}>
				<Text style={{width:'70%',color:theme.palette.white,textAlign:'center', fontSize:theme.fontsize.input, fontWeight:'bold'}}>
                        Ha ocurrido un error
				</Text>
				<TouchableOpacity style={{width:'30%',height:'90%', alignItems:'center', justifyContent:'center', backgroundColor:theme.palette.black,borderRadius:theme.normalize(35)}} onPress={()=>saveAgain('reintent')}>
					<Text style={{color:theme.palette.white, fontSize:theme.fontsize.input, fontWeight:'bold'}}>
                            reintentar
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ErrorConexion;