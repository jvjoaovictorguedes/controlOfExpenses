import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height;

export default function App() {
  const [value, setValue] = useState('');
  const [expense, setExpense] = useState('');
  const [reason, setReason] = useState('');
  
  return (
    <View style={styles.view}>
      <Text
      style={{fontSize: 60}}
      >
        Despesas
      </Text>
      <View style={styles.container}>
        <Text
          style={styles.text}
          aria-label='Label for Value'
          nativeID='labelValue'>
          Valor:
        </Text>
        <TextInput
          aria-label='input'
          aria-labelledby='labeValue'
          value={value}
          onChangeText={e => setValue(e)}
          style={styles.input}
          inputMode='decimal'
          placeholder='Digite aqui o valor'
          />
      </View>
      <View style={styles.container}>
      <Text
        style={styles.text}
        aria-label='Label for Expense'
        nativeID='labelExpense'>
          Despesa:
      </Text>
      <TextInput
        aria-label='input'
        aria-aria-labelledby='labelExpense'
        value={expense}
        onChangeText={e => setExpense(e)}
        style={styles.input}
        inputMode='text'
        placeholder='Insira sua despesa' />
      </View>
      <View style={styles.container}>
      <Text
        style={styles.text}
        aria-label='Label for Reason'
        nativeID='labelReason'>
          Motivo:
      </Text>
      <TextInput
        aria-label='input'
        aria-aria-labelledby='labelReason'
        value={reason}
        onChangeText={e => setReason(e)}
        style={styles.input}
        inputMode='text'
        placeholder='Insira um motivo' />
      </View>
      <Button title='Inserir Despesa'></Button>
      <View style={styles.container}>
        <Text
          style={styles.text}
          aria-label='Label for Date Initial'
          nativeID='labelDateInitial'>
            Data inicial:
        </Text>
        <TextInput
          aria-label='input'
          aria-aria-labelledby='labelDateInitial'
          value={reason}
          onChangeText={e => setReason(e)}
          style={styles.input}
          inputMode='text'
          placeholder='Data inicial' />
        <Text
          style={styles.text}
          aria-label='Label for Date Final'
          nativeID='labelDateFinal'>
            Data final:
        </Text>
        <TextInput
          aria-label='input'
          aria-aria-labelledby='labelDateFinal'
          value={reason}
          onChangeText={e => setReason(e)}
          style={styles.input}
          inputMode='text'
          placeholder='Data final' />
      </View>
      <Button title='Gerar Relatório'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#2B70E4',
    width: width,
    height: height,
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    color: 'black',
    marginBottom: 10,
    marginTop: 10,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    borderRadius: 15,
    flex: 1,
    marginRight: 5
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 8,
    marginRight: 10,
  }
});
