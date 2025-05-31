import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MAV2({ irAjuda }: { irAjuda: () => void }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8A05BE" />
      
      {/* Header roxo */}
      <View style={styles.header}>
        <View style={styles.topRow}>
          {/* Ícone do usuário movido para o primeiro lugar */}
          <View style={styles.profileIcon}>
            <Text style={styles.profileInitial}>G</Text>
          </View>
          
          {/* Ícones do header com o terceiro ícone adicionado */}
          <View style={styles.headerButtons}>
            <TouchableOpacity onPress={irAjuda} style={styles.headerButton}>
              <Ionicons name="help-circle-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="mail-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Conteúdo branco */}
      <View style={styles.content}>
        <Text style={styles.title}>Acompanhe seu dinheiro</Text>
        
        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Cards de investimentos */}
          <View style={styles.investmentSection}>
            <TouchableOpacity style={styles.investmentCard}>
              <View style={styles.cardContent}>
                <View style={styles.cardIcon}>
                  <Ionicons name="wallet-outline" size={20} color="#8A05BE" />
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardLabel}>Caixinha</Text>
                  <Text style={styles.cardValue}>R$ 150,00</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.investmentCard}>
              <View style={styles.cardContent}>
                <View style={styles.cardIcon}>
                  <Ionicons name="trending-up-outline" size={20} color="#8A05BE" />
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardLabel}>Investimentos</Text>
                  <Text style={styles.cardValue}>R$ 320,00</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.investmentCard}>
              <View style={styles.cardContent}>
                <View style={styles.cardIcon}>
                  <Ionicons name="logo-bitcoin" size={20} color="#8A05BE" />
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardLabel}>Cripto</Text>
                  <Text style={styles.cardValue}>R$ 75,40</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Seção Seguros */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Seguros</Text>
            
            <TouchableOpacity style={styles.insuranceCard}>
              <View style={styles.cardContent}>
                <View style={styles.cardIcon}>
                  <Ionicons name="shield-checkmark-outline" size={20} color="#8A05BE" />
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardLabel}>Seguro de vida</Text>
                  <Text style={styles.cardSubtitle}>Conheça</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.insuranceCard}>
              <View style={styles.cardContent}>
                <View style={styles.cardIcon}>
                  <Ionicons name="phone-portrait-outline" size={20} color="#8A05BE" />
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardLabel}>Seguro de celular</Text>
                  <Text style={styles.cardSubtitle}>Conheça</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
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
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitial: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    padding: 4,
    marginLeft: 12,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
  },
  scrollContent: {
    flex: 1,
  },
  investmentSection: {
    marginBottom: 32,
  },
  investmentCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  cardInfo: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 2,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
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
  insuranceCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});