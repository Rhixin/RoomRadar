import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import CustomButton from "../components/buttons/CustomButton";
import CustomInput from "../components/inputs/CustomInput";
import useRegisterType from "../store/Register/RegisterTypeStore";
const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Get state and actions from store
  const { registerType, setRegisterType } = useRegisterType();

  const handleRegistration = (type) => {
    setRegisterType(type);
    navigation.navigate("SignUpScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo and Title */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../public/images/roomRadar.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Log in to your Account</Text>
        </View>

        {/* Login Form */}
        <View style={styles.formContainer}>
          <CustomInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            iconName="mail-outline"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <CustomInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            iconName="lock-closed-outline"
            isPassword={true}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <CustomButton
            title="Log In"
            onPress={() => {
              /* Add your login logic here */
            }}
          />
        </View>

        {/* Registration Options */}
        <View style={styles.registrationContainer}>
          <Text style={styles.noAccountText}>Don't have an account?</Text>

          <CustomButton
            title="Register as Tenant"
            onPress={() => handleRegistration('Tenant')}
          />

          <CustomButton
            title="Register as Landlord"
            onPress={() => handleRegistration('Landlord')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#002B6B",
    marginTop: 10,
  },
  formContainer: {
    marginTop: 20,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#002B6B",
    fontSize: 14,
  },
  registrationContainer: {
    marginTop: 20,
  },
  noAccountText: {
    textAlign: "center",
    color: "#4A5568",
    marginBottom: 16,
  },
});

export default LogInScreen;
