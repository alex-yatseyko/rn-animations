import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("screen");

export default function App() {
  // const [visible, toggle] = useReducer((s) => !s, true);

  // const { height, width } = useWindowDimensions();

  const handRotation = useSharedValue(0);
  const minRotation = useSharedValue(0);
  const hourRotation = useSharedValue(0);

  const [now, setNow] = useState(new Date());

  // const now = new Date();
  const secs = now.getSeconds();
  const secsDeg = (secs / 60) * 360 + 90;

  const mins = now.getMinutes();
  const minsDeg = (mins / 60) * 360 + 90;

  const hours = now.getHours();
  const hoursDeg = (hours / 12) * 360 + 90;

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  });

  useEffect(() => {
    // console.log(secs);
    // console.log(secsDeg);
    // console.log("mins", minsDeg);
    handRotation.value = withTiming(secsDeg, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
    minRotation.value = withTiming(minsDeg, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
    hourRotation.value = withTiming(hoursDeg, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  }, [secs]);

  const secondsStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: 1 * 60 },
        {
          rotate: `${handRotation.value}deg`,
        },
        { translateX: -1 * 60 },
      ],
    };
  });
  const minsStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: 1 * 30 },
        {
          rotate: `${minRotation.value}deg`,
        },
        { translateX: -1 * 30 },
      ],
    };
  });
  const hourStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: 1 * 20 },
        {
          rotate: `${hourRotation.value}deg`,
        },
        { translateX: -1 * 20 },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.clockFace}>
        {/* <MotiView> */}
        <Animated.View
          // from={{
          //   rotate: "0deg",
          // }}
          // animate={{
          //   rotate: "90deg",
          // }}
          // transition={{
          //   loop: true,
          //   duration: 300,
          // }}

          style={[styles.secondHand, secondsStyles]}
          // style={styles.hourHand}
        />
        {/* </MotiView> */}
        <Animated.View
          // style={styles.minHand}
          style={[styles.minHand, minsStyles]}
        />
        <Animated.View
          // style={styles.minHand}
          style={[styles.hourHand, hourStyles]}
        />
        {/* <View style={styles.secondHand} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "green",
  },
  clockFace: {
    borderRadius: 200,
    width: width / 1.5,
    height: width / 1.5,
    borderColor: "white",
    borderWidth: 15,
  },
  secondHand: {
    backgroundColor: "#000",
    width: "48%",
    height: 5,
    position: "absolute",
    top: "50%",
    // transform: [
    //   { translateX: 1 * 60 },
    //   {
    //     rotate: "90deg",
    //   },
    //   { translateX: -1 * 60 },
    // ],
  },
  minHand: {
    width: "30%",
    backgroundColor: "#4287f5",
    height: 5,
    position: "absolute",
    top: "50%",
    left: "20%",
    // transform: [{ translateX: "-50%" }],
  },
  hourHand: {
    width: "20%",
    backgroundColor: "#f542b9",
    height: 5,
    position: "absolute",
    top: "50%",
    left: "30%",
  },
});
