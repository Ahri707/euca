import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242434",
    paddingHorizontal: 22,
    paddingTop: 28
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25
  },

  backBtn: {
    backgroundColor: "#7FF0FF",
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12
  },

  headerTitle: {
    fontSize: 22,
    color: "#fff"
  },

  avatarContainer: {
    alignItems: "center",
    marginTop: 25
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 70,
    backgroundColor: "#C1FF57",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#7FF0FF"
  },

  label: {
    color: "#7FF0FF",
    fontSize: 16,
    marginTop: 22
  },

  inputRow: {
    backgroundColor: "#4A4958",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },

  input: {
    flex: 1,
    color: "#fff",
    fontSize: 15
  },

  icon: {
    marginLeft: 10
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },

  smallInputRow: {
    backgroundColor: "#4A4958",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },

  smallInput: {
    flex: 1,
    color: "#fff",
    fontSize: 15
  },

  smallIcon: {
    marginLeft: 8
  },

  alergiaBox: {
    backgroundColor: "#6A6975",
    marginTop: 8,
    paddingVertical: 10,
    width: 80,
    borderRadius: 20,
    alignItems: "center"
  },

  alergiaText: {
    color: "#fff"
  },

  largeInputRow: {
    backgroundColor: "#4A4958",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },

  largeInput: {
    flex: 1,
    color: "#fff",
    fontSize: 15
  }
  ,
  alergiaOptionsRow: {
    flexDirection: "row",
    marginTop: 10
  },

  alergiaOption: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#4A4958",
    marginRight: 8
  },

  alergiaOptionActive: {
    backgroundColor: "#7FF0FF"
  },

  alergiaOptionText: {
    color: "#fff"
  },

  alergiaOptionTextActive: {
    color: "#000"
  }

  ,
  calendarOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  calendarContainer: {
    width: 320,
    maxWidth: '90%',
    backgroundColor: '#2b2b38',
    borderRadius: 12,
    padding: 10
  },

  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },

  calendarTitle: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'capitalize'
  },

  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  weekDayText: {
    color: '#aaa',
    width: `${100/7}%`,
    textAlign: 'center',
    fontSize: 12
  },

  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8
  },

  dayCellEmpty: {
    width: `${100/7}%`,
    height: 30
  },

  dayCell: {
    width: `${100/7}%`,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2
  },

  dayCellSelected: {
    backgroundColor: '#7FF0FF',
    borderRadius: 18
  },

  dayText: {
    color: '#fff',
    fontSize: 13
  },

  dayTextSelected: {
    color: '#000',
    fontWeight: '600',
    fontSize: 13
  },

  calendarFooter: {
    marginTop: 10,
    alignItems: 'flex-end'
  },

  calendarCloseBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6
  },

  calendarCloseText: {
    color: '#7FF0FF'
  }
});

export default styles;
