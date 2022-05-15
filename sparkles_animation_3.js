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
import { Star } from "./svg/star";
import { Checkmark } from "./svg/checkmark";

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
          {arr.map((_, index) => {
            return (
              <View
                key={index}
                style={{
                  position: "absolute",
                }}
              >
                <MotiView
                  from={{
                    transform: [
                      { rotate: `${index * 24}deg` },
                      {
                        // translateX: 0 * Math.random() * 9,
                        translateX: Math.floor(Math.random() * 10) + 9,
                        // translateX: 0 * index * 10,
                      },
                    ],
                    opacity: 0.3,
                  }}
                  animate={{
                    transform: [
                      { rotate: `${index * 24}deg` },
                      {
                        translateX: 530,
                      },
                    ],
                    opacity: 1,
                  }}
                  transition={{
                    type: "timing", // default spring
                    duration: 1550,
                    delay: 40 * Math.floor(Math.random() * 10),
                  }}
                  style={styles.sparkle}
                />
                <MotiView
                  from={{
                    transform: [
                      { rotate: `${index * 24}deg` },
                      {
                        translateX: Math.floor(Math.random() * 10) + 9,
                      },
                    ],
                    opacity: 0.3,
                  }}
                  animate={{
                    transform: [
                      { rotate: `${index * 24}deg` },
                      {
                        translateX: 530,
                      },
                    ],
                    opacity: 1,
                  }}
                  transition={{
                    // repeat: 4,
                    // type: "timing", // default spring
                    // duration: 1350,
                    // delay: 50 * index,
                    delay: 60 * Math.floor(Math.random() * 10),
                    // loop: true,
                  }}
                  style={styles.sparkle}
                />
              </View>
            );
          })}
        </AnimatePresence>
        <MotiView
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: width,
            height: height,
          }}
          from={{
            opacity: 0,
            scale: 0.1,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
        >
          <Star />
          <Checkmark
            style={{
              position: "absolute",
              left: "35%",
              top: "30%",
              shadowColor: "#FC7411",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 1,
              shadowRadius: 6.27,

              elevation: 10,
            }}
          />
        </MotiView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  sparkle: {
    backgroundColor: "#fff",
    width: 20,
    height: 2,
    position: "absolute",
    borderRadius: 30,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 6.27,

    elevation: 1,
  },
});
