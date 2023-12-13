import React from "react";
import {
	SafeAreaView,
	View,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import Home from "./Screens/Home";

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<TouchableWithoutFeedback
				style={styles.container__touchable}
				onPress={() => {
					Keyboard.dismiss();
				}}>
				<Home />
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
});

export default App;
