import React, { FC, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constant';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  initiallyExpanded?: boolean;
  style?: object;
};

const Accordion: FC<AccordionProps> = ({
  title,
  children,
  initiallyExpanded = false,
  style
}) => {
  const [expanded, setExpanded] = useState(initiallyExpanded);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.header} onPress={toggleAccordion}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={COLORS.primary500}
        />
      </TouchableOpacity>
      {expanded && <View style={styles.content}>{children}</View>}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.neutral40,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    paddingVertical: 9,
    paddingHorizontal: 12
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7
    // backgroundColor: COLORS.neutral20
  },
  title: {
    fontSize: 14,
    fontFamily: 'UrbanistSemiBold',
    lineHeight: 24,
    color: COLORS.neutral700
  },
  content: {
    paddingVertical: 4,
    backgroundColor: COLORS.white
  }
});
