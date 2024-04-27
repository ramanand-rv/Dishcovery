import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import 'react-native-url-polyfill/auto';
import {client} from '../sanity';
import RestaurantCard from './RestaurantCard';

const Featured = ({id, title, description}) => {
  const [restaurants, setRestaurants] = useState();

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
      .then(data => setRestaurants(data?.restaurants));
  }, [id]);

  // console.log(restaurants);

  return (
    <View className="">
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

        {restaurants &&
          restaurants.map(restaurant => (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              // genre={restaurant.type?.name}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default Featured;
