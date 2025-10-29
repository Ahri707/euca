import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2c3a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#00e5ff",
  },
  subtitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#b3ff33",
    marginBottom: 10,
  },
  waitingText: {
    color: "#00e5ff",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    backgroundColor: "#3c3c4a",
    borderRadius: 8,
    padding: 12,
    color: "#fff",
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3c3c4a",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    width: "100%",
  },
  passwordInput: {
    flex: 1,
    color: "#fff",
    paddingVertical: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxText: {
    color: "#fff",
    marginLeft: 5,
  },
  forgotText: {
    color: "#aaa",
  },
  button: {
    backgroundColor: "#444",
    paddingVertical: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerText: {
    color: "#fff",
  },
  createText: {
    color: "#b3ff33",
    fontWeight: "bold",
  },
});

export default styles;
