import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavButton = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.navButtonContainer}>
			<TouchableOpacity
				style={[styles.button, styles.button__primary]}
				onPress={() => navigation.navigate("ViewReports")}>
				<Text style={styles.buttonText}>View Reports</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={[styles.button, styles.button__snd]}
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
		gap: 30,
	},
	button: {
		padding: 10,
		borderWidth: 2,
	},
	buttonText: {
		fontSize: 20,
	},
});

export default NavButton;
