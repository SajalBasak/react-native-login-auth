import { StyleSheet, Text, TextInput, View, ActivityIndicator, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/AuthSlice';

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch: any = useDispatch();
    const { userData, isLoading }: any = useSelector((state: any) => state.auth);

    const handlingLogin = () => {
        const params = {
            username: username,
            password: password,
        };
        dispatch(login(params));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login to your account.</Text>
            <TextInput
                value={username}
                placeholder="Enter Username"
                onChangeText={setUsername}
                style={styles.input}
                placeholderTextColor="grey"
                autoCapitalize="none"
            />
            <TextInput
                value={password}
                placeholder="Enter Password"
                onChangeText={setPassword}
                style={styles.input}
                placeholderTextColor="grey"
                secureTextEntry={true}
            />
            <Pressable onPress={handlingLogin} style={styles.btnContainer}>
                <Text style={styles.btnTitle}>Login</Text>
                {isLoading && <ActivityIndicator size="small" color={'white'} />}
            </Pressable>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        paddingTop: 150,
        paddingHorizontal: '5%',
    },
    title: {
        fontSize: 26,
        color: '#000',
        textAlign: 'center',
        paddingBottom: 50
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#235787',
        paddingHorizontal: 20,
    },
    btnContainer: {
        backgroundColor: '#235787',
        borderRadius: 25,
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    btnTitle: {
        color: 'white',
        fontSize: 18,
    },
});
