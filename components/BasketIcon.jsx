import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectBasketItems, selectBasketTotal} from '../features/basketSlice';
import {useNavigation} from '@react-navigation/native';

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotalPrice = useSelector(selectBasketTotal);
  return (
    <View className="absolute bottom-10 w-full z-20">
      <TouchableOpacity
        className="flex-row items-center space-x-2 bg-[#00ccbb] p-3 rounded-lg mx-5 "
        onPress={() => navigation.navigate('BasketScreen', {items})}>
        <Text className="text-white font-extrabold text-lg bg-[#01a2a3] px-2 rounded-md">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          ₹ {basketTotalPrice}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
