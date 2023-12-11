import { StyleSheet, Text, View } from "react-native";
import NavButton from "./components/NavButton/NavButton";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Paw Locate</Text>
			<NavButton style={styles.button} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f2fdf5",
		justifyContent: "center",
	},
	header: {
		textAlign: "center",
		backgroundColor: "#8eece7",
		paddingBottom: 40,
		fontSize: 50,
	},
});
