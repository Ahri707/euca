import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F2EF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 40,
  },
  title: {
    fontSize: 38,
    fontWeight: "700",
    color: "#2F2E3D",
  },
  subtitle: {
    marginTop: 25,
    fontSize: 14,
    color: "#8B8B8B",
    lineHeight: 22,
  },
  small: {
    marginTop: 10,
    color: "#A0A0A0",
    fontSize: 13,
  },
  label: {
    fontSize: 14,
    color: "#7B7B7B",
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#C5C5C5",
    height: 40,
    marginBottom: 25,
  },
  button: {
    backgroundColor: "#32313F",
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 60,
  },
  footerText: {
    color: "#8B8B8B",
  },
  create: {
    color: "#32313F",
    fontWeight: "700",
  },
  errorText: {
    color: "#D9534F",
    marginTop: -15,
    marginBottom: 10,
    fontSize: 12,
  },
});

export default styles;
