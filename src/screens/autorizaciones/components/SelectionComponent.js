import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import theme from "../../../theme"
import { MaterialIcons } from "@expo/vector-icons";

const Selection = ({ style, placeholder, options, setSelectionList, openHandler, disabled = true }) => {

    const open = () => {
        setSelectionList(options)
        openHandler()
    }

    return (
        <React.Fragment>
            <View style={style ? style : styles.container}>
                <TouchableOpacity disabled={!disabled} onPress={open} style={{ flexDirection: "row", width: "100%", height: "100%", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: theme.fontsize.input }}>{placeholder}</Text>
                    <MaterialIcons name="keyboard-arrow-down" style={{ fontSize: theme.fontsize.input, fontWeight: "bold" }} />
                </TouchableOpacity>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        maxWidth: theme.scaleLimits.inputWidth,
        maxHeight: theme.normalize(45),
        height: theme.screenSize.height * 0.065,
        backgroundColor: theme.palette.white,
        borderRadius: theme.normalize(7),
        borderColor: theme.palette.lightGrey,
        borderWidth: theme.normalize(3),
        marginBottom: theme.normalize(10),
        fontSize: theme.fontsize.input,
        padding: theme.normalize(10),
    },
    modal: {
        width: theme.screenSize.width,
        height: theme.screenSize.width,
        backgroundColor: theme.palette.opac,
    }
})

export default Selection;