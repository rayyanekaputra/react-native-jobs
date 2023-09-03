import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZE } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBTN,
  Welcome,
} from "../components";


const Home = () => {
    const router = useRouter();



  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
