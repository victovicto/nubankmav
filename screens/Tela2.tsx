import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MAV2({ irAjuda }: { irAjuda: () => void }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Acompanhe seu dinheiro</Text>
        <TouchableOpacity onPress={irAjuda}>
          <Ionicons name="help-circle-outline" size={26} color="#810AD0" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Caixinha</Text>
        <Text style={styles.cardValue}>R$ 150,00</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Investimentos</Text>
        <Text style={styles.cardValue}>R$ 320,00</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Cripto</Text>
        <Text style={styles.cardValue}>R$ 75,40</Text>
      </View>

      <Text style={styles.sectionTitle}>Seguros</Text>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Seguro de vida</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Seguro de celular</Text>
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
    padding: 16,
    marginBottom: 12,
  },
  cardLabel: {
    fontSize: 16,
    color: '#6F6F6F',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#810AD0',
    marginTop: 20,
    marginBottom: 10,
  },
});
