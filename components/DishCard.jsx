import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {urlFor} from '../builder';

const DishCard = ({id, name, description, price, image}) => {
  return (
    <TouchableOpacity className="bg-white p-3 border-gray-200 border">
      <View className="flex-row">
        <View className="flex-1">
          <Text className="text-lg mb-1 font-bold">{name}</Text>
          <Text className="text-gray-500">{description}</Text>
          <Text className="mt-1 text-gray-500">₹ {price}</Text>
        </View>
        <View>
          <Image
            source={{uri: urlFor(image).url()}}
            className="w-20 h-20 bg-gray-300 p-4"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{borderWidth: 1, borderColor: 'gray'}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DishCard;
