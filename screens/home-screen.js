import { StyleSheet, View } from "react-native";
import EventList from "../components/events/event-list";
import { useEffect, useState } from "react";
const HomeScreen = () => {
    const [data, setData] = useState([])

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/event/')
        const data = await response.json()
        setData(data)
    }





    return (
        <View style={styles.screen}>
            <EventList data={data} />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding:20,
    }
})
export default HomeScreen;