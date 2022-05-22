import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { Video, AVPlaybackStatus } from "expo-av";
import { MotiView } from "moti";
import { AnimatePresence } from "moti";
// import Slider from "react-native-reanimated-slider";
import { Value } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("screen");

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
