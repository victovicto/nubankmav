import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MAV4({ voltar }: { voltar: () => void }) {
  const [busca, setBusca] = useState('');
  const [avaliacaoSelecionada, setAvaliacaoSelecionada] = useState<number | null>(null);

  const renderResultado = () => {
    const query = busca.toLowerCase();
    if (query.includes('novidades')) return <Resultado texto="Confira as novidades do app" />;
    if (query.includes('conta')) return <Resultado texto="Como abrir ou fechar sua conta" />;
    if (query.includes('pagar fatura')) return <Resultado texto="Saiba como pagar sua fatura" />;
    return null;
  };

  const handleAvaliacao = (nota: number) => {
    setAvaliacaoSelecionada(nota);
  };

  const getIconeAvaliacao = (posicao: number) => {
    if (posicao === 1) return "sad-outline";
    if (posicao === 2) return "heart-dislike-outline";
    if (posicao === 3) return "thumbs-up-outline";
    return "happy-outline";
  };

  const getCorIcone = (posicao: number) => {
    if (avaliacaoSelecionada === posicao) return "#8A05BE";
    return "#8E8E93";
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8A05BE" />
      
      {/* Header roxo */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={voltar}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Me Ajuda</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Conteúdo branco */}
      <View style={styles.content}>
        <Text style={styles.subtitle}>Como podemos te ajudar?</Text>

        {/* Barra de pesquisa */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#8E8E93" />
          <TextInput
            style={styles.searchInput}
            placeholder="Qual é a sua dúvida?"
            placeholderTextColor="#8E8E93"
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        {/* Resultado da busca */}
        {renderResultado()}

        {/* Seções de ajuda */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Avaliação */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Como você avalia nosso atendimento?</Text>
            <View style={styles.avaliacaoContainer}>
              {[1, 2, 3, 4].map((nota) => (
                <TouchableOpacity
                  key={nota}
                  style={[
                    styles.avaliacaoButton,
                    avaliacaoSelecionada === nota && styles.avaliacaoButtonSelected
                  ]}
                  onPress={() => handleAvaliacao(nota)}
                >
                  <Ionicons 
                    name={getIconeAvaliacao(nota)} 
                    size={28} 
                    color={getCorIcone(nota)} 
                  />
                </TouchableOpacity>
              ))}
            </View>
            {avaliacaoSelecionada && (
              <Text style={styles.avaliacaoTexto}>
                Obrigado pela sua avaliação!
              </Text>
            )}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categorias</Text>
            
            <TouchableOpacity style={styles.categoryCard}>
              <View style={styles.categoryContent}>
                <View style={styles.categoryIcon}>
                  <Ionicons name="person-outline" size={24} color="#8A05BE" />
                </View>
                <Text style={styles.categoryTitle}>Conta e Cartão</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <View style={styles.categoryContent}>
                <View style={styles.categoryIcon}>
                  <Ionicons name="swap-horizontal-outline" size={24} color="#8A05BE" />
                </View>
                <Text style={styles.categoryTitle}>Pix e Transferências</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <View style={styles.categoryContent}>
                <View style={styles.categoryIcon}>
                  <Ionicons name="trending-up-outline" size={24} color="#8A05BE" />
                </View>
                <Text style={styles.categoryTitle}>Investimentos</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <View style={styles.categoryContent}>
                <View style={styles.categoryIcon}>
                  <Ionicons name="shield-checkmark-outline" size={24} color="#8A05BE" />
                </View>
                <Text style={styles.categoryTitle}>Seguros</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

function Resultado({ texto }: { texto: string }) {
  return (
    <TouchableOpacity style={styles.resultCard}>
      <View style={styles.resultContent}>
        <View style={styles.resultIcon}>
          <Ionicons name="help-circle-outline" size={20} color="#8A05BE" />
        </View>
        <Text style={styles.resultText}>{texto}</Text>
        <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A05BE',
  },
  header: {
    backgroundColor: '#8A05BE',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 4,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  placeholder: {
    width: 32,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    marginLeft: 12,
  },
  resultCard: {
    backgroundColor: '#F0F8FF',
    borderRadius: 12,
    marginBottom: 24,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  resultContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultIcon: {
    marginRight: 12,
  },
  resultText: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
  },
  avaliacaoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  avaliacaoButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  avaliacaoButtonSelected: {
    backgroundColor: '#F0E6FF',
    borderWidth: 2,
    borderColor: '#8A05BE',
  },
  avaliacaoTexto: {
    textAlign: 'center',
    fontSize: 16,
    color: '#8A05BE',
    fontWeight: '500',
    marginTop: 12,
  },
  categoryCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
});