import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

function ExpenseLoggerScreen ({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewContainer}>
                <Text>Hello from Expense Logger</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});

export default ExpenseLoggerScreen;