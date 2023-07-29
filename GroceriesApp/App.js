import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  // Step 3a: Define state variables using useState
  const [item, setItem] = useState('');
  const [groceryList, setGroceryList] = useState([]);

  // Step 3b: Define functions to handle adding and removing items
  const handleAddItem = () => {
    if (item.trim() !== '') {
      setGroceryList([...groceryList, { key: String(Date.now()), name: item }]);
      setItem('');
    }
  };

  const handleRemoveItem = (itemId) => {
    setGroceryList(groceryList.filter((item) => item.key !== itemId));
  };

  // Step 3c: Define the JSX for rendering the component
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Grocery List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter an item..."
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <Button title="Add" onPress={handleAddItem} />
      </View>
      <FlatList
        data={groceryList}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => handleRemoveItem(item.key)} />
          </View>
        )}
      />
    </View>
  );
};

// Step 4: Define your component's styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default App;

