import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurant} from '../features/restaurantSlice';
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from '../features/basketSlice';
import {XCircleIcon} from 'react-native-heroicons/solid';
import {urlFor} from '../builder';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const deliveryCharge = 150;
  const discount = 15;

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  //   console.log(groupedItemsInBasket);
  // console.log(restaurant);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-500">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            className="rounded-full bg-gray-100 absolute top-3 right-3"
            onPress={navigation.goBack}>
            <XCircleIcon size={50} color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-2 p-3 bg-white my-4">
          <Image
            source={require('../assets/fast-food.png')}
            className="h-10 w-10 rounded-full bg-gray-400 p-4"
          />
          <Text className="flex-1 text-lg font-semibold">
            Deliver in 45-60 mins
          </Text>
          <TouchableOpacity>
            <Text className="text-lg font-extrabold">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, item]) => (
            <View
              key={key}
              className="flex-row items-center space-x-2 px-5 py-2 bg-white">
              <Text className="text-[#00ccbb]">{item.length} ×</Text>
              <Image
                source={{uri: urlFor(item[0].image).url()}}
                className="h-12 w-12 rounded-full p-2"
              />
              <Text className="flex-1 text-gray-600 text-base font-semibold">
                {item[0].name}
              </Text>
              <Text className="font-bold text-gray-600 text-base">
                ₹ {item[0].price}
              </Text>

              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({id: key}))}>
                <Text className="text-[#00ccbb]">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-2 bg-white mt-3 space-y-3">
          <View className="flex-row justify-between items-center space-x-2 px-3">
            <Text className="text-gray-600 ">Subtotal</Text>
            <Text className="text-gray-600 ">₹ {total.toFixed(2)}</Text>
          </View>

          <View className="flex-row justify-between items-center space-x-2 px-3">
            <Text className="text-gray-600 ">Delivery Fee</Text>
            <Text className="text-gray-600 ">
              ₹ {deliveryCharge.toFixed(2)}
            </Text>
          </View>

          <View className="flex-row justify-between items-center space-x-2 px-3">
            <Text className="text-gray-600 ">Discount </Text>
            <Text className="text-gray-600 ">{discount}% </Text>
          </View>

          <View className="flex-row justify-between items-center space-x-2 px-3">
            <Text className="text-gray-600 font-bold ">Order Total</Text>
            <Text className="text-gray-600 font-bold">
              ₹ {(total - (discount * total) / 100 + deliveryCharge).toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity className="bg-[#00ccbb] py-3 mx-3 rounded-lg ">
            <Text className="text-white text-lg text-center font-bold">
              Place order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
