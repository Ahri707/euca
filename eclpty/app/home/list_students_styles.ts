import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242434",
    paddingHorizontal: 20,
    paddingTop: 40
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },

  backBtn: {
    backgroundColor: "#7FF0FF",
    width: 45,
    height: 45,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },

  searchContainer: {
    backgroundColor: "#333344",
    borderRadius: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },

  searchInput: {
    flex: 1,
    color: "#fff",
    marginLeft: 10
  },

  title: {
    color: "#fff",
    fontSize: 22,
    marginTop: 25,
    marginBottom: 15
  },

  studentBox: {
    paddingVertical: 15,
    marginBottom: 12,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },

  blueBox: {
    backgroundColor: "#67E8F9"
  },

  greenBox: {
    backgroundColor: "#C1FF57"
  },

  studentName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000"
  }
});

export default styles;
