import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../../App';

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

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home da aplicação</Text>

      <Button
        color="lightgray"
        title="Ver perfil"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default Home;
