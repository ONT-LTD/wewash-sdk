import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'], // Entry point of your package
  format: ['cjs', 'esm'], // Output CommonJS and ES Module builds
  target: 'es5', // Target ES5 compatibility
  dts: true, // Generate TypeScript declaration files
  sourcemap: true, // Enable source maps
  external: [
    'react',
    'react-native',
    '@expo/vector-icons',
    'react-native-vector-icons',
    '@expo/vector-icons/*',
    'react-native-vector-icons/*',
    'moment',
    'expo-blur',
    'react-native-svg'
  ], // Mark peer dependencies as external
  clean: true // Clean output directory before building
});
