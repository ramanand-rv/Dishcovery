import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {urlFor} from '../builder';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';

const RestaurantScreen = () => {
  const {
    params: {
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
    },
  } = useRoute();
  StatusBar.setHidden(true, 'none');
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{uri: urlFor(imgUrl).url()}}
          className="w-full h-56 bg-gray-300 p-4 "
        />
        <TouchableOpacity className=" bg-gray-100 rounded-full absolute top-10 left-5 p-1">
          <ArrowLeftIcon size={30} color={'#00bbcc'} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
