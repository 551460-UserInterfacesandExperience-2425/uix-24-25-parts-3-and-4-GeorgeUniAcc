// SmartLocksScreen.tsx
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const SmartLocksScreen = () => {
  const [frontDoorLocked, setFrontDoorLocked] = useState(true);
  const [backDoorLocked, setBackDoorLocked] = useState(false);

  const defaultState = {
    front: true,
    back: false,
  };

  const resetLocks = () => {
    setFrontDoorLocked(defaultState.front);
    setBackDoorLocked(defaultState.back);
  };

  const sensors = [
    { id: '1', name: 'Living Room Window', status: 'on' },
    { id: '2', name: 'Garage Door', status: 'off' },
    { id: '3', name: 'Backyard Sensor', status: 'on' },
    { id: '4', name: 'Front Porch Camera', status: 'off' },
  ];

  const renderSensor = ({ item }: any) => (
    <View style={styles.sensorRow}>
      <MaterialCommunityIcons
        name={item.status === 'on' ? 'check-circle' : 'close-circle'}
        size={20}
        color={item.status === 'on' ? 'green' : 'red'}
        style={styles.sensorIcon}
      />
      <Text style={styles.sensorName}>{item.name}</Text>
      <Text style={[styles.sensorStatus, { color: item.status === 'on' ? 'green' : 'red' }]}>
        {item.status.toUpperCase()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔐 Door Lock Controls</Text>

      <View style={styles.switchRow}>
        <Text style={styles.label}>Front Door</Text>
        <View style={styles.switchGroup}>
          <MaterialCommunityIcons
            name={frontDoorLocked ? 'lock' : 'lock-open-variant'}
            size={20}
            color={frontDoorLocked ? 'green' : 'gray'}
          />
          <Switch
            value={frontDoorLocked}
            onValueChange={setFrontDoorLocked}
          />
        </View>
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.label}>Back Door</Text>
        <View style={styles.switchGroup}>
          <MaterialCommunityIcons
            name={backDoorLocked ? 'lock' : 'lock-open-variant'}
            size={20}
            color={backDoorLocked ? 'green' : 'gray'}
          />
          <Switch
            value={backDoorLocked}
            onValueChange={setBackDoorLocked}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetLocks}>
        <MaterialCommunityIcons name="refresh" size={18} color="#007BFF" />
        <Text style={styles.resetText}>Reset to Default</Text>
      </TouchableOpacity>

      <Text style={styles.header}>📡 Sensor Status</Text>
      <FlatList
        data={sensors}
        keyExtractor={(item) => item.id}
        renderItem={renderSensor}
      />
    </View>
  );
};

export default SmartLocksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#212529',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 10,
    elevation: 1,
  },
  label: {
    fontSize: 16,
    color: '#212529',
  },
  switchGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
    gap: 5,
  },
  resetText: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: '500',
  },
  sensorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
  },
  sensorIcon: {
    marginRight: 10,
  },
  sensorName: {
    flex: 1,
    fontSize: 16,
  },
  sensorStatus: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
