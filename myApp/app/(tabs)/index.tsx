// app/index.tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home Control</Text>

      <View style={styles.buttonContainer}>
        <Link href="/(tabs)/temperature" asChild>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.boxText}>🌡️ Temperature</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/security" asChild>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.boxText}>🔐 Security</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/lights" asChild>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.boxText}>💡 Lights</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 40,
  },
  box: {
    backgroundColor: '#ccc',
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  boxText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
});
