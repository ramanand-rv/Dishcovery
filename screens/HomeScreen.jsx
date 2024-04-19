import {ScrollView, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import {client} from '../sanity';

const HomeScreen = () => {
  // const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, [navigation]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'featured'] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
     }
    }
    `,
      )
      .then(data => {
        setFeaturedCategories(data);
      });
  }, []);

  // console.log('FEATURED: ', featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-1">
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
        {featuredCategories &&
          featuredCategories.map(category => (
            <Featured
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
