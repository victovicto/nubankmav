import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MAV1({ irAjuda }: { irAjuda: () => void }) {
  const [mostrarSaldo, setMostrarSaldo] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Olá, Gabriela</Text>
        <TouchableOpacity onPress={irAjuda}>
          <Ionicons name="help-circle-outline" size={26} color="#810AD0" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Conta</Text>
        <Text style={styles.cardValue}>{mostrarSaldo ? 'R$ 1.356,98' : 'R$ #####'}</Text>
        <TouchableOpacity onPress={() => setMostrarSaldo(!mostrarSaldo)}>
          <Ionicons name={mostrarSaldo ? 'eye-off' : 'eye'} size={22} color="#6F6F6F" />
        </TouchableOpacity>
      </View>

      <View style={styles.cardBottom}>
        <Text style={styles.label}>Cartão de crédito</Text>
        <Text style={styles.texto}>Fatura atual R$ 0,00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#810AD0',
  },
  card: {
    backgroundColor: '#F0F1F5',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    color: '#6F6F6F',
    marginBottom: 6,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  cardBottom: {
    backgroundColor: '#F0F1F5',
    borderRadius: 12,
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: '#6F6F6F',
    marginBottom: 4,
  },
  texto: {
    fontSize: 18,
    color: '#000',
  },
});
