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
import support1 from '../assets/support1.png'
import support2 from '../assets/support2.png'
import support3 from '../assets/support3.png'
import support4 from '../assets/support4.png'
const win = Dimensions.get('window');
const ratio = win.width/786
const Support = ({ navigation }) => {
    const source = require('../assets/pdf.pdf');  // ios only

    return (
        <>
            {/* <SafeAreaView > */}
                {/* <StatusBar/> */}
                <ScrollView style={styles.container}>
                    <View style={styles.titleContainer}>
                    <Text style={styles.title}>1. 꿈담채 입주자 모집</Text>
                    {/* <Text style={styles.subtitle}>일시 : 1222.12.12</Text> */}
                    </View>
                <Image style={styles.image} source={support3}/>


                <View style={styles.titleContainer}>
                    <Text style={styles.title}>2. 빅핸즈 매칭펀드</Text>
                    {/* <Text style={styles.subtitle}>일시 : 1222.12.12</Text> */}
                    </View>
                <Image style={styles.image} source={support1}/>


                <View style={styles.titleContainer}>
                    <Text style={styles.title}>3. 빅핸즈 RED CARE</Text>
                    {/* <Text style={styles.subtitle}>일시 : 1222.12.12</Text> */}
                    </View>
                <Image style={styles.image} source={support4}/>
                </ScrollView>
            {/* </SafeAreaView > */}
        </>
    )
};


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    },
    image: {
        width: win.width,
        height: 1080 * ratio,
    },
    titleContainer:{
        padding:10,
        marginTop:30,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#333'
    },
    subtitle:{
        fontSize:18,
        color:'#666',
        paddingLeft:20,
    }

});

Support.propTypes = {

};

export default Support;