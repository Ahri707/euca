import { Ionicons } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";
import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./index_styles";

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [submitAttempted, setSubmitAttempted] = useState<boolean>(false);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá!</Text>
      <Text style={styles.subtitle}>Bem vindo</Text>
      <Text style={styles.waitingText}>Estavamos esperando por você! ;)</Text>

      {/* Campo Email */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu  E-mail"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={(text) => {
          // atualiza o valor; se já tentou submeter, revalida para limpar o erro quando o usuario corrigir
          setEmail(text);
          if (submitAttempted) {
            if (validateEmail(text)) setEmailError("");
          }
        }}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {submitAttempted && emailError.length > 0 && (
        <Text style={styles.errorText}>{emailError}</Text>
      )}

      {/* Campo Senha */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Digite sua senha"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons 
            name={showPassword ? "eye-off" : "eye"} 
            size={22} 
            color="#aaa" 
          />
        </TouchableOpacity>
      </View>

      {/* Caixinha pra lembrar do login do usuario */}
      <View style={styles.row}>
        <View style={styles.checkboxRow}>
          <CheckBox
            value={remember}
            onValueChange={setRemember}
            color={remember ? "#b3ff33" : "#aaa"}
          />
          <Text style={styles.checkboxText}>Lembre-se de mim</Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push('/auth/retriv_pswrd')}
          accessibilityRole="button"
          activeOpacity={0.7}
        >
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Entrar */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => {
          setSubmitAttempted(true);
          if (!validateEmail(email)) {
            setEmailError("Informe um endereço de E-mail válido");
            return;
          }
          if (!password || password.trim().length === 0) {
            Alert.alert("Senha inválida", "Informe sua senha");
            return;
          }
          setEmailError("");
          // aqui você pode chamar sua API de login; por enquanto, navega ao dashboard
          router.push('/home/dashboard');
        }}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Criar conta */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.footerText}>Ainda não tem uma conta? </Text>
        <TouchableOpacity
          onPress={() => router.push('/auth/register')}
          accessibilityRole="button"
          activeOpacity={0.7}
        >
          <Text style={styles.createText}>Crie uma</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function Index() {

  return <LoginScreen />;
}
