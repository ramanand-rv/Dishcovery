import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import {client} from '../sanity';
import 'react-native-url-polyfill/auto';

const Featured = ({id, title, description}) => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'featured' && _id == $id] {
  ...,
  restaurants[]->{
    ...,
    dishes[]->,
      type->{
        name
      }
  },
}[0]`,
        {id},
      )
      .then(data => setRestaurant(data));
  }, [id]);

  console.log(restaurant);

  return (
    <View>
      <View className=" mt-4 flex-row items-center justify-between mx-2">
        <Text className=" font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={'#00ccbb'} />
      </View>
      <Text className=" text-xs text-gray-500 mx-2">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4">
        {/* Restaurant Cards */}
        <RestaurantCard
          id={id}
          imgUrl="https://links.papareact.com/gn7"
          title="Paneer"
          rating={4.5}
          genre="Testy 1"
          address="Margao, GOA"
          short_description="Great description"
          dishes={[]}
          long={123}
          lat={789}
        />
        <RestaurantCard
          id={id}
          imgUrl="https://links.papareact.com/gn7"
          title="Saurabh"
          rating={4.8}
          genre="Testy 2"
          address="Margao, GOA"
          short_description="Tasty description"
          dishes={[]}
          long={124}
          lat={790}
        />
        <RestaurantCard
          id={id}
          imgUrl="https://links.papareact.com/gn7"
          title="Rahul"
          rating={4.2}
          genre="Testy 3"
          address="Margao, GOA"
          short_description="Spicy description"
          dishes={[]}
          long={125}
          lat={791}
        />
      </ScrollView>
    </View>
  );
};

export default Featured;
