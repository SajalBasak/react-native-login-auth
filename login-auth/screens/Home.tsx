import { StyleSheet, Text, TextInput, View, ActivityIndicator, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/AuthSlice';

const Home = () => {
    const dispatch: any = useDispatch();
    const { userData, isLoading } = useSelector((state: any) => state.auth);

    const handlingLogout = () => {
        dispatch(logout());
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello.</Text>
            <Text style={styles.subtitle}>Your login message:</Text>
            <Text style={styles.subtitle}>"{userData.message}"</Text>
            <Pressable onPress={handlingLogout} style={styles.btnContainer}>
                <Text style={styles.btnTitle}>Logout</Text>
                {isLoading && <ActivityIndicator size="small" color={'white'} />}
            </Pressable>
        </View>
    );
};

export default Home;

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
    subtitle: {
        fontSize: 26,
        color: '#000',
        textAlign: 'center'
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
        marginTop: 100
    },
    btnTitle: {
        color: 'white',
        fontSize: 18
    },
});
