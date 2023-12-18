import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import ViewReports from "./Screens/ViewReports";
import CreateAccount from "./Screens/CreateAccount";
import Profile from "./Screens/Profile";
import CreateReport from "./Screens/CreateReport";
import ReportDetails from "./Screens/ReportDetails";
import AddTip from "./Screens/AddTip";
import EditReport from "./Screens/EditReport";
import ViewTips from "./Screens/ViewTips";
import MapPage from "./Screens/MapPage";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				{/* account routes */}
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="CreateAccount" component={CreateAccount} />
				<Stack.Screen
					name="Profile"
					component={Profile}
					options={({ navigation }) => ({
						headerLeft: () => (
							<TouchableOpacity
								style={styles.home__button}
								onPress={() => navigation.navigate("Home")}>
								<Text>Home</Text>
							</TouchableOpacity>
						),
					})}
				/>

				{/* report routes */}
				<Stack.Screen name="ViewReports" component={ViewReports} />
				<Stack.Screen name="CreateReport" component={CreateReport} />
				<Stack.Screen name="ReportDetails" component={ReportDetails} />
				<Stack.Screen name="EditReport" component={EditReport} />
				<Stack.Screen name="MapPage" component={MapPage} />

				{/* tip routes */}
				<Stack.Screen name="AddTip" component={AddTip} />
				<Stack.Screen name="ViewTips" component={ViewTips} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	home__button: {
		marginRight: 20,
	},
});

export default App;
