import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/firstScreen.png')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Image source={require("../assets/main-icon.png")} style={{ width: 150, height: 150 }}></Image>
                        <Text style={styles.titleText}>Stellar</Text>
                        <Text style={styles.titleText}>App</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SpaceCraft")
                    }>
                        <Text style={styles.routeText}>Dhoop Stick</Text>
                        <Image source={require("../assets/DhoopBatti.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("StarMap")
                    }>
                        <Text style={styles.routeText}>Agarbatti</Text>
                        <Image source={require("../assets/agarbatti.psd")} style={styles.routeImage}></Image>
                    </TouchableOpacity>

                 
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "white",
        shadowColor: "#8E8B8B",
      shadowOffset: {width: 0, height: 0},
      shadowOpacity:1,
      shadowRadius:10
            

    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        opacity:0,
        marginTop:-200,
       
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#707070',
        justifyContent: "center",
        alignItems: "center"
    },
    routeImage: {
        position: "absolute",
        top: 5,
        right: 5,
        height: 90,
        width: 90,
        resizeMode: "contain"
    }
});