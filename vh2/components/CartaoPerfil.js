// Alunos: lucas stoche e victor hugo minchin

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function CartaoPerfil({ nome, profissao, cidade, email }) {

  const enviarEmail = () => {
    Alert.alert(`E-mail enviado para: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.profissao}>{profissao}</Text>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text style={styles.email}>{email}</Text>

      <TouchableOpacity style={styles.botao} onPress={enviarEmail}>
        <Text style={styles.textoBotao}>ENVIAR E-MAIL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Android
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: 'center',
    width: 300,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profissao: {
    fontSize: 16,
    color: '#555',
  },
  cidade: {
    fontSize: 14,
    color: '#777',
  },
  email: {
    fontSize: 14,
    color: '#999',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});