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
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme/colors";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const [priceRange, setPriceRange] = useState({ min: 2500, max: 5000 });
  const [selectedPlace, setSelectedPlace] = useState("Any");
  const [selectedBedrooms, setSelectedBedrooms] = useState("Any");
  const [selectedBeds, setSelectedBeds] = useState("Any");
  const [selectedBathrooms, setSelectedBathrooms] = useState("Any");
  const [amenities, setAmenities] = useState({
    wifi: false,
    kitchen: false,
    washer: false,
    parking: false,
  });
  const [allowPets, setAllowPets] = useState(false);
  const [nearbyPlaces, setNearbyPlaces] = useState({
    university: false,
    hospital: false,
  });

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

  const priceRanges = [
    { label: "Below ₱3,000", value: "0-3000" },
    { label: "₱3,000 - ₱5,000", value: "3000-5000" },
    { label: "₱5,000 - ₱8,000", value: "5000-8000" },
    { label: "Above ₱8,000", value: "8000+" },
  ];

  const roomTypes = [
    { label: "Studio Type", value: "studio" },
    { label: "1 Bedroom", value: "1br" },
    { label: "2 Bedrooms", value: "2br" },
    { label: "Dormitory", value: "dorm" },
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../public/images/room1.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={[styles.welcomeText, { color: "#fff" }]}>
                Welcome Back!
              </Text>
              <TouchableOpacity
                style={styles.filterButton}
                onPress={() => setShowFilterModal(true)}
              >
                <Ionicons name="options" size={24} color="black" />
              </TouchableOpacity>
            </View>

            {/* Location */}
            <View style={styles.locationContainer}>
              <Ionicons name="location" size={20} color="#fff" />
              <Text style={[styles.locationText, { color: "#fff" }]}>
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

      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showFilterModal}
        onRequestClose={() => setShowFilterModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter Options</Text>
              <TouchableOpacity
                onPress={() => setShowFilterModal(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            {/* Price Range Section */}
            <View style={styles.filterSection}>
              <Text style={styles.filterTitle}>Price Range</Text>
              <View style={styles.optionsContainer}>
                {priceRanges.map((range, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.filterOption,
                      selectedPriceRange === range.value &&
                        styles.filterOptionSelected,
                    ]}
                    onPress={() => setSelectedPriceRange(range.value)}
                  >
                    <Text
                      style={[
                        styles.filterOptionText,
                        selectedPriceRange === range.value &&
                          styles.filterOptionTextSelected,
                      ]}
                    >
                      {range.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Room Type Section */}
            <View style={styles.filterSection}>
              <Text style={styles.filterTitle}>Room Type</Text>
              <View style={styles.optionsContainer}>
                {roomTypes.map((type, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.filterOption,
                      selectedType === type.value &&
                        styles.filterOptionSelected,
                    ]}
                    onPress={() => setSelectedType(type.value)}
                  >
                    <Text
                      style={[
                        styles.filterOptionText,
                        selectedType === type.value &&
                          styles.filterOptionTextSelected,
                      ]}
                    >
                      {type.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={() => {
                  setSelectedPriceRange(null);
                  setSelectedType(null);
                }}
              >
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => {
                  // Apply filters logic here
                  setShowFilterModal(false);
                }}
              >
                <Text style={styles.applyButtonText}>Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    width: "100%",
    height: 250,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "100%",
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
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: "70%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  closeButton: {
    padding: 5,
  },
  filterSection: {
    marginBottom: 24,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  filterOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    backgroundColor: "#F2F2F7",
    marginBottom: 8,
    marginRight: 8,
  },
  filterOptionSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterOptionText: {
    color: "#666",
    fontSize: 14,
  },
  filterOptionTextSelected: {
    color: "#FFF",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    paddingTop: 20,
  },
  resetButton: {
    flex: 1,
    paddingVertical: 15,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: "center",
  },
  resetButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "600",
  },
  applyButton: {
    flex: 2,
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default HomeScreen;
