import { SafeAreaView, StyleSheet, Text } from "react-native";
import NavButton from "./components/NavButton/NavButton";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.logo}>Paw Locate</Text>
			<NavButton style={styles.button} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f2fdf5",
		justifyContent: "center",
	},
	logo: {
		textAlign: "center",
		backgroundColor: "#8eece7",
		paddingBottom: 40,
		fontSize: 50,
	},
});
