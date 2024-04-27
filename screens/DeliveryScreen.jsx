import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {XMarkIcon} from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import {WebView} from 'react-native-webview';
import {useSelector} from 'react-redux';
import {selectRestaurant} from '../features/restaurantSlice';
import html_script from '../html_script';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  const webViewRef = useRef(null);

  const _goToMyPosition = (lat, lon) => {
    const script = `
      mymap.setView([${lat}, ${lon}], 12);
      L.marker([${lat}, ${lon}]).addTo(mymap);
    `;
    webViewRef.current?.injectJavaScript(script);
  };

  useEffect(() => {
    _goToMyPosition(restaurant.lat.toFixed(4), restaurant.long.toFixed(4));
  }, [restaurant.lat, restaurant.long]);

  //   console.log(restaurant.lat.toFixed(3), restaurant.long.toFixed(2));

  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="bg-transparent">
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className="">
            <XMarkIcon size={30} color={'#fff'} />
          </TouchableOpacity>
          <Text className="text-white font-light text-lg">Order Help</Text>
        </View>

        <View className=" bg-white rounded-md px-6 py-4 shadow-md mx-5 ">
          <View className="flex-row justify-between items-center gap-4">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">45-60 Minutes</Text>
            </View>
            <Image
              source={require('../assets/deliveryman.gif')}
              className="h-24 w-24 "
            />
          </View>
          <Progress.Bar
            size={30}
            color="#00ccbb"
            indeterminate={true}
            className=""
          />
          <Text className="mt-2">
            Your order is being prepared at {restaurant.title}
          </Text>
        </View>
      </SafeAreaView>

      <WebView
        ref={webViewRef}
        source={{html: html_script}}
        className="flex-1 z-10 -mt-24"
      />

      <SafeAreaView className="bg-white flex-row items-center space-x-2 h-24">
        <Image
          source={require('../assets/kratos.jpg')}
          className="h-12 w-12 rounded-full ml-5 p-4"
        />
        <View className="flex-1">
          <Text className="text-lg">Peter Parker</Text>
          <Text className="text-gray-500">Your Rider</Text>
        </View>
        <Text className="text-[#00ccbb] text-lg font-bold mr-5">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
