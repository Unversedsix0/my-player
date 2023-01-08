import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MusicPlayer } from './src/components';

import { styles } from './src/style/styles';


export default function App() {
  return (
    <View style={styles.container}>
     <MusicPlayer/>
    </View>
  );
}


