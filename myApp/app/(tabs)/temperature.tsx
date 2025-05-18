import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Circle } from 'react-native-progress'; 

const rooms = ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom'];

export default function TemperatureScreen() {
  const [temperatures, setTemperatures] = useState(
    rooms.reduce((acc, room) => {
      acc[room] = 22; 
      return acc;
    }, {} as Record<string, number>)
  );

  const handleTempChange = (room: string, value: number) => {
    setTemperatures((prev) => ({
      ...prev,
      [room]: Math.round(value),
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌡️ Room Temperature Control</Text>

      {rooms.map((room) => (
        <View key={room} style={styles.roomCard}>
          <Text style={styles.roomName}>{room}</Text>

          <Circle
            size={150}
            progress={(temperatures[room] - 10) / 25} 
            color="#70a1ff"
            unfilledColor="#dcdcdc"
            thickness={8}
            showsText={true}
            formatText={() => `${temperatures[room]}°C`}
          />

          <Slider
            style={styles.slider}
            minimumValue={10}
            maximumValue={35}
            step={1}
            value={temperatures[room]}
            onValueChange={(value) => handleTempChange(room, value)}
            minimumTrackTintColor="#70a1ff"
            maximumTrackTintColor="#dcdcdc"
            thumbTintColor="#70a1ff"
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f4f6f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  roomCard: {
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    elevation: 3,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  roomName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  slider: {
    width: '100%',
    height: 40,
  },
});
