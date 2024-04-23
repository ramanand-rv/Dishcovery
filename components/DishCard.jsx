import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useState} from 'react';
import {urlFor} from '../builder';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsById,
} from '../features/basketSlice';

const DishCard = ({id, name, description, price, image}) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();

  // const items = useSelector(selectBasketItems);
  // console.log(items);
  const items = useSelector(state => selectBasketItemsById(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({id, name, description, price, image}));
  };

  const removeItemFromBasket = () => {
    if (items.length <= 0) {
      return;
    }
    dispatch(removeFromBasket({id}));
  };

  return (
    <>
      <TouchableOpacity
        className={`bg-white p-3 border-gray-200 border ${
          isPressed && 'border-b-0'
        }`}
        onPress={() => setIsPressed(!isPressed)}>
        <View className="flex-row">
          <View className="flex-1">
            <Text className="text-lg mb-1 font-bold">{name}</Text>
            <Text className="text-gray-500">
              {description.replace(/^\s+/g, '')}
            </Text>
            <Text className="mt-1 text-gray-500">₹ {price}</Text>
          </View>

          <View>
            <Image
              source={{uri: urlFor(image).url()}}
              className="w-28 h-28 bg-gray-300 p-3 mb-2"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{borderWidth: 1, borderColor: 'gray'}}
            />
          </View>
        </View>

        {isPressed && (
          <View className="bg-white absolute bottom-1 right-3 rounded-xl px-1">
            <View className="flex-row items-center space-x-2 ">
              <TouchableOpacity className="" onPress={removeItemFromBasket}>
                <MinusCircleIcon size={40} color={'#00ccbb'} />
              </TouchableOpacity>
              <Text className="text-gray-500 font-bold">{items.length}</Text>
              <TouchableOpacity onPress={addItemToBasket}>
                <PlusCircleIcon size={40} color={'#00ccbb'} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};

export default DishCard;
