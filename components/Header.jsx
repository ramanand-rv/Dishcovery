import {Text, View, Image, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';

const imgPaths = {
  fastfood: require('../assets/fast-food.png'),
};

const Header = () => {
  return (
    <SafeAreaView className="bg-white pt-1">
      <View className="flex-row items-center mx-2 space-x-2 mb-2">
        <Image
          className="h-10 w-10 bg-gray-300 p-4 rounded-full px-2"
          source={imgPaths.fastfood}
        />
        {/* Header */}
        <View className="flex-1">
          <Text className="text-xs text-gray-400">Deliver Now</Text>
          <Text className="text-xl font-bold">
            Current Location
            <ChevronDownIcon size={20} color={'#00ccbb'} />
          </Text>
        </View>
        <UserIcon size={35} color={'#00ccbb'} />
      </View>

      {/* Search bar */}
      <View className="flex-row items-center space-x-2  mx-2 px-1">
        <View className="flex-row items-center bg-gray-200 p-1 flex-1">
          <MagnifyingGlassIcon color={'#00ccbb'} size={25} />
          <TextInput
            placeholder="Search you favourite food"
            keyboardType="default"
            className="flex-1"
          />
        </View>
        <AdjustmentsVerticalIcon color={'#00ccbb'} />
      </View>
    </SafeAreaView>
  );
};

export default Header;
