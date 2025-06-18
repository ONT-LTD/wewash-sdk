import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constant';
import ChevronLeft from '../../assets/svg/ChevronLeft';

type Props = {
  title: string;
  goBackLink?: string | any;
  isNotAuth?: boolean;
};

export default function Header({ title, goBackLink, isNotAuth }: Props) {
  const router = useRouter();
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: isNotAuth ? 20 : 24
        }
      ]}
    >
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => (goBackLink ? router.push(goBackLink) : router.back())}
      >
        <ChevronLeft />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  title: {
    fontSize: 14,
    fontFamily: 'UrbanistMedium',
    lineHeight: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.primary800,
    flex: 1
  },
  spacer: {
    width: 24
  },
  arrow: {
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
