import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import styles from './Styles';

export default class Article extends React.Component {
  render() {
    const {
      title,
      author,
      description,
      source,
      urlToImage,
      url,
    } = this.props.article;
    const {
      noteStyle,
      titleStyle,
      container,
      desc,
      div,
      textBox,
      mainCard,
    } = styles;
    const defaultImg =
      'https://freepngimg.com/thumb/newspaper/5-2-newspaper-png-image.png';

    return (
      <View style={container}>
        <TouchableNativeFeedback
          useForeground
          onPress={() => Linking.openURL(url)}>
          <Card containerStyle={mainCard}>
            <Card.Image source={{ uri: urlToImage || defaultImg }} />
            <Card.Title style={titleStyle}>{title}</Card.Title>
            <Text style={desc}>{description || 'Read More..'}</Text>
            <Divider style={div} />
            <View style={textBox}>
              <Text style={noteStyle}>{author.toUpperCase()}</Text>
            </View>
          </Card>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
