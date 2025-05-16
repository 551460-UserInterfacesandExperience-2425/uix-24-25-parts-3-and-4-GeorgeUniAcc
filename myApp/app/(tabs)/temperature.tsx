import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Circle } from 'react-native-progress'; 

const rooms = ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom'];

export default function TemperatureScreen() {
  const [temperatures, setTemperatures] = useState(
    rooms.reduce((acc, room) => {
      acc[room] = 22; // default 22°C
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

          {/* Circular Progress Indicator */}
          <Circle
            size={150}
            progress={(temperatures[room] - 10) / 25} // Map temperature to progress (0 to 1)
            color="#00f"
            unfilledColor="#ccc"
            thickness={8}
            showsText={true}
            formatText={() => `${temperatures[room]}°C`} // Show temperature inside circle
          />

          {/* Temperature Control Slider */}
          <Slider
            style={styles.slider}
            minimumValue={10}
            maximumValue={35}
            step={1}
            value={temperatures[room]}
            onValueChange={(value) => handleTempChange(room, value)}
            minimumTrackTintColor="#00f"
            maximumTrackTintColor="#f00"
            thumbTintColor="#00f"
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  roomCard: {
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 12,
    width: '100%',
  },
  roomName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});
