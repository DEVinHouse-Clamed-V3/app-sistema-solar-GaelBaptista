// Card.js
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const Card = ({ card }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.redSquare}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405214/starwars/logo.webp",
          }}
          style={styles.logo}
        />
      </View>

      <View style={styles.cardBody}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: card.img }} style={styles.productImage} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.productTitle}>{card.name}</Text>
          <Text style={styles.productPrice}>{card.price}</Text>

          <View style={styles.sizeContainer}>
            <Text style={styles.sizeLabel}>HELMET SIZE</Text>
            <View style={styles.sizes}>
              {["S", "M", "L", "XL"].map((size) => (
                <TouchableOpacity
                  key={size}
                  style={size === card.size ? styles.selectedSize : styles.size}
                >
                  <Text
                    style={
                      size === card.size
                        ? styles.selectedSizeText
                        : styles.sizeText
                    }
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.durabilityContainer}>
            <Text style={styles.durabilityLabel}>DURABILITY RATE</Text>
            <View style={styles.durabilityBar}>
              <View
                style={[
                  styles.durabilityFill,
                  { width: `${card.durability}%` },
                ]}
              />
              <Text style={styles.durabilityText}>{card.durability}%</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>ADD TO CART</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addToWishlistButton}>
            <Text style={styles.addToWishlistText}>ADD TO WISHLIST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  redSquare: {
    height: 150,
    backgroundColor: "#cb193f",
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
    borderRadius: 20,
  },
  logo: {
    width: 200,
    height: 80,
    opacity: 0.1,
    resizeMode: "contain",
    position: "absolute",
    top: 20,
  },
  cardBody: {
    backgroundColor: "#121212",
    width: 370,
    borderRadius: 20,
    marginTop: -100,
    paddingBottom: 20,
    paddingTop: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  imageContainer: {
    alignItems: "center",
  },
  productImage: {
    width: 250,
    height: 250,
    zIndex: 1,
    marginTop: -100,
  },
  detailsContainer: {
    alignItems: "center",
  },
  productTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },
  sizeContainer: {
    width: "80%",
    marginBottom: 20,
  },
  sizeLabel: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  size: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedSize: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#cb193f",
    borderWidth: 2,
    borderRadius: 5,
  },
  sizeText: {
    color: "#fff",
  },
  selectedSizeText: {
    color: "#cb193f",
  },
  durabilityContainer: {
    width: "80%",
    marginBottom: 20,
    alignItems: "center",
  },
  durabilityLabel: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  durabilityBar: {
    width: "100%",
    height: 30,
    backgroundColor: "#333",
    borderRadius: 5,
    justifyContent: "center",
  },
  durabilityFill: {
    height: "100%",
    backgroundColor: "#cb193f",
    borderRadius: 5,
  },
  durabilityText: {
    position: "absolute",
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  addToCartButton: {
    width: "80%",
    paddingVertical: 15,
    backgroundColor: "#cb193f",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  addToCartText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  addToWishlistButton: {
    width: "80%",
    paddingVertical: 15,
    backgroundColor: "#333",
    borderRadius: 5,
    alignItems: "center",
  },
  addToWishlistText: {
    color: "#fff",
    fontSize: 16,
  },
});
