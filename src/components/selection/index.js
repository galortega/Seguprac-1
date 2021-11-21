import React, { useState } from 'react';
import { Modal, StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import theme from "../../theme"
import { MaterialIcons } from "@expo/vector-icons";

const Selection = ({style, placeholder, options, setResponse, setSelection, setOpen, disabled=true}) => {

    const selectionHandler = (itemSelected) => {
        setResponse(itemSelected)
    }

    const open = () => {
        setSelection(options)
        setOpen()
    }

    return (
        <View style={style}>
            <TouchableOpacity disabled={!disabled} onPress={open} style={{flexDirection:"row", width:"100%",height:"100%", alignItems:"center", justifyContent:"space-between"}}>
                <Text style={{fontSize: theme.fontsize.input}}>{placeholder}</Text>
                <MaterialIcons name="keyboard-arrow-down" style={{fontSize: theme.fontsize.input, fontWeight:"bold"}}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf:"center",
        marginTop:theme.screenSize.height*0.15,
        width:theme.screenSize.width*0.9,
        height: theme.screenSize.height*0.7,
        backgroundColor:theme.palette.white,
        borderRadius: theme.normalize(7),
        elevation: 5,
        shadowColor: theme.palette.black,
        shadowOffset: {width:5,height:5},
        shadowOpacity: 0.3,
    },
    scrollview: {
        width:theme.screenSize.width*0.9,
        height: theme.screenSize.height*0.7,
        alignItems:"center",
    },
    option: {
        width:"100%",
        maxHeight: theme.normalize(45),
        height: theme.screenSize.height*0.065,
        paddingHorizontal: theme.normalize(10),
        alignItems:"center",
    },
    text: {
        fontSize: theme.fontsize.input,
        color: theme.palette.black,
    }
})

export default Selection;