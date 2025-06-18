import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { COLORS } from '../../constant/Colors';

const LineLoadingIndicator: React.FC = () => {
  const translateX = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(translateX, {
        toValue: 200,
        duration: 1000,
        useNativeDriver: true
      })
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [translateX]);

  return (
    <View style={styles.container}>
      <View style={styles.lineContainer}>
        <Animated.View
          style={[
            styles.animatedLine,
            {
              transform: [{ translateX }]
            }
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    marginVertical: 20
  },
  lineContainer: {
    width: '100%',
    height: 3,
    backgroundColor: '#F3F3F3',
    overflow: 'hidden',
    borderRadius: 2,
    position: 'relative'
  },
  animatedLine: {
    width: '40%',
    height: '100%',
    backgroundColor: COLORS.primary500,
    borderRadius: 2,
    position: 'absolute'
  }
});

export default LineLoadingIndicator;
