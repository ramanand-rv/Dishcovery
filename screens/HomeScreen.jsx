import {View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Featured from '../components/Featured';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView
        className="bg-gray-100"
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <Featured
          id="123"
          title="Sweet discounts"
          description="Raste ka maal saste me"
        />

        <Featured
          id="1234"
          title="Tasty discounts"
          description="Raste ka maal saste me"
        />

        <Featured
          id="1235"
          title="Spicy discounts"
          description="Raste ka maal saste me"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
