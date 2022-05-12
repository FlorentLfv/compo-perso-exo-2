import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextImage imageLink={require('./assets/mlem.jpg')} text='The mlem' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 400,
    height: 400,
    alignSelf: 'center',
  },
  textSize: {
    fontSize: 20,
    textAlign: 'center',
  },
});

const TextImage = (props) => {
  const { imageLink } = props;
  const { text } = props;
  return (
    <View>
      <Image source={imageLink} style={styles.image} />
      <Text style={styles.textSize}>{text}</Text>
    </View>
  )
}