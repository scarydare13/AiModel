import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
   
   const [inputMessage,setInputMessage]=useState("")
  
   
   const handleButtonClick=()=>{
    console.log(inputMessage)
    fetch("https://api.openai.com/v1/completions",{
     method:"POST",
     headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer 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"
     },
     body:JSON.stringify({
      
      "prompt":inputMessage,
      "model": "gpt-3.5-turbo-instruct", 
     })
    }).then((response)=>response.json()).then((data)=>{
       console.log(data)
    })
   }

   const handleInputText=(Text)=>{
    setInputMessage(Text)
    console.log(Text)
   }


  return (
    <View style={styles.container}>
      <View style={styles.Result}>
      <Text>Output Will display here</Text>
      </View>
      
     <View style={styles.InputText}>
       <View style={{flex:1,marginLeft:10,marginBottom:20}}>
         <TextInput placeholder='Enter Your Text' onChangeText={handleInputText}/>
         </View>
     
      <TouchableOpacity onPress={handleButtonClick}>
        <Text style={styles.btn}>Send</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputText:{
    flexDirection:'row',

  },
  btn:{
    backgroundColor:"blue",
    padding:5   ,
    marginRight:10,
    marginBottom:20 
  },
  Result:{
    flex:1,
    justifyContent:'center'
  }

});
