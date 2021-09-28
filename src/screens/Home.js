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

import banner1 from '../assets/banner1.png'
import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from 'react-native-webview';


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

    return (
        <>
            <SafeAreaView >
                {/* <StatusBar/> */}
                <ScrollView style={styles.container}>
                    <Image source={banner1} style={styles.bannerImage} />
                    <YoutubePlayer
                        height={300}
                        // play={playing}
                        videoId={"exA_1N9n16k"}
                        // onChangeState={onStateChange}
                    />
                    {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
                    <Button title="설문조사하러가기" onPress={()=>navigation.navigate('Survey')} />

                    <Text>
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    </Text>
                    <Text>
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    </Text>
                    <Text>
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    </Text>
                    <Text>
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    </Text>
                    <Text>
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    </Text>
                    <Text>
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    </Text>
                    <Text>
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    </Text>
                </ScrollView>
            </SafeAreaView >
        </>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        // height: 500,
    },
    bannerImage: {
        resizeMode: 'contain',
        width: '100%'
    }
});

Home.propTypes = {

};

export default Home;