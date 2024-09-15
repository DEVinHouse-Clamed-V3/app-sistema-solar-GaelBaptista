import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
// Importa o componente Card
import cards from "./cardsData"; // Importa os dados dos cards
import { Card } from "./card";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para ir para o próximo card
  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Função para voltar para o card anterior
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <ImageBackground
      source={{
        uri: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-3-bg.webp",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* Renderiza o Card atual */}
          <Card card={cards[currentIndex]} />

          {/* Controles de navegação */}
          <View style={styles.controlsContainer}>
            <TouchableOpacity
              onPress={handlePrevious}
              disabled={currentIndex === 0}
              style={[
                styles.controlButton,
                currentIndex === 0 && styles.disabledButton,
              ]}
            >
              <Text style={styles.controlButtonText}>Anterior</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNext}
              disabled={currentIndex === cards.length - 1}
              style={[
                styles.controlButton,
                currentIndex === cards.length - 1 && styles.disabledButton,
              ]}
            >
              <Text style={styles.controlButtonText}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  scrollView: {
    alignItems: "center",
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  controlButton: {
    padding: 10,
    backgroundColor: "#cb193f",
    borderRadius: 5,
    alignItems: "center",
    width: "45%",
  },
  disabledButton: {
    backgroundColor: "#999",
  },
  controlButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
