import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../../App';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fd951f',
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginVertical: 16,
  },
});

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const Settings: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configurações</Text>

      <Button
        color="white"
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Settings;
