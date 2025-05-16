import { Link } from 'expo-router';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#888"
        style={styles.searchInput}
      />
      <View style={styles.links}>
        <Link href="/" asChild>
          <Ionicons name="home-outline" size={24} color="#333" style={styles.icon} />
        </Link>
        <Link href="/explore" asChild>
          <Ionicons name="compass-outline" size={24} color="#333" style={styles.icon} />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 12,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
    marginRight: 20,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    fontSize: 16,
  },
  links: {
    flexDirection: 'row',
    gap: 12,
  },
  icon: {
    padding: 4,
  },
});
