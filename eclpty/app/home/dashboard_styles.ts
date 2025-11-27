import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242434",
    padding: 20,
    paddingTop: 60,
    paddingBottom: 50,
    flexGrow: 1
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  headerButton: {
    padding: 6
  },

  greeting: {
    color: "#fff",
    fontSize: 16
  },

  searchContainer: {
    marginTop: 16,
    backgroundColor: "#333344",
    borderRadius: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },

  searchInput: {
    flex: 1,
    color: "#fff",
    marginLeft: 8,
    marginRight: 8
  },

  searchImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 8,
    marginRight: 8
  },

  daysRow: {
    flexDirection: "row",
    marginTop: 20,
    paddingLeft: 6,
    alignItems: "center"
  },

  dayBox: {
    backgroundColor: "#323244",
    width: 72,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 12
  },

  dayNumber: {
    color: "#B7FF5A",
    fontSize: 16
  },

  dayText: {
    color: "#ccc",
    fontSize: 12
  },

  cardapioTitle: {
    color: "#B7FF5A",
    fontSize: 18,
    marginTop: 25
  },

  menuBox: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginTop: 10
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700"
  },

  item: {
    fontSize: 14,
    marginTop: 4
  },

  smallHint: {
    color: "#8CCF7A",
    fontSize: 12,
    marginTop: 10,
    textAlign: "center"
  },

  cardapioBtn: {
    marginTop: 10,
    alignItems: "center"
  },

  menuOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999
  },

  menuBackdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)"
  },

  sideMenu: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#242434",
    paddingTop: 72,
    paddingHorizontal: 18,
    borderRightWidth: 1,
    borderRightColor: "rgba(183,255,90,0.06)"
  },

  menuHeader: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    color: "#B7FF5A"
  },

  menuItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.04)"
  },

  menuItemText: {
    fontSize: 16,
    color: "#fff"
  },

  menuAvatarContainer: {
    alignItems: "center",
    marginBottom: 8
  },

  menuAvatarImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: "#B7FF5A",
    marginBottom: 8
  },

  menuItemRow: {
    flexDirection: "row",
    alignItems: "center"
  },

  menuItemIcon: {
    marginRight: 12
  },

  turmasTitle: {
    color: "#26C3D4",
    fontSize: 20,
    marginTop: 25,
    textAlign: "center"
  },

  turmasGrid: {
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  turmaBtn: {
    width: "48%",
    backgroundColor: "#26C3D4",
    paddingVertical: 14,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  turmaText: {
    color: "#fff",
    fontSize: 16
  }

  ,
  scroll: {
    flex: 1,
    backgroundColor: "#242434"
  }
});

export default styles;
