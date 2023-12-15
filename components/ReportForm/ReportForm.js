import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
	TouchableHighlight,
} from "react-native";
import placeholderImg from "../../assets/icon.png";

const ReportForm = () => {
	return (
		<View style={styles.container}>
			<View style={styles.section}>
				<TextInput
					style={styles.input}
					placeholder="Pet name"
					maxLength={50}></TextInput>
			</View>
			<TouchableHighlight
				style={styles.image__container}
				underlayColor="#DDDDDD"
				// onPress={() => {
				// 	console.log("click");}}
			>
				<Image style={styles.image} source={placeholderImg} />
			</TouchableHighlight>
			<View style={[styles.section, styles.description]}>
				<TextInput
					style={styles.input}
					placeholder="description"
					maxLength={150}
					numberOfLines={4}
					multiline></TextInput>
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
	description: {
		flex: 2,
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
