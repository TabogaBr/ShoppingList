import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  const add = () => {
    setData([...data, {key: text}]);
    setText('');
  }

  const clear = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <TextInput style = {[styles.textinputs, styles.margins, styles.textTop]}
      onChangeText={text => setText(text)}
      value={text}/>
      <View style = {styles.buttons} >
        <Button onPress = {add} title = " ADD " />
        <Button onPress = {clear} title = " CLEAR " />
      </View>
      <FlatList contentContainerStyle = {styles.items}
      style = {styles.list}
      data = {data}
      renderItem = {({item}) => <Text style = {styles.item} > {item.key} </Text>}
      ListHeaderComponent = {<Text style = {styles.title} > Shopping List </Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textinputs: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttons: {
    flexDirection: 'row',
  },
  margins: {
    margin: '3%',
  },
  list: {
    paddingVertical: '5%',
  },
  textTop: {
    marginTop: 100,
  },
  items: {
    alignItems: 'center',
  },
  title: {
    color: 'blue',
    fontSize: 18,
  },
  item: {
    fontSize: 16,
  },
});
