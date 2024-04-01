import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native"
import { HeaderBackButton } from "@react-navigation/elements"
import { useLayoutEffect } from "react";

const ProfileDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const { profileId } = route.params
    
    useLayoutEffect(() => {
        navigation.setOptions({
        
            headerLeft: () => (
                <HeaderBackButton
                    tintColor="white"
                    onPress={() => {
                        navigation.goBack
                    }}
                />
            ),
        });
    }, [])

    return (
        <View>
            <Text>Profile Id: {profileId}</Text>
        </View>
    );
}

export default ProfileDetailScreen;