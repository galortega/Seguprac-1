import React from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
import theme from '../../theme';
import { Modalize } from 'react-native-modalize';

export function ModalBottomSelection(props) {
	return (
		<Modalize ref={props.modalRef} snapPoint={theme.screenSize.height * 0.30} modalHeight={theme.screenSize.height * 0.30}>
			<FlatList
				data={props.selection}
				style={{ padding: theme.normalize(10) }}
				keyExtractor={i => i} renderItem={({ item }) => {
					return (
						<TouchableOpacity style={{ width: '100%', height: theme.normalize(45), alignItems: 'center' }} onPress={() => props.select(item, props.selection[0])}>
							<Text style={{ fontSize: theme.fontsize.input }}>{item}</Text>
						</TouchableOpacity>
					);
				}} />
		</Modalize>);
}
