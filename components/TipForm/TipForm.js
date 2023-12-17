import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Alert,
	TouchableHighlight,
	Image,
} from "react-native";
import axios from "axios";
import { API_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import placeholderImg from "../../assets/icon.png";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

const TipForm = ({ reportId }) => {
	console.log(reportId);
	const navigation = useNavigation();

	const [textValue, setTextValue] = useState("");
	const [image, setImage] = useState(null);

	const pickImage = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [16, 9],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	const formData = new FormData();
	const submitForm = () => {
		if (!textValue) {
			Alert.alert("please fill text field");
		} else {
			formData.append("image", {
				uri: image,
				type: "image/jpeg",
				name: `tipImage.jpeg`,
			});
			formData.append("text_data", textValue);
		}

		console.log(formData);
	};

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<TouchableHighlight
					style={styles.image__container}
					underlayColor="#DDDDDD"
					onPress={() => {
						pickImage();
					}}>
					<Image
						style={styles.image}
						source={image === null ? placeholderImg : { uri: `${image}` }}
					/>
				</TouchableHighlight>
				<View style={styles.input}>
					<TextInput
						style={styles.description}
						placeholder="Enter text here"
						maxLength={200}
						numberOfLines={5}
						multiline
						value={textValue}
						onChangeText={(text) => {
							setTextValue(text);
						}}></TextInput>
				</View>
			</View>
			<SafeAreaView style={styles.button__container}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.goBack();
					}}>
					<Text>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={submitForm}>
					<Text>Submit</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
	},
	form: {
		height: 400,
		borderWidth: 2,
		borderRadius: 4,
	},
	input: {
		flex: 1,
		padding: 10,
	},
	description: {
		flex: 2,
	},
	image__container: {
		flex: 3,
		borderBottomWidth: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
	image: {
		aspectRatio: 16 / 9,
		resizeMode: "contain",
		height: "80%",
		borderRadius: 4,
	},
	button__container: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		marginTop: 20,
		borderWidth: 2,
		alignSelf: "center",
		paddingVertical: 10,
		paddingHorizontal: 50,
	},
});

export default TipForm;
