import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MAV1({ irAjuda }: { irAjuda: () => void }) {
  const [mostrarSaldo, setMostrarSaldo] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8A05BE" />
      
      {/* Header roxo */}
      <View style={styles.header}>
        <View style={styles.topRow}>
        
          <View style={styles.leftSection}>
            <View style={styles.profileIcon}>
              <Text style={styles.profileInitial}>G</Text>
            </View>
            <View style={styles.greetingContainer}>
              
            </View>
          </View>
          
          {/* Ícones do header com o terceiro ícone adicionado */}
          <View style={styles.headerButtons}>
            <TouchableOpacity onPress={() => setMostrarSaldo(!mostrarSaldo)} style={styles.headerButton}>
              <Ionicons 
                name={mostrarSaldo ? 'eye-off-outline' : 'eye-outline'} 
                size={24} 
                color="#FFFFFF" 
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={irAjuda} style={styles.headerButton}>
              <Ionicons name="help-circle-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="mail-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity> 
            
          </View>
        </View>
        
        {/* Linha de espaço entre saudação e ícones */}
        <View style={styles.spacer} />
        
        <Text style={styles.greeting}>Olá, Gabriel Araújo</Text>
      </View>

      {/* Conteúdo branco */}
      <View style={styles.content}>
        {/* Card da conta */}
        <View style={styles.accountCard}>
          <View style={styles.accountHeader}>
            <Text style={styles.accountLabel}>Conta</Text>
            <TouchableOpacity>
              <Ionicons 
                name="chevron-forward" 
                size={20} 
                color="#8E8E93" 
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.accountValue}>
            {mostrarSaldo ? 'R$ 1.356,98' : 'R$ ••••••'}
          </Text>
        </View>

        {/* Ações rápidas com scroll horizontal - espaço ainda mais reduzido */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.quickActionsContainer}
          style={styles.quickActionsScroll}
        >
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Ionicons name="arrow-up" size={24} color="#8A05BE" />
            </View>
            <Text style={styles.actionText}>Pix</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Ionicons name="card-outline" size={24} color="#8A05BE" />
            </View>
            <Text style={styles.actionText}>Pagar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Ionicons name="repeat-outline" size={24} color="#8A05BE" />
            </View>
            <Text style={styles.actionText}>Transferir</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Ionicons name="phone-portrait-outline" size={24} color="#8A05BE" />
            </View>
            <Text style={styles.actionText}>Recarga</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Ionicons name="wallet-outline" size={24} color="#8A05BE" />
            </View>
            <Text style={styles.actionText}>Investir</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Card do cartão */}
        <View style={styles.creditCard}>
          <View style={styles.creditCardHeader}>
            <Text style={styles.creditCardTitle}>Cartão de crédito</Text>
            <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
          </View>
          <Text style={styles.creditCardValue}>Fatura atual R$ 0,00</Text>
          <Text style={styles.creditCardLimit}>Limite disponível de R$ 5.000</Text>
        </View>

        {/* Seção Meus cartões */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meus cartões</Text>
          <TouchableOpacity style={styles.cardItem}>
            <Ionicons name="card" size={20} color="#8A05BE" />
            <Text style={styles.cardItemText}>Cartão de crédito</Text>
            <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
          </TouchableOpacity>
        </View>
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
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  profileInitial: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  greetingContainer: {
    justifyContent: 'center',
  },
  spacer: {
    height: 16, // Linha de espaço entre saudação e ícones
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 18,
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
  accountCard: {
    marginBottom: 24,
  },
  accountHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  accountLabel: {
    fontSize: 16,
    color: '#8E8E93',
    fontWeight: '500',
  },
  accountValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
  },
  quickActionsScroll: {
    marginBottom: 8, // Reduzido de 16 para 8 para juntar mais com o card do cartão
  },
  quickActionsContainer: {
    paddingRight: 20,
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 24,
    width: 80,
  },
  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F5F5F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '500',
    textAlign: 'center',
  },
  creditCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  creditCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  creditCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  creditCardValue: {
    fontSize: 16,
    color: '#00AA00',
    fontWeight: '600',
    marginBottom: 4,
  },
  creditCardLimit: {
    fontSize: 14,
    color: '#8E8E93',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
  },
  cardItemText: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    marginLeft: 12,
    fontWeight: '500',
  },
});