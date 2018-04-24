import React from 'react';
import styles from "../styles";
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.1.1

class LoginScreen extends React.Component{
    render() {
        return (
        <View style={styles.container}>
<Text style={styles.title}>Login Screen</Text>
<View style={styles.buttonContainer}>
<Button title="Login" onPress={() => this.props.navigation.goBack()}/>
</View>
</View>
);
}
}

export default LoginScreen;