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
    //   client
    //     .fetch(
    //       `*[_type == 'featured'] {
    //   ...,
    //   restaurants[]->{
    //     ...,
    //     dishes[]->
    //  }
    // }
    // `,
    //     )
    //     .then(data => {
    //       setFeaturedCategories(data);
    //     });

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://y9y4lpo9.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27featured%27%5D+%7B%0A++...%2C%0A++restaurants%5B%5D-%3E%7B%0A++++...%2C%0A++++dishes%5B%5D-%3E%0A+%7D%0A%7D%0A',
        );
        const jsonData = await response.json();
        setFeaturedCategories(jsonData.result); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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

        {/* <Featured
          id="1234"
          title="Tasty discounts"
          description="Raste ka maal saste me"
        />

        <Featured
          id="1235"
          title="Spicy discounts"
          description="Raste ka maal saste me"
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
