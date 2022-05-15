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
import Slider from "react-native-reanimated-slider";
import { Value } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("screen");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#FFA25F", "#FC7411"]}
        style={styles.background}
      >
        <AnimatePresence>
          {arr.map((el, index) => {
            return (
              <MotiView
                from={{
                  transform: [
                    { rotate: `${index * 24}deg` },
                    {
                      // translateX: 0 * Math.random() * 9,
                      translateX: 0 * index * 9,
                    },
                  ],
                  opacity: 0,
                }}
                animate={{
                  // transform: [{ rotate: `${360 / index}deg` }],
                  // translateX: 40,
                  // transform: [{ translateX: 40 }],
                  transform: [
                    { rotate: `${index * 24}deg` },
                    {
                      translateX: 130,
                    },
                  ],
                  opacity: 1,
                }}
                transition={{
                  // repeat: 4,
                  loop: true,
                }}
                key={index}
                style={{
                  backgroundColor: "#fff",
                  width: 20,
                  height: 2,
                  position: "absolute",
                  borderRadius: 30,
                }}
              />
            );
          })}
        </AnimatePresence>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
    // backgroundColor: "green",
  },
  background: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
});
