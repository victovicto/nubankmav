import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MAV3({ irAjuda }: { irAjuda: () => void }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Destaques</Text>
        <TouchableOpacity onPress={irAjuda}>
          <Ionicons name="help-circle-outline" size={26} color="#810AD0" />
        </TouchableOpacity>
      </View>

      <View style={styles.promoCard}>
        <Text style={styles.promoText}>Lançamento dos tops esportivos da Nike</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x150.png?text=Nike+Promo' }}
          style={styles.promoImage}
        />
      </View>

      <Text style={styles.sectionTitle}>Tem de tudo</Text>
      <View style={styles.storeCard}>
        <Text style={styles.storeName}>Shopee</Text>
        <Text style={styles.discount}>80% OFF</Text>
      </View>
      <View style={styles.storeCard}>
        <Text style={styles.storeName}>Magazine Luiza</Text>
        <Text style={styles.discount}>R$99 OFF</Text>
      </View>
    </ScrollView>
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
  promoCard: {
    backgroundColor: '#F0F1F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  promoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  promoImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#810AD0',
    marginBottom: 10,
  },
  storeCard: {
    backgroundColor: '#F0F1F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  storeName: {
    fontSize: 16,
    color: '#6F6F6F',
  },
  discount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});