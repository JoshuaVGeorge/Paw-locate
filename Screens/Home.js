import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NavButton from "../components/NavButton/NavButton";

const Home = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.logo}>Paw Locate</Text>
			<NavButton />
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", backgroundColor: "#f2fdf5" },
	logo: {
		textAlign: "center",
		backgroundColor: "#8eece7",
		paddingBottom: 40,
		fontSize: 50,
	},
});

export default Home;
