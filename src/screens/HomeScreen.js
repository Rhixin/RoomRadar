import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../theme/colors';
const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");

  const featuredRooms = [
    {
      id: 1,
      name: "Dandelions Apartment",
      location: "Langaran, Cebu City",
      price: 5500,
      image: require("../public/images/room1.png"),
      type: "2 bedroom",
    },
    {
      id: 2,
      name: "Studio Type Room",
      location: "Cebu City",
      price: 4500,
      image: require("../public/images/room1.png"),
      type: "Studio",
    },
  ];

  const nearbyRooms = [
    {
      id: 3,
      name: "Victor Village",
      location: "Tres De Abril, Labangon",
      price: 2500,
      image: require("../public/images/room1.png"),
      rating: 4.9,
    },
    {
      id: 4,
      name: "Balay ni Mamu",
      location: "Punta, Cebu",
      price: 3100,
      image: require("../public/images/room1.png"),
      rating: 4.8,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../public/images/room1.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={[styles.welcomeText, { color: '#fff' }]}>
              Welcome Back!
            </Text>
            <TouchableOpacity style={styles.filterButton}>
              <Ionicons name="options" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Location */}
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={20} color="#fff" />
            <Text style={[styles.locationText, { color: '#fff' }]}>
              Near CIT University
            </Text>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={20} color="#666" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search for rooms..."
                placeholderTextColor="#666"
                value={searchText}
                onChangeText={setSearchText}
              />
              {searchText.length > 0 && (
                <TouchableOpacity
                  onPress={() => setSearchText("")}
                  style={styles.clearButton}
                >
                  <Ionicons name="close-circle" size={20} color="#666" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* Featured Rooms */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Rooms</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredRooms.map((room) => (
            <TouchableOpacity key={room.id} style={styles.featuredCard}>
              <Image source={room.image} style={styles.featuredImage} />
              <View style={styles.roomTypeTag}>
                <Text style={styles.roomTypeText}>{room.type}</Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.roomName}>{room.name}</Text>
                <View style={styles.locationRow}>
                  <Ionicons name="location" size={16} color="#666" />
                  <Text style={styles.roomLocation}>{room.location}</Text>
                </View>
                <Text style={styles.price}>₱ {room.price}/month</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Nearby Rooms */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle2}>Explore Nearby Rooms</Text>
        {nearbyRooms.map((room) => (
          <TouchableOpacity key={room.id} style={styles.nearbyCard}>
            <Image source={room.image} style={styles.nearbyImage} />
            <View style={styles.nearbyContent}>
              <Text style={styles.roomName}>{room.name}</Text>
              <View style={styles.locationRow}>
                <Text style={styles.rating}>★ {room.rating}</Text>
                <Ionicons name="location" size={16} color="#666" />
                <Text style={styles.roomLocation}>{room.location}</Text>
              </View>
              <Text style={styles.price}>₱ {room.price}/month</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    width: '100%',
    height: 250,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: '100%',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  filterButton: {
    padding: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  locationText: {
    marginLeft: 8,
    fontSize: 16,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
    padding: 5,
  },
  clearButton: {
    padding: 5,
  },
  sectionContainer: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionTitle2: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  viewAllText: {
    color: "#666",
  },
  featuredCard: {
    width: 280,
    marginRight: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eee",
  },
  featuredImage: {
    width: "100%",
    height: 150,
  },
  roomTypeTag: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  roomTypeText: {
    color: "#fff",
    fontSize: 12,
  },
  cardContent: {
    padding: 15,
  },
  roomName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  roomLocation: {
    color: "#666",
    marginLeft: 5,
    fontSize: 14,
  },
  price: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
  nearbyCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  nearbyImage: {
    width: 100,
    height: 100,
  },
  nearbyContent: {
    flex: 1,
    padding: 15,
  },
  rating: {
    color: "#FFD700",
    marginRight: 10,
  },
});

export default HomeScreen;