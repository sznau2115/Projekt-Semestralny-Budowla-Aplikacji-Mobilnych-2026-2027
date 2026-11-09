import { FlatList, StyleSheet, Text, View } from 'react-native';
import ItemRow from './src/components/ItemRow';
import { Item } from './src/types';

const items: Item[] = [
  { id: '1', name: 'Pierwszy przedmiot', createdAt: Date.now() },
  { id: '2', name: 'Drugi przedmiot', createdAt: Date.now() },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collection Tracker</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemRow item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4ff', padding: 24, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
});