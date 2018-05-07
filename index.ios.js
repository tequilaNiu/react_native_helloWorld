import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

const MOCKED_MOVIES_DATA = [{
  title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}
}];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});

class SampleAppMovies extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    let movie = MOCKED_MOVIES_DATA[0];

    return (
      <View style={styles.container}>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
      </View>
    )
  }
}
AppRegistry.registerComponent('HelloWorldApp', () => SampleAppMovies);
