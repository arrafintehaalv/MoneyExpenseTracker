import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import allActions from '../actions';
import Moment from "moment";

function ExpenseCategoryScreen ({navigation}) {

    const [categoryName, setCategoryName] = useState("Home Rents");
    const [amount, setAmount] = useState("20");
    const [date, setDate] = useState("26/02/2022");
    const [validations, setValidations] = useState({
       "category": true,
       "date": true,
       "amount": true
    });
    const [validationsCheck, setValidationsCheck] = useState(true);
    const dispatch = useDispatch()

    const categoryObj = {
        name: categoryName,
        amount: parseInt(amount),
        date: date
    }
    const addExpenseBtnClick = () => {
        dispatch(allActions.counterActions.expenseAmount(parseInt(amount)))
        dispatch(allActions.categoryActions.setCategoryList(categoryObj))
    }
    
    const checkValidations = () => {
        let flag = true
        for (const item in validations) {
            console.log(validations[item])
            if (!validations[item]) {
                flag = false
                break;
            }
          }
          setValidationsCheck(flag)
    }

    useEffect(() => {
        checkValidations();
    }, [validations]);
    const setExpense = (value, flag) => {
        let validationArr = {...validations};
        if (flag == "category") {
            if (value.length == 0) {
                validationArr["category"] = false
                setValidations(validationArr) 
            }
            else {
                validationArr["category"] = true 
                setValidations(validationArr) 
            }
            setCategoryName(value)
        }
        else if (flag == "date") {
            const date = Moment(value, "DD/MM/YYYY", true);
            const check = date.isValid();
            console.log("date", date)
            console.log("Check", check)
            if (value.length == 0 || !check) {
                validationArr["date"] = false
                setValidations(validationArr) 
            }
            else {
                validationArr["date"] = true 
                setValidations(validationArr) 
            }
            setDate(value)
        }
        else {
            if (value.length == 0 || isNaN(value)) {
                validationArr["amount"] = false
                setValidations(validationArr) 
            }
            else {
                validationArr["amount"] = true 
                setValidations(validationArr) 
            }
            setAmount(value)
        }
        
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewContainer}>
                <Text>Hello from Expense Category</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => setExpense(value, "category")}
                    value={categoryName}
                    placeholder="Category Name"
                    keyboardType="default"
                    maxLength={30}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => setExpense(value, "amount")}
                    value={amount}
                    placeholder="Amount"
                    keyboardType="numeric"
                    maxLength={12}
                    returnKeyType="go"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => setExpense(value, "date")}
                    value={date}
                    placeholder="Date (26/02/2022)"
                    keyboardType="default"
                    // maxLength={12}
                />
                <TouchableOpacity disabled={!validationsCheck} style={[styles.addExpenseBtn, {opacity: validationsCheck ? 1 : 0.5}]} onPress={() => addExpenseBtnClick()}>
                    <Text>Add Expense</Text>
                </TouchableOpacity>
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
        alignItems: 'center',
        marginTop: 50
    },
    text: {
        fontSize: 20
    },
    addExpenseBtn: {
        width: '50%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'cyan', 
        height: 50
    },
    input: {
        height: 40,
        width: '50%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default ExpenseCategoryScreen;