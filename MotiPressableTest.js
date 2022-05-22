// import React, { useReducer } from "react";
// import { StyleSheet, Pressable } from "react-native";
// import { MotiView } from "moti";
// import { Skeleton } from "moti/skeleton";

// const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />;

// export default function HelloWorld() {
//   const [dark, toggle] = useReducer((s) => !s, true);

//   const colorMode = dark ? "dark" : "light";

//   return (
//     <Pressable onPress={toggle} style={styles.container}>
//       <MotiView
//         transition={{
//           type: "timing",
//         }}
//         style={[styles.container, styles.padded]}
//         animate={{ backgroundColor: dark ? "#000000" : "#ffffff" }}
//       >
//         <Skeleton colorMode={colorMode} radius="round" height={75} width={75} />
//         <Spacer />
//         <Skeleton colorMode={colorMode} width={250} />
//         <Spacer height={8} />
//         <Skeleton colorMode={colorMode} width={"100%"} />
//         <Spacer height={8} />
//         <Skeleton colorMode={colorMode} width={"100%"} />
//       </MotiView>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   shape: {
//     justifyContent: "center",
//     height: 250,
//     width: 250,
//     borderRadius: 25,
//     marginRight: 10,
//     backgroundColor: "white",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   padded: {
//     padding: 16,
//   },
// });

import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import React, { useEffect, useState, useMemo } from "react";
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
import { Skeleton } from "moti/skeleton";
import { MotiPressable } from "moti/interactions";

const { height, width } = Dimensions.get("screen");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <AnimatePresence>
        {visible && (
          <MotiView
            from={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            style={{
              backgroundColor: "red",
              width: 300,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
              }}
            >
              Dissapearing element
            </Text>
          </MotiView>
        )}
      </AnimatePresence>
      <MotiPressable
        onPress={() => setVisible((e) => !e)}
        style={{
          marginBottom: 30,
          backgroundColor: "orange",
          borderRadius: 100,
          padding: 20,
          paddingHorizontal: 50,
        }}
        animate={useMemo(
          () =>
            ({ hovered, pressed }) => {
              "worklet";

              return {
                opacity: hovered || pressed ? 0.5 : 1,
              };
            },
          []
        )}
        transition={useMemo(
          () =>
            ({ hovered, pressed }) => {
              "worklet";

              return {
                delay: hovered || pressed ? 0 : 300,
              };
            },
          []
        )}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
          }}
        >
          Click
        </Text>
      </MotiPressable>
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
