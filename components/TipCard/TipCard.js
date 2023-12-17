import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const TipCard = ({ img, text_data, user_name }) => {
	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Text style={styles.title__text}>{user_name}</Text>
			</View>
			<View style={styles.content}>
				<View
					style={
						img === "no image" ? styles.inactive : styles.image__container
					}>
					<Image
						style={styles.image}
						source={{
							uri: img,
						}}
					/>
				</View>
				<View style={styles.text__container}>
					<Text style={styles.text}>{text_data}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		borderWidth: 2,
		flex: 1,
	},
	title: {
		paddingLeft: 10,
		paddingBottom: 10,
	},
	title__text: {
		fontSize: 15,
	},
	image__container: {
		flex: 2,
		alignItems: "center",
		height: 200,
	},
	image: {
		flex: 1,
		aspectRatio: 16 / 9,
		resizeMode: "contain",
		width: "50%",
		height: "50%",
		marginBottom: 5,
	},
	text__container: {
		flex: 1,
		paddingHorizontal: 10,
	},
	inactive: {
		display: "none",
	},
});

export default TipCard;
