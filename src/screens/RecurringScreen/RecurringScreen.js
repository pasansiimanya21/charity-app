import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
    TextInput,
    Pressable,
  } from "react-native";
import React, { useContext, useState} from "react";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import { PaymentContext } from "../../context/PaymentContext";
import CustomButton from "../../components/CustomButton/CustomButton";


const RecurringScreen =()=>{
    return(
        <View>
            <CustomHeader></CustomHeader>
            <Text style={styles.headtext}>Recurring Payments</Text>

            <Text style={styles.text1}>Select your time period</Text>

            <Text style={styles.text2}>Select the amount</Text>



            <View style={{top:400}}>
                <CustomButton  text="DONATE"></CustomButton>
            </View>
        
        </View>
    )

}

const styles =StyleSheet.create({
    headtext:{
        color:'#000000',
        alignSelf:'center',
        top:120,
        fontWeight:'bold',
        fontSize:20,
    },

    text1:{
        color:'#000000',
        top:200,
        left:20,
        fontWeight:'bold',
        fontSize:15,
        
    },

    text2:{
        color:'#000000',
        top:400,
        fontWeight:'bold',
        left:20,
        fontSize:15,
        
    },
})



export default RecurringScreen;