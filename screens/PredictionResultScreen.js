/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
// import Animated from 'react-native-reanimated';

const EditProfileScreen = () => {
  const [image, setImage] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      {/* style=
      {{
        height: 100,
        width: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}> */}
    <View style={styles.icon}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={{height: 100, width: 100}}
        // eslint-disable-next-line react-native/no-inline-styles
        imageStyle={{borderRadius: 15}}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="camera"
            size={105}
            color="#FF6347"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              opacity: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#FF6347',
              borderRadius: 10,
              
            }}
          />
        </View>
      </ImageBackground>
      </View>
      <View style={styles.action}>
        <FontAwesome name="pencil" color={colors.text} size={20} />
        <TextInput
          placeholder="Cocktail Name"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={[
            styles.textInput,
            {
              color: colors.text,
            },
          ]}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="pencil" color={colors.text} size={20} />
        <TextInput
          placeholder="Brand"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={[
            styles.textInput,
            {
              color: colors.text,
            },
          ]}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="pencil" color={colors.text} size={20} />
        <TextInput
          placeholder="Presentage"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={[
            styles.textInput,
            {
              color: colors.text,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  card: {
    height: 100,
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
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 15,
    paddingLeft: 20,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  icon: {
    paddingLeft: 150,
    marginTop: 90,
   
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
