import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, Text, View, Linking } from "react-native";
import theme from "../../theme";

let counters = 1;
const SIZE = theme.normalize(300)
const Loading = ({ setOpen, counter, setDefault, phone }) => {
    const [change, setChange] = useState(true);

    useEffect(() => {
        if (counter === 0) {
            setChange(false)
        }
    }, [counter])

    const pressCall = () => {
        const url = `tel://${phone}`
        Linking.openURL(url)
    }

    const pressSave = (contestado) => {
        setChange(true)
        setOpen(false)
        setDefault()
    }

    const CallComponent = () => {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity onPress={pressCall} style={styles.button}>
                    <Text style={styles.buttonText}>Llamar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pressSave(true)} style={[styles.button, { backgroundColor: theme.palette.green }]}>
                    <Text style={styles.buttonText}>Aceptado</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pressSave(false)} style={[styles.button, { backgroundColor: theme.palette.red }]}>
                    <Text style={styles.buttonText}>Rechazado</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pressSave(false)} style={[styles.button, { backgroundColor: theme.palette.black }]}>
                    <Text style={styles.buttonText}>Sin respuesta</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
            {
                change
                    ? <Text style={styles.counter}>{counter}</Text>
                    : <CallComponent />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    counter: {
        fontSize: theme.normalize(100),
        fontWeight: "bold",
        color: theme.palette.white
    },
    button: {
        width: theme.normalize(200),
        height: theme.normalize(50),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.purple,
        borderRadius: theme.normalize(30),
        elevation: 5,
        shadowColor: theme.palette.black,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        marginBottom: theme.normalize(15)
    },
    buttonText: {
        color: theme.palette.white,
        fontSize: theme.fontsizeResponsive.button,
        fontWeight: "bold"
    }
})

export default Loading;