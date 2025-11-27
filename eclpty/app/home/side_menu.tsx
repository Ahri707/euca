import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Animated, Dimensions, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "./dashboard_styles";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SideMenu({ isOpen, onClose }: Props) {
  const router = useRouter();
  const menuWidth = Math.min(320, Dimensions.get("window").width * 0.75);
  const anim = useRef(new Animated.Value(-menuWidth)).current;
  const [visible, setVisible] = React.useState(isOpen);
  const [showReceitaOptions, setShowReceitaOptions] = useState(false);

  
  React.useEffect(() => {
    if (isOpen) setVisible(true);
    else {
      
      const t = setTimeout(() => setVisible(false), 260);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    Animated.timing(anim, {
      toValue: isOpen ? 0 : -menuWidth,
      duration: 220,
      useNativeDriver: true
    }).start();
  }, [isOpen, anim, menuWidth]);

  if (!visible) return null;

  return (
    <View style={styles.menuOverlay} pointerEvents="box-none">
      <Pressable style={styles.menuBackdrop} onPress={onClose} />
      <Animated.View
        style={[
          styles.sideMenu,
          { width: menuWidth, transform: [{ translateX: anim }] }
        ]}
      >
        <View style={styles.menuAvatarContainer}>
          <Image source={require("../../assets/images/koala.png")} style={styles.menuAvatarImage} />
        </View>
        <Text style={styles.menuHeader}>Menu</Text>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            Alert.alert("Perfil", "Abrindo perfil");
            onClose();
          }}
        >
          <View style={styles.menuItemRow}>
            <Ionicons name="person-circle-outline" size={20} color="#B7FF5A" style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Perfil</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            Alert.alert("Configurações", "Abrindo configurações");
            onClose();
          }}
        >
          <View style={styles.menuItemRow}>
            <Ionicons name="settings-outline" size={20} color="#B7FF5A" style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Configurações</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            setShowReceitaOptions(s => !s);
          }}
        >
          <View style={styles.menuItemRow}>
            <Ionicons name="receipt-outline" size={20} color="#B7FF5A" style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Receitas</Text>
            <Ionicons
              name={showReceitaOptions ? 'chevron-up' : 'chevron-down'}
              size={18}
              color="#B7FF5A"
              style={{ marginLeft: 'auto' }}
            />
          </View>
        </TouchableOpacity>

        {showReceitaOptions && (
          <>
            <TouchableOpacity
              style={[styles.menuItem, { paddingLeft: 28 }]}
              onPress={() => {
                  router.push('/home/create_recipe' as any);
                  onClose();
                }}
            >
              <View style={styles.menuItemRow}>
                <Ionicons name="add-circle-outline" size={18} color="#B7FF5A" style={styles.menuItemIcon} />
                <Text style={styles.menuItemText}>Criar nova receita</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuItem, { paddingLeft: 28 }]}
              onPress={() => {
                  router.push('/home/edit_recipe' as any);
                  onClose();
                }}
            >
              <View style={styles.menuItemRow}>
                <Ionicons name="create-outline" size={18} color="#B7FF5A" style={styles.menuItemIcon} />
                <Text style={styles.menuItemText}>Editar receitas</Text>
              </View>
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            
            router.replace("/auth");
            onClose();
          }}
        >
          <View style={styles.menuItemRow}>
            <Ionicons name="log-out-outline" size={20} color="#B7FF5A" style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Sair</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
