import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {urlFor} from '../builder';

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className=" mr-2 relative ">
      <Image
        source={{uri: urlFor(imgUrl).url()}}
        className="h-16 w-16 rounded"
      />
      <View className="absolute bottom-1 left-1 rounded backdrop-blur-xl bg-black/40  border-black border-[0.3px] border-opacity-40 ">
        <Text className=" text-white font-bold px-1 text-[8px]">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
