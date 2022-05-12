import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E'
const imageProfileGithub= 'https://avatars.githubusercontent.com/u/97065934?v=4'

const urlToMyGithub = 'https://github.com/365rafael'
const urlToMyLinkedIn = 'https://www.linkedin.com/in/rafael-arantes-06a6325b/'
const App = () => {

    const handlePressGoToGithub = async() =>{
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res){
          await  Linking.openURL(urlToMyGithub)
        }
    }
    const handlePressGoToLinkedIn = async() =>{
        const res = await Linking.canOpenURL(urlToMyLinkedIn);
        if (res){
          await  Linking.openURL(urlToMyLinkedIn)
        }
    }
  return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle='light-content'/>
      <View style={style.content}>
        <Image style={style.avatar} source={{uri: imageProfileGithub}} />
        <Text style={[style.defaultText, style.name]}>Rafael Arantes</Text>
        <Text style={[style.defaultText, style.nickName]}>365rafael</Text>
        <Text style={[style.defaultText, style.description]}>
        Desenvolvedor Fullstack Web e Mobile | JavaScript | React Native | Consultor Executivo Sumup Soluções
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
        <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
        </View>
        </Pressable>
        <Pressable onPress={handlePressGoToLinkedIn}>
        <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>Open in LinkedIn</Text>
        </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#010409',
    flex: 1, //expandir para a tela inteira
    justifyContent: 'center',
  },
  content:{
    alignItems: 'center',
    padding: 20,
  },
  avatar:{
      height: 200,
      width: 200,
      borderRadius: 100,
      borderColor: 'white',
      borderWidth: 2,
  },
  defaultText:{
      color: colorFontGithub,
  },
  name:{
      marginTop: 20,
      fontWeight: 'bold',
      fontSize: 24,
  },
  nickName:{
      color: colorDarkFontGithub,
      fontSize: 18,
  },
  description:{
      fontWeight: 'bold',
      fontSize: 14,
  },
  button:{
      backgroundColor: colorDarkFontGithub,
      borderRadius: 10,
      padding: 20,
      marginTop: 20,

  },
  textButton:{
      fontWeight:'bold',
      fontSize: 16,
  }
  
});
