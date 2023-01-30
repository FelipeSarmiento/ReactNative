import {StyleSheet, Text, View, SafeAreaView, ScrollView, Button, Pressable} from 'react-native';
import Constants from 'expo-constants';

export const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView style={styles.contain} horizontal={true}>
                    <View style={styles.card}>
                        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam
                            architecto assumenda commodi cum dignissimos doloremque error, eum harum non obcaecati quis
                            sint tempore vel vero? Et fugiat nam perspiciatis.</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam
                            architecto assumenda commodi cum dignissimos doloremque error, eum harum non obcaecati quis
                            sint tempore vel vero? Et fugiat nam perspiciatis.</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam
                            architecto assumenda commodi cum dignissimos doloremque error, eum harum non obcaecati quis
                            sint tempore vel vero? Et fugiat nam perspiciatis.</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam
                            architecto assumenda commodi cum dignissimos doloremque error, eum harum non obcaecati quis
                            sint tempore vel vero? Et fugiat nam perspiciatis.</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <Pressable style={styles.button} onPress={() => navigation.navigate('SegundaPantalla')}>
                <Text>Si</Text>
            </Pressable>
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
    contain: {
        marginTop: 15,
        height: 100,
        paddingTop: 5,
        paddingBottom: 5
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
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        marginTop: "100%"
    },
});