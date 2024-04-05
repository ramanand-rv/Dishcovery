import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className=" mr-2 relative">
      <Image source={imgUrl} className="h-40 w-60" />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
