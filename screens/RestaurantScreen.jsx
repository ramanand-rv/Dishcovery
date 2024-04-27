import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from 'react-native-heroicons/outline';
import {StarIcon} from 'react-native-heroicons/solid';
import {useDispatch} from 'react-redux';
import {urlFor} from '../builder';
import BasketIcon from '../components/BasketIcon';
import DishCard from '../components/DishCard';
import {setRestaurant} from '../features/restaurantSlice';

const RestaurantScreen = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      }),
    );
  });

  StatusBar.setHidden(true, 'none');
  const navigation = useNavigation();
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{uri: urlFor(imgUrl).url()}}
            className="w-full h-56 bg-gray-300 p-4 "
          />

          <TouchableOpacity
            className=" bg-gray-100 rounded-full absolute top-10 left-5 p-2"
            onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size={30} color={'#00bbcc'} />
          </TouchableOpacity>
        </View>

        <View className="bg-white ">
          <View className="px-2 pt-1">
            <Text className="text-3xl font-bold">{title}</Text>

            <View className="flex-row items-center space-x-2 my-1">
              <StarIcon size={22} color="#00ff00" opacity={0.6} />
              <Text className=" text-gray-600">
                <Text className="text-green-500">{rating}</Text>
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon size={22} color="gray" opacity={0.6} />
              <Text>{address}</Text>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 border-y border-gray-300 p-3">
            <QuestionMarkCircleIcon size={22} color="gray" opacity={0.6} />
            <Text className="pl-2 flex-1 font-bold text-md text-black">
              Have a food allergy?
            </Text>
            <ChevronRightIcon size={22} color="gray" />
          </TouchableOpacity>
        </View>
        <View className=" pb-32">
          <Text className="px-3 pt-3 font-bold text-xl text-black">Menu</Text>

          {dishes &&
            dishes.map(dish => (
              <DishCard
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
