import Slider from "@react-native-community/slider";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function MusicPlayer() {
  return (
    <View style={styles.musicPlayer}>
      <View style={styles.albumContainer}>
        <View style={styles.albumImage}></View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleMusic}>Nome da Musica</Text>
        <Text style={styles.titleArtist}>Nome do Artista</Text>
      </View>

      <View style ={styles.sliderContainer}>
        <Slider
        style={styles.slider}
        value={10}
        minimumValue={0}
        maximumValue={100}
        thumbTintColor='#D9D9D9'
        minimumTrackTintColor='#D9D9D9'
        maximumTrackTintColor='#FFF'
        onSlidingComplete={()=>{}}
        />
      </View>
      <View style={styles.progressLabelContainer}>
        <Text style={styles.progressLabelTxt}>0:00</Text>
        <Text style={styles.progressLabelTxt}>2:44</Text>
      </View>

      <View style={styles.musicControls}>
        <TouchableOpacity>
          <Ionicons name="play-skip-back-outline" size={32} color="#D9D9D9"  />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-outline" size={32} color="#D9D9D9" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-skip-forward-outline" size={32} color="#D9D9D9"   />
        </TouchableOpacity>
      </View>
    </View>
  );
}
