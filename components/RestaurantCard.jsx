import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {StarIcon} from 'react-native-heroicons/solid';
import {MapPinIcon} from 'react-native-heroicons/outline';
import {urlFor} from '../builder';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow w-[248px] max-h-max p-1">
      <Image
        source={{uri: urlFor(imgUrl).url()}}
        className="h-36 w-auto rounded"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={'green'} opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color={'gray'} opacity={0.4} size={22} />
          <Text className="text-xs w-auto text-gray-500 overflow-hidden flex-nowrap">
            {address.length > 20 ? address.substring(0, 15) + '...' : address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
