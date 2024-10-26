import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import HeaderText from "../components/headers/HeaderText";
import CustomInput from "../components/inputs/CustomInput";
import CustomButton from "../components/buttons/CustomButton";
import useRegisterType from "../store/Register/RegisterTypeStore";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { registerType, setRegisterType } = useRegisterType();

  const handleSocialAuth = (provider) => {
    // Implement social authentication logic here
    console.log(`Authenticating with ${provider}`);
  };

  const formatRegisterType = (type) => {
    if (!type) return "User"; // Default fallback
    return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  };

  const title = `Create ${formatRegisterType(registerType)} Account`;

  // Determine button title based on register type
  const buttonTitle = registerType === "Landlord" ? "Next" : "Sign Up";

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            <View style={styles.innerContent}>
              <View style={styles.textContainer}>
                <HeaderText
                  title={title}
                  subtitle="Fill your information below or register with your social account"
                />
              </View>

              <View style={styles.formContainer}>
                <CustomInput
                  label="Name"
                  value={name}
                  onChangeText={setName}
                  placeholder="Enter your name"
                  autoCapitalize="none"
                />
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

                <CustomButton
                  title={buttonTitle}
                  onPress={() => {
                    console.log("Sign up attempt with:", {
                      name,
                      email,
                      password,
                      registerType,
                    });
                  }}
                />
                <View style={styles.dividerContainer}>
                  <View style={styles.divider} />
                  <Text style={styles.dividerText}>Or Continue With</Text>
                  <View style={styles.divider} />
                </View>

                <View style={styles.socialButtonsContainer}>
                  <TouchableOpacity
                    style={styles.socialButton}
                    onPress={() => handleSocialAuth("facebook")}
                  >
                    <Image
                      source={require("../public/icons/fb.png")}
                      style={styles.socialIcon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.socialButton}
                    onPress={() => handleSocialAuth("google")}
                  >
                    <Image
                      source={require("../public/icons/google.png")}
                      style={styles.socialIcon}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.loginContainer}>
                  <Text style={styles.loginText}>
                    Already have an account?{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("LogInScreen")}
                  >
                    <Text style={styles.loginLink}>Log In.</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    minHeight: "100%",
  },
  innerContent: {
    maxWidth: 400,
    width: "100%",
    alignSelf: "center",
  },
  textContainer: {
    marginBottom: 24,
    alignItems: "center",
  },
  formContainer: {
    gap: 16,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E8E8E8",
  },
  dividerText: {
    paddingHorizontal: 16,
    color: "#666",
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 24,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    color: "#666",
    fontSize: 14,
  },
  loginLink: {
    color: "#000080",
    fontSize: 14,
    fontWeight: "bold",
  },
});
