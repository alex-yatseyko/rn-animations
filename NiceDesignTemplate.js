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
import { Ionicons } from "@expo/vector-icons";
import { Line } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("screen");

export default function App() {
  return (
    <>
      <LinearGradient style={styles.container} colors={["#262b2e", "#141718"]}>
        <Text>Test</Text>
      </LinearGradient>
      <LinearGradient
        colors={["#262b2e", "#141718"]}
        style={[styles.triangle, { right: -60 }]}
      ></LinearGradient>
      <Ionicons
        name="chevron-back"
        size={32}
        color="white"
        style={{
          position: "absolute",
          top: 110,
          zIndex: 120,
          left: 10,
        }}
      />
      {/* <TouchableOpacity
        
      > */}
      <LinearGradient
        colors={["#141718", "#262b2e"]}
        style={[styles.triangle, { left: -60 }]}
      ></LinearGradient>
      {/* </TouchableOpacity> */}
      <Ionicons
        name="ios-close-outline"
        size={32}
        color="white"
        style={{
          position: "absolute",
          top: 110,
          zIndex: 120,
          right: 10,
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#AF3024",
          borderRadius: 100,
          shadowColor: "#AF3024",
          shadowOffset: { width: -120, height: 120 },
          shadowRadius: 80,
          shadowOpacity: 1,
          position: "absolute",
          top: -100,
          right: -width / 4.5,
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#AF3024",
          borderRadius: 100,
          shadowColor: "#338ADA",
          shadowOffset: { width: 120, height: -120 },
          shadowRadius: 80,
          shadowOpacity: 1,
          position: "absolute",
          bottom: -100,
          left: -width / 4.5,
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  triangle: {
    width: 0,
    height: 0,
    borderTopWidth: 100,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftWidth: 100,
    borderRadius: 20,
    transform: [
      {
        rotate: "45deg",
      },
      { skewY: "-10deg" },
      { skewX: "-10deg" },
    ],
    position: "absolute",
    zIndex: 100,
    top: 80,
  },
});
