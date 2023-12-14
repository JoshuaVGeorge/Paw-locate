import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavButton = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.navButtonContainer}>
			<TouchableOpacity
				style={styles.button1}
				onPress={() => navigation.navigate("ViewReports")}>
				<Text style={styles.buttonText}>View Reports</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button2}
				onPress={() => navigation.navigate("Login")}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	navButtonContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
	button1: {
		backgroundColor: "#DDDDDD",
		padding: 10,
	},
	button2: {
		backgroundColor: "#DDDDDD",
		padding: 10,
	},
	buttonText: {
		fontSize: 20,
	},
});

export default NavButton;
