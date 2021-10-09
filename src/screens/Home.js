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
    TouchableOpacity,
    Linking,
    Dimensions
} from 'react-native';

import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import logo from '../assets/logo.png'
import box from '../assets/box.png'
import ribbon from '../assets/ribbon.png'
import heart from '../assets/heart.png'
import bottomLogo from '../assets/bottomLogo.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'

import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from 'react-native-webview';
import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/AntDesign';

const win = Dimensions.get('window');
const ratio = win.width/700

const Home = ({ navigation }) => {
    // const [playing, setPlaying] = useState(false);
    // const onStateChange = useCallback((state) => {
    //     if (state === "ended") {
    //         setPlaying(false);
    //         Alert.alert("video has finished playing!");
    //     }
    // }, []);

    // const togglePlaying = useCallback(() => {
    //     setPlaying((prev) => !prev);
    //     console.log('aaaaaaaaaaa')
    // }, []);
    const bannerImages =[
        banner1,
        // banner2
    ]
    return (
        <>
            <SafeAreaView >
                <StatusBar/>
                <ScrollView style={styles.container}>
                    <View style={styles.top}>
                    {/* <SliderBox images={bannerImages} sliderBoxHeight={300} inactiveDotColor={'#f0f0f0'} autoplay={true}/> */}
                        <Image source={banner3} style={styles.bannerImage} />
                    </View>
                    <View style={styles.middle}>
                    <View style={styles.youtubeWrap}>
                        <YoutubePlayer
                            height={210}
                            // play={playing}
                            videoId={"ZjfbcZOTAbo"}
                        // onChangeState={onStateChange}
                        />
                        </View>
                        <View style={styles.youtubeTitleWrap}>
                            <Text style={{fontSize:20, color:'#333', fontWeight:'bold'}}>대한에이즈 예방협회</Text>
                            <Text style={{fontSize:14, color:'#777'}}>대한에이즈 예방협회대한에이즈 예방협회대한에이즈</Text>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                    <View style={styles.divider}></View>
                    <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Survey')}>
                            <Image source={box} style={styles.buttonImage}/>
                            <View style={styles.menueButtonMiddle}>
                            <Text style={{fontSize:20, color:'#333', fontWeight:'bold'}}>설문조사하러가기</Text>
                            <Text style={{fontSize:14, color:'#777', flexWrap:'wrap'}}>영상보고 ! 퀴즈풀고 ! 기프티콘받자!</Text>
                            </View>
                            <Icon name='right' size={20} color={'#888'}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('PdfView')}>
                            <Image source={ribbon} style={styles.buttonImage}/>
                            <View style={styles.menueButtonMiddle}>
                            <Text style={{fontSize:20, color:'#333', fontWeight:'bold'}}>에이즈온택트 공모전</Text>
                            <Text style={{fontSize:14, color:'#777', flexWrap:'wrap'}}>에이즈온택트 공모전 작년도 수상작</Text>
                            </View>
                            <Icon name='right' size={20} color={'#888'}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Support')}>
                            <Image source={heart} style={styles.buttonImage}/>
                            <View style={styles.menueButtonMiddle}>
                            <Text style={{fontSize:20, color:'#333', fontWeight:'bold'}}>감염인 지원</Text>
                            <Text style={{fontSize:14, color:'#777', flexWrap:'wrap'}}>대한에이즈예방협회 대구경북지회 & 빅핸즈가 함께합니다. </Text>
                            </View>
                            
                            <Icon name='right' size={20} color={'#888'}></Icon>
                        </TouchableOpacity>
                        <View style={styles.bottomSNS}>
                        <TouchableOpacity onPress={()=>Linking.openURL("https://www.facebook.com/aids114/posts/979300839239783/")} style={{flexDirection:'row', alignItems:'center'}}>
                            <Image source ={facebook} style={styles.snsImage}></Image><Text>페이스북에서 보기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/aids_dggb/?hl=ko")} style={{flexDirection:'row', alignItems:'center', marginLeft:20}}>
                        <Image source ={insta} style={styles.snsImage}></Image><Text>인스타그램에서 보기</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <Image source ={bottomLogo} style={styles.bottomLogo}></Image>

                </ScrollView>
            </SafeAreaView >
        </>
    )
};


const styles = StyleSheet.create({
    container: {
        // height: 500,
        backgroundColor:'#fff'
    },
    top: {
        backgroundColor: 'red',
        width: win.width,
    },
    middle: {

        marginTop:10,

    },
    bottom: {
        // backgroundColor: 'red',
        // height:200,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingHorizontal:30,
        marginTop:30,
    },
    divider:{
        width:'100%',
        borderTopColor:'#dfdfdf',
        borderTopWidth:1,
    },
    bottomSNS:{
        marginTop:20,
        marginHorizontal:10,
        flexDirection:'row',
        marginLeft:20,
    },
    bannerImage: {
        width: win.width,
        height: 340 * ratio,
    },
    youtubeWrap:{
        borderRadius:20,
        overflow: 'hidden',
        margin:10,
        marginTop:20,
        backgroundColor:'#fff',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 0,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        elevation: 5,
    },
    youtubeTitleWrap:{
        marginLeft:20,

    },
    menuButton: {
        backgroundColor: '#fff',
        width:'100%',
        height: 130,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // paddingLeft:20,
        // paddingRight:20,
        borderBottomColor:'#dfdfdf',
        borderBottomWidth:1,
    },
    menueButtonMiddle:{
        marginLeft:10,
        flexShrink:1,
        marginRight:5,
    },
    snsImage:{
        width:30,
        height:30,
        resizeMode:'contain',
        marginRight:10
    },
    buttonImage:{
        width:80,
        resizeMode:'contain'
    },
    bottomLogo:{
        width:'50%',
        resizeMode:'contain',
        alignSelf:'center',
        marginTop:20,
    }
});

Home.propTypes = {

};

export default Home;