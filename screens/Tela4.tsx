import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MAV4({ voltar }: { voltar: () => void }) {
  const [busca, setBusca] = useState('');

  const renderResultado = () => {
    const query = busca.toLowerCase();
    if (query.includes('novidades')) return <Resultado texto="Confira as novidades do app" />;
    if (query.includes('conta')) return <Resultado texto="Como abrir ou fechar sua conta" />;
    if (query.includes('pagar')) return <Resultado texto="Saiba como pagar sua fatura" />;
    return null;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltarBtn} onPress={voltar}>
        <Ionicons name="arrow-back" size={24} color="#810AD0" />
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Como podemos te ajudar?</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Buscar ajuda..."
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      {renderResultado()}
    </View>
  );
}

function Resultado({ texto }: { texto: string }) {
  return (
    <View style={styles.resultadoCard}>
      <Text style={styles.resultadoTexto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  voltarBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  voltarTexto: {
    color: '#810AD0',
    fontSize: 16,
    marginLeft: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#810AD0',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  resultadoCard: {
    backgroundColor: '#F0F1F5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  resultadoTexto: {
    fontSize: 16,
    color: '#333',
  },
});
