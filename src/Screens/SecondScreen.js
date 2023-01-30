import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Constants from 'expo-constants';

export const SecondScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.statusbar}>
                <Text style={styles.text}>SecondScreen</Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        color: 'white'
    },
    statusbar: {
        height: 40,
        marginTop: Constants.statusBarHeight,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    text: {
        color: '#fff'
    },
    card: {
        borderRadius: 5,
        color: '#fff',
        marginRight: 5,
        marginLeft: 5,
        width: 160,
        borderWidth: 1,
        borderColor: 'white',
        padding: 5
    }
});