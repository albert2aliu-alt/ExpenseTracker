import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { getCategoryByKey } from '@/utils/categories';

interface CategoryIconProps {
  category: string;
  size?: number;
}

export function CategoryIcon({ category, size = 44 }: CategoryIconProps) {
  const cat = getCategoryByKey(category);
  const iconSize = Math.round(size * 0.46);
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2, backgroundColor: cat.color + '20' }]}>
      <Ionicons name={cat.icon as any} size={iconSize} color={cat.color} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { alignItems: 'center', justifyContent: 'center' } });
