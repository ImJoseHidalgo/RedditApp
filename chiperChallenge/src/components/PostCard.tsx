import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image, Text, View } from 'react-native'
import { Data } from '../interfaces/redditInterface'
import { useNavigation } from '@react-navigation/core'
import { useDate } from '../hooks/useDate';

interface Props {
  post: Data;
}

const PostCard = ({ post }: Props) => {

  const { data } = post;
  const navigation = useNavigation();

  const { dateOfCreation } = useDate(data.created_utc);
    
  return (
    <TouchableOpacity 
      onPress={ () => navigation.navigate('WebViewScreen', data)}
      activeOpacity={0.75}
      style={ styles.cardContainer }
    >
      <Image source={{ uri: data.thumbnail }} style={ styles.image } />
      <View style={ styles.content }>
        <View style={ styles.contentTop }>
          <Text style={ styles.text }>{data.author}</Text>
          <Text style={ [styles.text, styles.time] }>{dateOfCreation}</Text>
        </View>
        <Text style={ [styles.text, styles.title] }>{data.title}</Text>
        <View style={ styles.contentBottom}>
          <Text style={ styles.text }>{data.num_comments}</Text>
          <Text style={ [styles.text, styles.score] }>{data.score}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PostCard

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#141414',
    flexDirection: 'row',
    height: 'auto',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
  },
  contentTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentBottom: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginVertical: 10,
    color: '#f4f4f4',
    fontWeight: 'bold',
    fontSize: 16
  },
  text: {
    flex: 1,
    color: '#c4c4c4',
    fontSize: 13,
  },
  time: {
    // backgroundColor: 'red',
  },
  score: {
    color: '#ff4800',
  },
  image: {
    width: 100,
    borderRadius: 5,
  }
})