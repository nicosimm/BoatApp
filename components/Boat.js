import React from 'react-native';
import { Text, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({name, description, icon_name, poster}) => {
    return (
        <View>
            <Icon name={icon_name} size={20} color={'#808080'}><Text>{name}</Text></Icon>
            <Text>{description}</Text>
            <Image
                source={poster}
                style={{ width: 400, height: 500 }} // Setting width and height
            />
        </View>
    )
}

export default Boat;
