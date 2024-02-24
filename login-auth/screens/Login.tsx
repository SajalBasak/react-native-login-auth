import { StyleSheet, Text, TextInput, View, ActivityIndicator, Pressable } from 'react-native';
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/AuthSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const dispatch: any = useDispatch();
    const { userData, isLoading }: any = useSelector((state: any) => state.auth);

    const handlingLogin = () => {
        const params = {
            username: username,
            password: password,
        };
        dispatch(login(params));
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
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
            <View style={styles.innerContainer}>
                <TextInput
                    value={password}
                    placeholder="Enter Password"
                    onChangeText={setPassword}
                    style={styles.passInput}
                    placeholderTextColor="grey"
                    secureTextEntry={!showPassword}
                />
                <MaterialCommunityIcons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="#aaa"
                    style={styles.icon}
                    onPress={toggleShowPassword}
                />
            </View>
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
    innerContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#f3f3f3',
        paddingHorizontal: 14,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#235787',
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
    passInput: {
        flex: 1,
        height: 45,
        paddingHorizontal: 5
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
    icon: {
        marginLeft: 10,
    },
});
