import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ReportCard = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.card}>
			<View style={styles.section}>
				<Text>Muffin</Text>
			</View>
			<View style={styles.image__container}>
				<Image
					style={styles.image}
					source={{
						uri: "https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1670938235.1927571/fun-facts-about-labrador-retrievers.jpg",
					}}
				/>
			</View>
			<View style={styles.section}>
				<Text>description here . lot of words to say.....</Text>
			</View>
			<View style={styles.section}>
				<Text>either coords or string of location</Text>
			</View>
			<View style={styles.section}>
				<Text>Found or not found</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		height: "50%",
		borderWidth: 2,
		borderRadius: 4,
		marginBottom: 20,
	},
	section: {
		flex: 1,
		borderWidth: 1,
		paddingLeft: 5,
		justifyContent: "center",
	},
	image__container: {
		flex: 4,
		borderWidth: 1,
		alignItems: "center",
		padding: 10,
	},
	image: {
		aspectRatio: 16 / 9,
		resizeMode: "cover",
		height: "100%",
		width: "100%",
		borderRadius: 4,
	},
});

export default ReportCard;
