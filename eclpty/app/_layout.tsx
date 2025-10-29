import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  // Hide the native header/title (prevents 'Index' from showing on the login screen)
  return <Stack screenOptions={{ headerShown: false }} />;
}
