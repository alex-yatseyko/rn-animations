import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
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

const _size = 60;

const transition = {
  type: "timing",
  duration: 300,
  easing: Easing.inOut(Easing.ease),
};

const Switch = ({ size, onPress, isActive }) => {
  const trackWidth = useMemo(() => {
    return size * 1.5;
  }, [size]);
  const trackHeight = useMemo(() => {
    return size * 0.4;
  }, [size]);
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MotiView
          from={{
            backgroundColor: isActive ? "#000" : "#bbb",
          }}
          animate={{
            backgroundColor: isActive ? "#bbb" : "#000",
          }}
          transition={transition}
          style={{
            position: "absolute",
            width: trackWidth,
            height: trackHeight,
            borderRadius: trackHeight / 2,
          }}
        />
        <MotiView
          from={{
            translateX: isActive ? trackWidth / 4 : -trackWidth / 4,
          }}
          animate={{ translateX: isActive ? -trackWidth / 4 : trackWidth / 4 }}
          transition={transition}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 3,
            shadowOpacity: 1,
          }}
        >
          <MotiView
            transition={transition}
            animate={{
              width: isActive ? 0 : size / 1.8,
            }}
            style={{
              width: size / 1.8,
              height: size / 1.8,
              borderRadius: size / 3,
              borderColor: "#000",
              borderWidth: size / 10,
            }}
          />
        </MotiView>
      </View>
    </Pressable>
  );
};

export default function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        size={_size}
        isActive={isActive}
        onPress={() => {
          setIsActive((isActive) => !isActive);
        }}
      />
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
});
