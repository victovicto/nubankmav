import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MAV3({ irAjuda }: { irAjuda: () => void }) {
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
        <Text style={styles.title}>Descontos</Text>
        
        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Cards de desconto com scroll horizontal - mantendo apenas Nike, Spotify e Amazon */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.discountCardsContainer}
            style={styles.discountCardsScroll}
          >
            <TouchableOpacity style={styles.discountCard}>
              <Image 
                source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo.png' }}
                style={styles.brandImage}
                resizeMode="contain"
              />
              <View style={styles.discountInfo}>
                <Text style={styles.discountLabel}>Nike</Text>
                <Text style={styles.discountValue}>até 40% OFF</Text>
                <View style={styles.categoryTag}>
                  <Text style={styles.categoryText}>Esportes</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discountCard}>
             <Image 
              source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/04/Netflix-Logo.png' }}
              style={styles.brandImage}
             resizeMode="contain"
               />
               <View style={styles.discountInfo}>
               <Text style={styles.discountLabel}>Netflix</Text>
               <Text style={styles.discountValue}>1 mês grátis</Text>
               <View style={styles.categoryTag}>
                 <Text style={styles.categoryText}>Streaming</Text>
               </View>
             </View>
           </TouchableOpacity>

            <TouchableOpacity style={styles.discountCard}>
              <Image 
                source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/04/Amazon-Logo.png' }}
                style={styles.brandImage}
                resizeMode="contain"
              />
              <View style={styles.discountInfo}>
                <Text style={styles.discountLabel}>Amazon</Text>
                <Text style={styles.discountValue}>até 50% OFF</Text>
                <View style={styles.categoryTag}>
                  <Text style={styles.categoryText}>Compras</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>

          {/* Seção Categorias */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categorias</Text>
            
            <View style={styles.categoriesGrid}>
              <TouchableOpacity style={styles.categoryCard}>
                <View style={styles.categoryIcon}>
                  <Ionicons name="restaurant-outline" size={24} color="#8A05BE" />
                </View>
                <Text style={styles.categoryLabel}>Alimentação</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.categoryCard}>
                <View style={styles.categoryIcon}>
                  <Ionicons name="fitness-outline" size={24} color="#8A05BE" />
                </View>
                <Text style={styles.categoryLabel}>Esportes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.categoryCard}>
                <View style={styles.categoryIcon}>
                  <Ionicons name="game-controller-outline" size={24} color="#8A05BE" />
                </View>
                <Text style={styles.categoryLabel}>Games</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.categoryCard}>
                <View style={styles.categoryIcon}>
                  <Ionicons name="musical-notes-outline" size={24} color="#8A05BE" />
                </View>
                <Text style={styles.categoryLabel}>Música</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.categoryCard}>
                <View style={styles.categoryIcon}>
                  <Ionicons name="car-outline" size={24} color="#8A05BE" />
                </View>
                <Text style={styles.categoryLabel}>Transporte</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.categoryCard}>
                <View style={styles.categoryIcon}>
                  <Ionicons name="shirt-outline" size={24} color="#8A05BE" />
                </View>
                <Text style={styles.categoryLabel}>Moda</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Seção Ofertas Especiais */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ofertas Especiais</Text>
            
            <TouchableOpacity style={styles.specialOfferCard}>
              <View style={styles.offerContent}>
                <View style={styles.offerIcon}>
                  <Ionicons name="gift-outline" size={24} color="#8A05BE" />
                </View>
                <View style={styles.offerInfo}>
                  <Text style={styles.offerLabel}>Cashback Especial</Text>
                  <Text style={styles.offerSubtitle}>Ganhe até 10% de volta em compras</Text>
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
  discountCardsScroll: {
    marginBottom: 32,
  },
  discountCardsContainer: {
    paddingRight: 20,
  },
  discountCard: {
    width: 180,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    alignItems: 'center',
  },
  brandImage: {
    width: 80,
    height: 50,
    marginBottom: 12,
  },
  discountInfo: {
    alignItems: 'center',
    width: '100%',
  },
  discountLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  discountValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#8A05BE',
    marginBottom: 8,
  },
  categoryTag: {
    backgroundColor: '#E8D5F2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    color: '#8A05BE',
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
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  specialOfferCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  offerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  offerInfo: {
    flex: 1,
  },
  offerLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 2,
  },
  offerSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
  },
});