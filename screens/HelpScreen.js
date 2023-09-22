/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';


const HomeScreen = ({}) => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
     <View style={styles.cardsWrapper}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Procedure Of Cocktail Detection
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/Untitled1.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
           
           
            <Text style={styles.cardDetails}>
            First you need to click Get start button
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/Untitled2.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
          
            <Text style={styles.cardDetails}>
              Then you need to Enter the
              Username = (testuser) and password = (testpass) Then click Sign in button
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/Untitled3.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
         
         
            <Text style={styles.cardDetails}>
             Now you can see home screen when you click camera icon you navigate take picture page
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/Untitled4.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
          
            <Text style={styles.cardDetails}>
              Now you have to click that camera icon
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/Untitled5.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
          
            <Text style={styles.cardDetails}>
              Now you can see Three option when you need capture image then click take photo button also you can pick photos from gallery 
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/Untitled6.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
          
            <Text style={styles.cardDetails}>
             After you take picture you have to click prediction button then its navigate prediction result page
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/Untitled7.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
          
            <Text style={styles.cardDetails}>
              Lastly you can see result of prediction
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    
  },
  card: {
    height: 250,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
