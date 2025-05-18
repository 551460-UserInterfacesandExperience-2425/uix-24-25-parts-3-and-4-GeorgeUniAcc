import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Smart Home Dashboard</Text>

      <View style={styles.buttonContainer}>
      <Link href="/(tabs)/energy" asChild>
          <TouchableOpacity style={styles.card}>
            <MaterialCommunityIcons name="flash" size={32} color="#FFD93D" />
            <Text style={styles.cardText}>Energy Usage</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/temperature" asChild>
          <TouchableOpacity style={styles.card}>
            <MaterialCommunityIcons name="thermometer" size={32} color="#FF6B6B" />
            <Text style={styles.cardText}>Temperature</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/security" asChild>
          <TouchableOpacity style={styles.card}>
            <MaterialCommunityIcons name="lock" size={32} color="#4ECDC4" />
            <Text style={styles.cardText}>Security</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/lights" asChild>
          <TouchableOpacity style={styles.card}>
            <MaterialCommunityIcons name="lightbulb-on" size={32} color="#FFD93D" />
            <Text style={styles.cardText}>Lights</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#212529',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    paddingVertical: 25,
    alignItems: 'center',
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginTop: 10,
  },
});
