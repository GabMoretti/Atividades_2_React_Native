import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initDatabase } from './db/Database';
import { AddContacts } from './components/AddContacts';
import { ListContacts } from './components/ListContacts';

initDatabase()

export default function App() {
  return (
    <View style={styles.container}>
      <AddContacts/>
      <ListContacts/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
