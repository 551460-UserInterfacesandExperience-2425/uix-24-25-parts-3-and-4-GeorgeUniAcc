// SmartLocksScreen.tsx
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, FlatList } from 'react-native';

const SmartLocksScreen = () => {
  const [frontDoorLocked, setFrontDoorLocked] = useState(true);
  const [backDoorLocked, setBackDoorLocked] = useState(false);

  const sensors = [
    { id: '1', name: 'Living Room Window', status: 'on' },
    { id: '2', name: 'Garage Door', status: 'off' },
    { id: '3', name: 'Back Garden Sensor', status: 'on' },
    { id: '4', name: 'Front Garden Camera', status: 'off' },
  ];

  const renderSensor = ({ item }: any) => (
    <View style={styles.sensorRow}>
      <Text style={styles.sensorName}>{item.name}</Text>
      <Text style={[styles.sensorStatus, { color: item.status === 'on' ? 'green' : 'gray' }]}>
        {item.status.toUpperCase()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Door Locks</Text>

      <View style={styles.switchRow}>
        <Text style={styles.label}>Front Door Lock</Text>
        <Switch
          value={frontDoorLocked}
          onValueChange={setFrontDoorLocked}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.label}>Back Door Lock</Text>
        <Switch
          value={backDoorLocked}
          onValueChange={setBackDoorLocked}
        />
      </View>

      <Text style={styles.header}>Sensor Status</Text>
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
    backgroundColor: '#f6f6f6',
  },
  header: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
  },
  sensorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  sensorName: {
    fontSize: 16,
  },
  sensorStatus: {
    fontWeight: 'bold',
  },
});
