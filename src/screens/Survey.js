import React, { useEffect, memo, useState, useCallback } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Image,
    View,
    Button
} from 'react-native';

import { WebView } from 'react-native-webview';

const Survey = ({ navigation }) => {


    return (
        <>
            {/* <SafeAreaView > */}
                {/* <StatusBar/> */}
                {/* <View style={styles.container}> */}
                <WebView
                    source={{
                        uri:
                        'https://docs.google.com/forms/d/1HqYZmx8YhnuckhT0Qv3y6dcie-eduUI-CuI70RqZMWk/edit',
                    }}
                    style={styles.webviewContainer}
                    />
                {/* </View> */}
            {/* </SafeAreaView > */}
        </>
    )
};


const styles = StyleSheet.create({
    container: {
        // flex:1,
    },
    webviewContainer:{
        flex:1,
    }
});

Survey.propTypes = {

};

export default Survey;