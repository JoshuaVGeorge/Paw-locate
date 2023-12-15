import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
} from "react-native";
import placeholderImg from "../../assets/icon.png";

const ReportForm = () => {
	return (
		<View style={styles.container}>
			<View style={styles.section}>
				<TextInput style={styles.input} placeholder="Pet name"></TextInput>
			</View>
			<View style={styles.image__container}>
				<Image style={styles.image} source={placeholderImg} />
			</View>
			<View style={styles.section}>
				<TextInput style={styles.input} placeholder="description"></TextInput>
			</View>
			<View style={styles.section}>
				<TextInput style={styles.input} placeholder="location"></TextInput>
			</View>
			<View style={styles.section}>
				<TextInput style={styles.input} placeholder="status"></TextInput>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 400,
		borderWidth: 2,
		borderRadius: 4,
	},
	section: {
		borderBottomWidth: 1,
	},
	image__container: {
		flex: 4,
		borderBottomWidth: 1,
		alignItems: "center",
		padding: 10,
	},
	image: {
		aspectRatio: 16 / 9,
		resizeMode: "contain",
		width: "100%",
		height: "100%",
		borderRadius: 4,
	},
	input: {
		padding: 10,
	},
});

export default ReportForm;
