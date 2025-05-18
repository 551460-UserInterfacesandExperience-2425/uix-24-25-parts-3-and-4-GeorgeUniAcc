import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LIGHTS = [
  { id: '1', name: 'Living Room', icon: 'sofa' },
  { id: '2', name: 'Kitchen', icon: 'silverware-fork-knife' },
  { id: '3', name: 'Bedroom', icon: 'bed' },
  { id: '4', name: 'Bathroom', icon: 'shower' },
  { id: '5', name: 'Garden', icon: 'door' },
];

export default function LightsScreen() {
  const [lightStates, setLightStates] = useState(
    LIGHTS.reduce((acc, light) => ({ ...acc, [light.id]: false }), {})
  );

  const toggleLight = (id: string) => {
    setLightStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💡 Lights Control</Text>

      <FlatList
        data={LIGHTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const isOn = lightStates[item.id];

          return (
            <TouchableOpacity
              style={[styles.card, isOn && styles.cardOn]}
              onPress={() => toggleLight(item.id)}
              activeOpacity={0.8}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={30}
                color={isOn ? '#FFD93D' : '#999'}
              />
              <Text style={styles.label}>{item.name}</Text>
              <MaterialCommunityIcons
                name={isOn ? 'lightbulb-on' : 'lightbulb-off'}
                size={28}
                color={isOn ? '#FFD93D' : '#ccc'}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#212529',
  },
  list: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardOn: {
    backgroundColor: '#FFF8E1',
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
    marginLeft: 12,
    color: '#333',
  },
});
