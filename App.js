// App.js - Calculatrice
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image
} from 'react-native';

export default function CalculatriceGirly() {
  // ===============================
  // ÉTATS DE LA CALCULATRICE
  // ===============================
  const [nombre1, setNombre1] = useState('');
  const [nombre2, setNombre2] = useState('');
  const [operateur, setOperateur] = useState('');
  const [resultat, setResultat] = useState('');
  const [focusChamp, setFocusChamp] = useState('');

  // ===============================
  // FONCTIONS DE GESTION
  // ===============================
  const handleSelectOperateur = (op) => {
    setOperateur(op);
  };

  const handleCalculer = () => {
    if (!nombre1 || !nombre2) {
      Alert.alert('Oups !', 'Il faut remplir les deux nombres 💕');
      return;
    }

    if (!operateur) {
      Alert.alert('Oups !', 'Choisis une opération ✨');
      return;
    }

    const num1 = parseFloat(nombre1);
    const num2 = parseFloat(nombre2);

    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert('Oups !', 'Ce ne sont pas des nombres valides 🎀');
      return;
    }

    let calcul;
    switch (operateur) {
      case '+':
        calcul = num1 + num2;
        break;
      case '-':
        calcul = num1 - num2;
        break;
      case '*':
        calcul = num1 * num2;
        break;
      default:
        calcul = 0;
    }

    setResultat(calcul.toString());
  };

  const handleClear = () => {
    setNombre1('');
    setNombre2('');
    setOperateur('');
    setResultat('');
    setFocusChamp('');
  };

  // =======================
  // RENDU DE L'INTERFACE 
  // =======================
  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.title}>🧮 Ma Calculatrice</Text>
      </View>

      {/* Premier nombre */}
      <Text style={styles.label}>🌸 Premier nombre :</Text>
      <TextInput
        style={[
          styles.input, 
          focusChamp === 'nombre1' && styles.inputFocus
        ]}
        placeholder="Entre le premier nombre..."
        placeholderTextColor="#d8a1c4"
        keyboardType="numeric"
        value={nombre1}
        onChangeText={setNombre1}
        onFocus={() => setFocusChamp('nombre1')}
        onBlur={() => setFocusChamp('')}
      />

      {/* Deuxième nombre */}
      <Text style={styles.label}>🌸 Deuxième nombre :</Text>
      <TextInput
        style={[
          styles.input, 
          focusChamp === 'nombre2' && styles.inputFocus
        ]}
        placeholder="Entre le deuxième nombre..."
        placeholderTextColor="#d8a1c4"
        keyboardType="numeric"
        value={nombre2}
        onChangeText={setNombre2}
        onFocus={() => setFocusChamp('nombre2')}
        onBlur={() => setFocusChamp('')}
      />

      {/* Sélection d'opérateur */}
      <Text style={styles.label}>✨ Choisis ton opération :</Text>
      <View style={styles.operateursContainer}>
        <TouchableOpacity
          style={[
            styles.operateurBtn,
            styles.operateurAddition,
            operateur === '+' && styles.operateurSelected
          ]}
          onPress={() => handleSelectOperateur('+')}
        >
          <Text style={styles.operateurText}>+</Text>
          <Text style={styles.operateurLabel}>Addition</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.operateurBtn,
            styles.operateurSoustraction,
            operateur === '-' && styles.operateurSelected
          ]}
          onPress={() => handleSelectOperateur('-')}
        >
          <Text style={styles.operateurText}>-</Text>
          <Text style={styles.operateurLabel}>Soustraction</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.operateurBtn,
            styles.operateurMultiplication,
            operateur === '*' && styles.operateurSelected
          ]}
          onPress={() => handleSelectOperateur('*')}
        >
          <Text style={styles.operateurText}>×</Text>
          <Text style={styles.operateurLabel}>Multiplication</Text>
        </TouchableOpacity>
      </View>

      {/* Affichage de l'opération sélectionnée */}
      {operateur && (
        <View style={styles.operationContainer}>
          <Text style={styles.operationAffichee}>
            💫 Opération choisie : {operateur}
          </Text>
        </View>
      )}

      {/* Bouton Calculer */}
      <TouchableOpacity
        style={styles.calculerBtn}
        onPress={handleCalculer}
      >
        <Text style={styles.calculerText}> Calculer </Text>
      </TouchableOpacity>

      {/* Affichage du résultat avec effet spécial */}
      {resultat !== '' && (
        <View style={styles.resultatContainer}>
          <Text style={styles.resultatLabel}>✨ Le résultat est :</Text>
          <Text style={styles.resultatValeur}>{resultat}</Text>
          <Text style={styles.resultatEmoji}>🎉</Text>
        </View>
      )}

      {/* Bouton Clear */}
      <TouchableOpacity
        style={styles.clearBtn}
        onPress={handleClear}
      >
        <Text style={styles.clearText}> Tout effacer</Text>
      </TouchableOpacity>

      {/* Décorations */}
      <View style={styles.decorationContainer}>
        <Text style={styles.decorationText}>⭐️ • 🌸 • 💫 • 🎀 • ✨</Text>
      </View>
    </ScrollView>
  );
}

// ==========
// STYLES 
// ==========
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: '#fff5f7', // Rose très pale
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#f9a8d4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ec4899',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#f472b6',
    fontStyle: 'italic',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#db2777',
    marginLeft: 5,
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#fbcfe8',
    padding: 16,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: 'white',
    fontSize: 16,
    color: '#be185d',
    shadowColor: '#f9a8d4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  inputFocus: {
    borderColor: '#ec4899',
    backgroundColor: '#fdf2f8',
    transform: [{ scale: 1.02 }],
  },
  operateursContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  operateurBtn: {
    flex: 1,
    marginHorizontal: 6,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  operateurAddition: {
    backgroundColor: '#fce7f3', // Rose pale
  },
  operateurSoustraction: {
    backgroundColor: '#f0f9ff', // Bleu pale
  },
  operateurMultiplication: {
    backgroundColor: '#fef7ff', // Violet pale
  },
  operateurSelected: {
    transform: [{ scale: 1.08 }],
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  operateurText: {
    color: '#db2777',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  operateurLabel: {
    color: '#be185d',
    fontSize: 12,
    fontWeight: '500',
  },
  operationContainer: {
    backgroundColor: '#fdf2f8',
    padding: 12,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#fbcfe8',
    borderStyle: 'dashed',
  },
  operationAffichee: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ec4899',
    fontWeight: '600',
  },
  calculerBtn: {
    backgroundColor: '#ec4899',
    padding: 18,
    borderRadius: 25,
    marginBottom: 25,
    alignItems: 'center',
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  calculerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultatContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#f9a8d4',
    marginBottom: 25,
    alignItems: 'center',
    shadowColor: '#f9a8d4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  resultatLabel: {
    fontSize: 18,
    color: '#be185d',
    marginBottom: 8,
    fontWeight: '500',
  },
  resultatValeur: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ec4899',
    marginBottom: 5,
  },
  resultatEmoji: {
    fontSize: 24,
  },
  clearBtn: {
    backgroundColor: '#fbcfe8',
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#f9a8d4',
  },
  clearText: {
    color: '#db2777',
    fontSize: 16,
    fontWeight: '600',
  },
  decorationContainer: {
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 15,
  },
  decorationText: {
    fontSize: 18,
    color: '#f9a8d4',
    letterSpacing: 5,
  },
});