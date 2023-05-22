import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import { firebase } from "../../firebase";
import { AuthContext } from "../context/AuthContext";



const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setAuth } = useContext(AuthContext);


  // useEffect(() => {
  //   firebase
  //     .firestore()
      
  //     .collection("payment")
  //     .doc(firebase.auth().currentUser.uid)
  //     .get()
  //     .then((snapshot) => {
  //       if (snapshot.exists) {
  //         setName(snapshot.data());
  //         setEmail(snapshot.data());
  //         setAuth(snapshot.data());
          
  //       } else {
  //         console.log("User does not exist");
  //       }
  //     });
  // }, []);

  // const fetchUserInfo = () => {
  //   const { uid } = auth().currentUser;
  //   // Discard fetch when user ID not defined
  //   if (!uid) return;
  //   const userRef = db.collection("payment").doc(uid);
  //   const doc = userRef.get();
  //   const userData = doc.data();
  //   setUser(userData);
  // };

  // // Get user on mount
  // useEffect(() => {
  //   fetchUserInfo();
  // }, []);

  // if (!user) return null;

  // useEffect(()=>{

  // },[]);
  


  return (
    <View>
      <CustomHeader />
      <View>
      {/* <Text>{auth.currentUser?.uid} </Text> */}
      {/* <Text style={styles.name}>{user && user?.Fname}</Text> */}
      {/* <Text style>{auth.currentUser?.email}</Text> */}
      {/* <Text style={styles.userInfo}>Florida </Text> */}
      <Text style={styles.text}>{name.firstName}</Text>
      <Text style={styles.text}>{email.email}</Text>

      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    top: 200,
    fontWeight: "bold",
  },

});
