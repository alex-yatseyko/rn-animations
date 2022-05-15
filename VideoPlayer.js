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
import Slider from "react-native-reanimated-slider";
import { Value } from "react-native-reanimated";

// https://snack.expo.dev/@harrydevgan8/video-player-with-progress-bar

const { height, width } = Dimensions.get("screen");

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const [currentTime, setCurrentTime] = React.useState();
  const [duration, setDuration] = React.useState();
  const [state, setState] = React.useState();

  // const currentTime = new Value(10);
  playableDuration = new Value(15);
  seekableDuration = new Value(20);

  const slidingStart = () => {
    console.log("slide started");
  };
  const slidingComplete = (number) => {
    console.log("slide completed" + number);
  };

  const togglePlay = () => {
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
  };

  const handleProgress = (progress) => {
    console.log(progress);
  };

  useEffect(() => {
    // console.log(video.current._nativeRef);
    console.log(duration);
  }, [duration]);

  const statusBar = (a) => {
    let m = (a.positionMillis / a.durationMillis) * 100;
    let work = a.positionMillis / 1000;
    let full = a.durationMillis / 1000;
    let fulltime = Math.round(full);
    let time = Math.round(work);
    let ab = Math.round(m);
    console.log(a);
    setState({
      videostatus: a,
      working: time,
      total: fulltime,
      percentage: m,
      baloon: ab,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={togglePlay}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          // useNativeControls
          resizeMode="contain"
          isLooping
          // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          onPlaybackStatusUpdate={(e) => statusBar(e)}
          onLoad={(data) => {
            setDuration(data.durationMillis);
          }}
          onProgress={handleProgress}
        />
        <View
          style={{
            width: 320,
            height: 5,
            position: "absolute",
            bottom: 10,
            backgroundColor: "#000",
            zIndex: 1000,
          }}
        >
          <MotiView
            style={{
              height: 5,
              backgroundColor: "orange",
              width: 10, // there should be passed state somehow
            }}
          />
        </View>
      </Pressable>
      {/* <Slider
        style={{ flex: 1, height: 10 }}
        minimumTrackTintColor="#fff"
        thumbTintColor="#f00"
        borderColor="#0f0"
        progress={currentTime}
        min={new Animated.Value(0)}
        cache={playableDuration}
        max={seekableDuration}
        onSlidingStart={slidingStart}
        onSlidingComplete={slidingComplete}

        // only if you want to render custom ballon for sliding
        // renderBallon={this.renderBallon}
        // setBallonText={this.setBallonText}
      /> */}
      <View style={styles.buttons}>
        <Pressable
          onPress={togglePlay}
          style={{
            backgroundColor: "orange",
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{status.isPlaying ? "❚ ❚" : "▶"}</Text>
        </Pressable>
        <Animated.View></Animated.View>
      </View>
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
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
