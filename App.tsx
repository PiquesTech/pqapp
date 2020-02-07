import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase, { firestore } from 'firebase';
import { Button, Input, Image } from 'react-native-elements';

const firebaseConfig = {
  apiKey: "AIzaSyA2oHeL9UJBzgG3eMq8SKtqFamFq2mMb9Q",
  authDomain: "piques-me.firebaseapp.com",
  databaseURL: "https://piques-me.firebaseio.com",
  projectId: "piques-me",
  storageBucket: "piques-me.appspot.com",
  messagingSenderId: "173769636251",
  appId: "1:173769636251:web:7ef19a15bf3541f4"
};

firebase.initializeApp(firebaseConfig);
let storage = firebase.storage();

type AppState = {
  redeemCode: string,
  images: any,
};

const INITIAL_STATE = {
  redeemCode: '',
  images: [],
};

export default class App extends React.Component<any, AppState> {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  retrieveImages = () => {
    // Retrieve all images in the folder
    var listRef = storage.ref().child('')
    // Update the state with those images
    this.setState({
      images: ['https://firebasestorage.googleapis.com/v0/b/piques-me.appspot.com/o/pique-previews%2F7u7u7u7u%2Fpqthumb_aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg?alt=media&token=54a51188-52ac-4ec7-aeab-4f52c2b70903'],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder='Piques code here'
          onChangeText={redeemCode => this.setState({ redeemCode })}
        />
        <Button
          title="Go"
          onPress={this.retrieveImages}
        />
        {this.state.images.map((imageUrl) => {
          return (
            <Image
              source={{ uri: imageUrl }}
              style={{ width: 200, height: 200 }}
            />
          )
        })}
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
