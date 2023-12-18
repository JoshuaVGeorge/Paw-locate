import React, { useEffect, useRef, useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Image,
	TouchableHighlight,
	TouchableOpacity,
	Text,
	Alert,
} from "react-native";
import placeholderImg from "../../assets/icon.png";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const ReportForm = ({ isEdit, reportData, userId }) => {
	const API_URL = process.env.EXPO_PUBLIC_API_URL;
	const navigation = useNavigation();

	const [petNameValue, setPetNameValue] = useState("");
	const [descValue, setDescValue] = useState("");
	const [locationValue, setLocationValue] = useState("");
	const [image, setImage] = useState(null);

	useEffect(() => {
		if (isEdit) {
			setDescValue(reportData.description);
			setPetNameValue(reportData.pet_name);
			setLocationValue(reportData.location_data);
			setImage(reportData.pet_image);
		}
	}, []);

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

	const petNameRef = useRef(null);
	const descRef = useRef(null);
	const locationRef = useRef(null);
	const statusRef = useRef(null);

	const formData = new FormData();

	const submitForm = () => {
		if (!petNameValue || !descValue || !locationValue || !image) {
			Alert.alert("please fill all fields");
		} else {
			formData.append("pet_image", {
				uri: image,
				type: "image/jpeg",
				name: `${petNameValue}.jpeg`,
			});
			formData.append("pet_name", petNameValue);
			formData.append("description", descValue);
			formData.append("location_data", locationValue);
			formData.append("user_id", userId);

			if (isEdit) {
				axios
					.patch(`${API_URL}/reports/${reportData.id}`, formData, {
						headers: {
							"Content-Type": "multipart/form-data",
						},
					})
					.then((res) => {
						Alert.alert("report edited");
						navigation.goBack();
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				axios
					.post(`${API_URL}/reports`, formData, {
						headers: {
							"Content-Type": "multipart/form-data",
						},
					})
					.then((res) => {
						Alert.alert("report created");
						navigation.goBack();
					})
					.catch((err) => {
						console.log(err);
					});
			}
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<View style={styles.section}>
					<TextInput
						ref={petNameRef}
						style={styles.input}
						defaultValue={isEdit ? reportData.pet_name : ""}
						placeholder="Pet name"
						maxLength={50}
						value={petNameValue}
						onChangeText={(text) => setPetNameValue(text)}
						onFocus={() => {
							petNameRef.current.clear();
						}}></TextInput>
				</View>
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
				<View style={[styles.section, styles.description]}>
					<TextInput
						ref={descRef}
						style={styles.input}
						defaultValue={isEdit ? reportData.description : ""}
						placeholder="description"
						maxLength={150}
						numberOfLines={4}
						multiline
						value={descValue}
						onChangeText={(text) => setDescValue(text)}
						onFocus={() => {
							descRef.current.clear();
						}}></TextInput>
				</View>
				<View style={styles.section}>
					<TextInput
						ref={locationRef}
						style={styles.input}
						defaultValue={isEdit ? reportData.location_data : ""}
						placeholder="Location"
						value={locationValue}
						onChangeText={(text) => setLocationValue(text)}
						onFocus={() => {
							locationRef.current.clear();
						}}></TextInput>
				</View>
				<View style={styles.section}>
					<TextInput
						ref={statusRef}
						style={styles.input}
						defaultValue={isEdit ? `${reportData.status}` : "status"}
						onFocus={() => {
							statusRef.current.clear();
						}}></TextInput>
				</View>
			</View>
			<View style={styles.button__container}>
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
			</View>
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

export default ReportForm;
