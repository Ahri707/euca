import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242434",
    paddingHorizontal: 22,
    paddingTop: 60,
    paddingBottom: 50,
    flexGrow: 1
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  title: {
    color: "#C1FF57",
    fontSize: 24,
    marginTop: 12,
    textAlign: "center"
  },

  label: {
    color: "#7FF0FF",
    fontSize: 16,
    marginTop: 25
  },

  inputRow: {
    backgroundColor: "#4A4958",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6
  },

  input: {
    flex: 1,
    color: "#fff",
    fontSize: 15
  },

  textAreaRow: {
    backgroundColor: "#4A4958",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    marginTop: 6
  },

  textArea: {
    flex: 1,
    color: "#fff",
    height: 120,
    fontSize: 15
  },

  dropdown: {
    backgroundColor: "#4A4958",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: 6
  },

  dropdownText: {
    color: "#ccc",
    fontSize: 16
  },

  searchRow: {
    backgroundColor: "#4A4958",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6
  },

  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 15
  },

  toggleBtn: {
    marginTop: 8,
    backgroundColor: "#6A6975",
    width: 80,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center"
  },

  toggleSelected: {
    backgroundColor: "#7FF0FF"
  },

  toggleText: {
    color: "#fff"
  },

  createBtn: {
    marginTop: 40,
    backgroundColor: "#6FF1FB",
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: "center"
  },

  createBtnText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default styles;
