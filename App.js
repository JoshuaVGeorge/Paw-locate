import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import ViewReports from "./Screens/ViewReports";
import CreateAccount from "./Screens/CreateAccount";
import Profile from "./Screens/Profile";
import SearchReports from "./Screens/SearchReports";
import CreateReport from "./Screens/CreateReport";
import ReportDetails from "./Screens/ReportDetails";
import AddTip from "./Screens/AddTip";
import EditReport from "./Screens/EditReport";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="ViewReports" component={ViewReports} />
				<Stack.Screen name="CreateAccount" component={CreateAccount} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="SearchReports" component={SearchReports} />
				<Stack.Screen name="CreateReport" component={CreateReport} />
				<Stack.Screen name="ReportDetails" component={ReportDetails} />
				<Stack.Screen name="AddTip" component={AddTip} />
				<Stack.Screen name="EditReport" component={EditReport} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({});

export default App;
