import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#2B2A3A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#B4FF3F',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#46C2FF',
    fontSize: 14,
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  label: {
    color: '#B4FF3F',
    fontSize: 14,
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#3c3c4a',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3c3c4a',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    width: '100%'
  },
  passwordInput: {
    flex: 1,
    color: '#fff',
    paddingVertical: 12,
  },
  eye: {
    fontSize: 20,
    color: '#B4FF3F',
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#55E9F0',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 28,
  },
  buttonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: '#B4FF3F',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#ff4d4d',
    width: '100%',
    marginTop: -8,
    marginBottom: 10,
  },
  validText: {
    color: '#B4FF3F',
    width: '100%',
    marginTop: -8,
    marginBottom: 10,
  },
  buttonDisabled: {
    backgroundColor: '#888',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 28,
    opacity: 0.8,
  },
  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ruleText: {
    marginLeft: 8,
  },
  ruleTextOk: {
    color: '#B4FF3F',
    marginLeft: 8,
    marginTop: 2,
  },
  ruleTextError: {
    color: '#ff4d4d',
    marginLeft: 8,
    marginTop: 2,
  },
});

export default styles;
