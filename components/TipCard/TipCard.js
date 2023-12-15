import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const TipCard = ({ id, img, status, text_data, user_name }) => {
	console.log(user_name);
	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Text>{user_name}</Text>
			</View>
			<View style={styles.content}>
				<Text style={styles.text}> {text_data}</Text>
				<Image
					style={styles.image}
					source={{
						uri: img,
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default TipCard;
