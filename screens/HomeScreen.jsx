import {View, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Featured from '../components/Featured';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <Featured />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
