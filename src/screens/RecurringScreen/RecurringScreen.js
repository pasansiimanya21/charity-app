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
import { CardField} from "@stripe/stripe-react-native";
import CustomButton from "../../components/CustomButton/CustomButton";


  const DonateAmount =()=>{
    
    const navigation = useNavigation();
    const { setDonation } = useContext(PaymentContext);
    const [amount, setAmount] =useState('');

    
    
    return(

        <View>
        <CustomHeader></CustomHeader>
        <Text style={styles.headtext}>Recurring Payment</Text>

        <View style={styles.inputcontainer}>
                <TextInput 
                    placeholder="Enter Amount"
                    value={amount}
                    onChangeText={amount=>setAmount(amount)} 
                    style={styles.input}
                    
                />
        </View>
        <View style={{ marginTop: 250 }}>
        <CardField
          postalCodeEnabled={false}
          placeholders={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={{
            backgroundColor: "#FFFFFF",
            textColor: "#000000",
          }}
          style={{
            width: "100%",
            height: 50,
          }}
         
          onFocus={(focusedField) => {
            console.log("focusField", focusedField);
          }}
        />
      </View>

      <View style={{top:30}}>
        <CustomButton text="DONATE"></CustomButton>
        </View>

        
        </View>       
    )

  };

  const styles =StyleSheet.create({
    inputcontainer:{
        backgroundColor:'#FFFFFF',
        width:250,
        height:50,
        borderColor:'#FFFFFF',
        borderRadius:10,
        borderWidth:2,
        top:200,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:5,
    },

   text:{
        color:'#000000',
        alignSelf:'center',
        top:20,
        fontWeight:'bold',
    },

    

      headtext:{
        color:'#000000',
        alignSelf:'center',
        top:140,
        fontWeight:'bold',

    },
})



  export default DonateAmount;