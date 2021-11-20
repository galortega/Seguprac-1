import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';

const Statusbar = () => {
    return (
        <React.Fragment>
            {
                Platform.OS === 'android'
                    ? <StatusBar translucent={false} barStyle="light-content" hidden={false} backgroundColor={theme.palette.purple} />
                    : null
            }
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Statusbar;