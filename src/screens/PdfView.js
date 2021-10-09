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
    Button,
    Dimensions
} from 'react-native';

import Pdf from 'react-native-pdf';

const PdfView = ({ navigation }) => {
    //IOS 체크해서 source 바꾸기
    const source = require('../assets/pdf.pdf');  // ios only
    const source_2 = {uri:'bundle-assets://pdf/pdf.pdf', cache: true}
    return (
        <>
            {/* <SafeAreaView > */}
                {/* <StatusBar/> */}
                {/* <View style={styles.container}> */}
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link presse: ${uri}`)
                    }}
                    style={styles.pdf}/>
                {/* </View> */}
            {/* </SafeAreaView > */}
        </>
    )
};


const styles = StyleSheet.create({
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});

PdfView.propTypes = {

};

export default PdfView;