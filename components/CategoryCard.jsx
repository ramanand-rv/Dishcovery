import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className=" mr-2 relative">
      <Image source={imgUrl} className="h-16 w-16 rounded" />
      <Text className="absolute bottom-1 left-1 text-black font-bold bg-slate-200 rounded ">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
