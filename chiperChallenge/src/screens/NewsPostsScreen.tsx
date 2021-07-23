import React from 'react'
import { ActivityIndicator, FlatList, View, TouchableOpacity, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PostCard from '../components/PostCard';
import { usePosts } from '../hooks/usePosts'

const NewsPostsScreen = () => {
  const { posts, isLoading } = usePosts('/new.json');
  const { top } = useSafeAreaInsets();
  
  if(isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'black' }}>
        <ActivityIndicator color="white" size={25} />
      </View>
    )
  }

  return (
    <View style={{ marginTop: top, backgroundColor: '#000', paddingTop: 5 }}>
      <FlatList
        data={posts}
        renderItem={({ item }: any) => (
          <PostCard post={item} />
        )}
        keyExtractor={post => post?.data?.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default NewsPostsScreen
