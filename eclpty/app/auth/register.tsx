import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './register_styles';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    // validar nome: mínimo 4 caracteres
    if (name.trim().length < 4) {
      setNameError('O nome deve ter pelo menos 4 caracteres');
      return;
    }
    // defensivo: garantir que não ha digitos ou símbolos
        if (/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(name)) {
      setNameError('Nome contém caracteres inválidos');
      return;
    }
    setNameError('');
    // validar senha: 8-64 chars, ao menos uma maiuscula e um número
    const pwErrors: string[] = [];
    if (password.length < 8) pwErrors.push('A senha deve ter pelo menos 8 caracteres');
    if (password.length > 64) pwErrors.push('A senha deve ter no máximo 64 caracteres');
    if (!/[A-Z]/.test(password)) pwErrors.push('A senha deve conter ao menos uma letra maiúscula');
    if (!/\d/.test(password)) pwErrors.push('A senha deve conter ao menos um número');
    if (pwErrors.length > 0) {
      setPasswordErrors(pwErrors);
      return;
    }
    setPasswordErrors([]);
    if (confirmPassword !== password) {
      setConfirmPasswordError('A confirmação deve ser igual à senha');
      return;
    }
    setConfirmPasswordError('');
    console.log({ name, email, password, confirmPassword });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={styles.subtitle}>Faça seu cadastro no nosso App! :)</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Seu nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe seu nome completo"
          placeholderTextColor="#999"
          value={name}
              onChangeText={(text) => {
                // permitir apenas letras (inclui acentos) e espaços — não permitir hífen ou apóstrofo
                const filtered = text.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '');
            const limited = filtered.slice(0, 100);
            setName(limited);
            if (limited.trim().length >= 4) setNameError('');
          }}
          autoCapitalize="words"
          autoCorrect={false}
          maxLength={100}
        />
        {nameError.length > 0 && <Text style={styles.errorText}>{nameError}</Text>}

        <Text style={styles.label}>Seu E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe seu endereço de E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={styles.label}>Sua senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => {
              const limited = text.slice(0, 64);
              setPassword(limited);
              // recompute errors and clear when none
              const errors: string[] = [];
              if (limited.length < 8) errors.push('A senha deve ter pelo menos 8 caracteres');
              if (limited.length > 64) errors.push('A senha deve ter no máximo 64 caracteres');
              if (!/[A-Z]/.test(limited)) errors.push('A senha deve conter ao menos uma letra maiúscula');
              if (!/\d/.test(limited)) errors.push('A senha deve conter ao menos um número');
              setPasswordErrors(errors);
              // se a confirmação já esta igual a senha, limpa o erro; se existe e difere, mostra mensagem
              if (confirmPassword.length > 0) {
                if (confirmPassword === limited) setConfirmPasswordError('');
                else setConfirmPasswordError('Senha não está igual a informada');
              }
            }}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={64}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={22} color="#aaa" />
          </TouchableOpacity>
        </View>
          {/* Checa os requirementos da senha em tempo real apenas quando o campo estiver focado */}
          {(isPasswordFocused || password.length > 0) && (
            <View style={{ width: '100%', marginTop: 8 }}>
              {[
                { ok: password.length >= 8, msg: 'A senha deve ter pelo menos 8 caracteres' },
                { ok: password.length <= 64, msg: 'A senha deve ter no máximo 64 caracteres' },
                { ok: /[A-Z]/.test(password), msg: 'A senha deve conter ao menos uma letra maiúscula' },
                { ok: /\d/.test(password), msg: 'A senha deve conter ao menos um número' },
              ].map((c, i) => (
                <View key={i} style={styles.ruleRow}>
                  <Ionicons name={c.ok ? 'checkmark-circle' : 'close-circle'} size={16} color={c.ok ? '#B4FF3F' : '#ff4d4d'} />
                  <Text style={c.ok ? styles.ruleTextOk : styles.ruleTextError}>{c.msg}</Text>
                </View>
              ))}
            </View>
          )}

        <Text style={styles.label}>Confirme sua senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirme sua senha"
            placeholderTextColor="#999"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={(text) => {
              const limited = text.slice(0, 64);
              setConfirmPassword(limited);
              if (limited.length > 0) {
                if (limited === password) setConfirmPasswordError('');
                else setConfirmPasswordError('Senha não está igual a informada');
              } else {
                setConfirmPasswordError('');
              }
            }}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={64}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={22} color="#aaa" />
          </TouchableOpacity>
        </View>
        {/* confirmação de senha fora do campo */}
        {confirmPasswordError.length > 0 && <Text style={styles.errorText}>{confirmPasswordError}</Text>}

        <TouchableOpacity
          style={
            // desabilitar visualmente quando inválido
            ((): any => {
              const isNameValid = name.trim().length >= 4 && !/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(name);
              const isPasswordValid = password.length >= 8 && password.length <= 64 && /[A-Z]/.test(password) && /\d/.test(password);
              const isConfirmValid = confirmPassword === password && confirmPassword.length > 0;
              const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
              const formValid = isNameValid && isPasswordValid && isConfirmValid && emailValid;
              return formValid ? styles.button : styles.buttonDisabled;
            })()
          }
          onPress={handleRegister}
          disabled={!(name.trim().length >= 4 && !/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(name) && password.length >= 8 && password.length <= 64 && /[A-Z]/.test(password) && /\d/.test(password) && confirmPassword === password && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Text style={[styles.footer, { marginTop: 0 }]}>Já tem uma conta no nosso App? </Text>
          <TouchableOpacity
            onPress={() => {
              // navegar de volta para a tela de login
              router.push('/auth');
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.link}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

