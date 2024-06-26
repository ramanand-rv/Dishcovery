import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import CategoryCard from './CategoryCard';

import {client} from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == 'category'] 
    `,
      )
      .then(data => setCategories(data));
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
      {categories &&
        categories.map(category => (
          <CategoryCard
            key={category._id}
            imgUrl={category.image}
            title={category.name}
          />
        ))}
    </ScrollView>
  );
};

export default Categories;
