import { StyleSheet, View, Text } from "react-native"

const QrCodeScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>qr code scanner</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default QrCodeScreen