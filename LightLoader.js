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

const LoadingIndicator = ({ size }) => {
  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 0,
        shadowOpacity: 0.5,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderRadius: size / 2 + 20,
        borderWidth: size / 10,
        shadowOpacity: 1,
      }}
      transition={{
        // loop: true,
        type: "timing",
        duration: 1000,
        repeat: Infinity,
        // repeatReverse: false,
      }}
      style={{
        width: 100,
        height: 100,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: "#fff",
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    />
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Test</Text> */}
      <LoadingIndicator size={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
    backgroundColor: "#000",
  },
});
