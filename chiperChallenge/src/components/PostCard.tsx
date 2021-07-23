import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
          <View>
            <Text style={ styles.text }>{data.author}</Text>
          </View>
          <View>
            <Text style={ styles.text }>{dateOfCreation}</Text>
          </View>
        </View>
        <Text style={ [styles.text, styles.title] }>{data.title}</Text>
        <View style={ styles.contentBottom}>
          <View style={ styles.withIcon }>
            <Text style={ styles.text }>{data.num_comments}</Text>
            <Icon name="chatbubble-outline" size={15} color="#fff" style={ styles.icon } />
          </View>
          <View style={ styles.withIcon }>
            <Text style={ [styles.text, styles.score] }>{data.score}</Text>
            <Icon name="star-outline" size={15} color="#ff4800" style={ styles.icon } />
          </View>
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
    color: '#c4c4c4',
    fontSize: 13,
  },
  icon: {
    marginLeft: 5,
  },
  withIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  score: {
    color: '#ff4800',
  },
  image: {
    width: 100,
    borderRadius: 5,
  }
})