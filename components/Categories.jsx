import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const imgPaths = {
  watermelon: require('../assets/watermelon.jpg'),
  coffee: require('../assets/coffee.jpg'),
  noodles: require('../assets/noodles.jpg'),
  tart: require('../assets/tart.jpg'),
  coffee: require('../assets/coffee.jpg'),
};

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
      <CategoryCard imgUrl={imgPaths.watermelon} title="Testy 1 " />
      <CategoryCard imgUrl={imgPaths.coffee} title="Testy 2" />
      <CategoryCard imgUrl={imgPaths.noodles} title="Testy 3" />
      <CategoryCard imgUrl={imgPaths.tart} title="Testy 4" />
      <CategoryCard imgUrl={imgPaths.coffee} title="Testy 2" />
      <CategoryCard imgUrl={imgPaths.watermelon} title="Testy 1 " />
      <CategoryCard imgUrl={imgPaths.noodles} title="Testy 3" />
    </ScrollView>
  );
};

export default Categories;
