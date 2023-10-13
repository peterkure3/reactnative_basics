import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
const CustomButton = ({ title, onPress }) => {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const colorScheme = useColorScheme();
    const handleLogin = () => {
        // Add your login logic here
        // You can perform validation and login actions

        // For now, let's just navigate to the home screen
        navigation.navigate('Home');
    };

    const navigateToSignup = () => {
        navigation.navigate('Signup');
    };

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const inputTextColor = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    return (
        <View style={[styles.container, themeContainerStyle]}>
            <Text style={[styles.title, themeTextStyle]}>Login</Text>
            <TextInput
                style={[styles.input, inputTextColor]} 
                placeholder="Username"
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                style={[styles.input, inputTextColor]} 
                placeholder="Password"
                secureTextEntry
                onChangeText={text => setPassword(text)}
            />
            <CustomButton title="Login" onPress={handleLogin} />
            <CustomButton title="Sign Up" onPress={navigateToSignup} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 16,
        marginBottom: 10,
        paddingHorizontal: 14,
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 24,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },

    lightContainer: {
        backgroundColor: '#d0d0c0',
    },
    darkContainer: {
        backgroundColor: '#242c40',
    },
    lightThemeText: {
        color: '#242c40',
    },
    darkThemeText: {
        color: '#d0d0c0',
    },
});

export default LoginScreen;
