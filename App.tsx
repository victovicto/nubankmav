import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela1 from './screens/Tela1';
import Tela2 from './screens/Tela2';
import Tela3 from './screens/Tela3';
import Tela4 from './screens/Tela4';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MAV" component={MAV} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MAV() {
  const [telaAtual, setTelaAtual] = useState(1);

  const renderTela = () => {
    switch (telaAtual) {
      case 1:
        return <Tela1 irAjuda={() => setTelaAtual(4)} />;
      case 2:
        return <Tela2 irAjuda={() => setTelaAtual(4)} />;
      case 3:
        return <Tela3 irAjuda={() => setTelaAtual(4)} />;
      case 4:
        return <Tela4 voltar={() => setTelaAtual(1)} />;
      default:
        return <Tela1 irAjuda={() => setTelaAtual(4)} />;
    }
  };

  return (
    <>
      {renderTela()}
      {telaAtual !== 4 && <BottomMenu atual={telaAtual} onPress={(i: number) => setTelaAtual(i)} />}
    </>
  );
}

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function BottomMenu({ atual, onPress }: { atual: number; onPress: (i: number) => void }) {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => onPress(1)}>
        <Ionicons name="home" size={28} color={atual === 1 ? '#810AD0' : '#6F6F6F'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(2)}>
        <Ionicons name="bar-chart" size={28} color={atual === 2 ? '#810AD0' : '#6F6F6F'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(3)}>
        <Ionicons name="newspaper" size={28} color={atual === 3 ? '#810AD0' : '#6F6F6F'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#F0F1F5',
    backgroundColor: '#fff',
  },
});
