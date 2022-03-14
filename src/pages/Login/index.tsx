import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../../App';
import {useAlert} from '../../contexts/alert';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8257e5',
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginVertical: 16,
  },
});

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<Props> = ({navigation}) => {
  const {alert} = useAlert();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home da aplicação</Text>

      <Button
        color="lightgray"
        title="Fazer login"
        onPress={() => {
          alert({
            title: 'Sucesso!',
            message: 'Você está logado!',
            cb: () => navigation.navigate('Profile'),
          });
        }}
      />
    </View>
  );
};

export default Login;
