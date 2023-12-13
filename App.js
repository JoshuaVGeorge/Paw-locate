import React from "react";
import {
	SafeAreaView,
	View,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import NavButton from "./components/NavButton/NavButton";

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<TouchableWithoutFeedback
				style={styles.container__touchable}
				onPress={() => {
					Keyboard.dismiss();
				}}>
				<View style={styles.content}>
					<Text style={styles.logo}>Paw Locate</Text>
					<NavButton />
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	container__touchable: {
		flex: 1,
	},
	content: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#f2fdf5",
	},
	logo: {
		textAlign: "center",
		backgroundColor: "#8eece7",
		paddingBottom: 40,
		fontSize: 50,
	},
});

export default App;
