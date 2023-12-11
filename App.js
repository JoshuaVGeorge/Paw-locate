import { StyleSheet, Text, View } from "react-native";
import NavButton from "./components/NavButton/NavButton";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>PAW LOCATE</Text>
			<NavButton />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},
});
