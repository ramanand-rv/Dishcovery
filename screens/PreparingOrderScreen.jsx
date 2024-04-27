import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DeliveryScreen');
    }, 4000);
  });
  return (
    <SafeAreaView className="bg-[#e0e0e0] flex-1 items-center justify-center ">
      <Animatable.Image
        source={require('../assets/cooking.gif')}
        animation="slideInDown"
        iterationCount={1}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: '100%', height: undefined, aspectRatio: 1}}
      />

      <Animatable.Text
        animation={'slideInUp'}
        iterationCount={1}
        className="text-xl text-center flex-wrap mx-2 text-gray-800 ">
        Your table's set, your stomach's rumbling... just gotta wait for the
        restaurant to say "yes!"
      </Animatable.Text>

      <Progress.Circle
        size={60}
        indeterminate={true}
        color="gray"
        className="mt-10"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
