import { StyleSheet, Text, View } from 'react-native';
import { Item } from '../types';

type Props = {
  item: Item;
};

export default function ItemRow({ item }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: { fontSize: 18 },
});