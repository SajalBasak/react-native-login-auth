import { StyleSheet, Text, TextInput, View, ActivityIndicator, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/AuthSlice';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch: any = useDispatch();
    const { userData, isLoading }: any = useSelector((state: any) => state.auth);

    const handlingLogin = () => {
        const params = {
            username: email,
            password: password,
        };
        console.log('params:', params);
        dispatch(login(params));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                value={email}
                placeholder="Enter Email"
                onChangeText={setEmail}
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
            <Pressable onPress={handlingLogin} style={styles.container}>
                <Text style={styles.title}>Login</Text>
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
        fontSize: 36,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'coral',
        paddingHorizontal: 20,
    },
});
