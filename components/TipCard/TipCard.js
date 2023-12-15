import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const TipCard = ({ id, img, status, text_data, user_name }) => {
	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Text>{user_name}</Text>
			</View>
			<View style={styles.content}>
				<Image
					style={styles.image}
					source={{
						uri: img,
					}}
				/>
				<Text style={styles.text}>{text_data}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	title: {
		paddingBottom: 10,
	},
	content: {
		flex: 1,
		height: 300,
	},
	image: {
		width: "50%",
		height: "50%",
		marginBottom: 5,
	},
});

export default TipCard;
