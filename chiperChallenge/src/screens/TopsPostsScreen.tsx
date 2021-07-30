import React, { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import PostCard from '../components/PostCard';
import { usePosts } from '../hooks/usePosts';

const TopsPostsScreen = () => {
  const { posts, isLoading, getPosts } = usePosts('/top.json');
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = async () => {
    setRefreshing(true);
    await getPosts();
    setRefreshing(false);
  };

  if(isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'black' }}>
        <ActivityIndicator color="white" size={25} />
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: '#000', paddingTop: 5 }}>
      <FlatList
        data={posts}
        renderItem={({ item }: any) => (
          <PostCard post={item} />
        )}
        keyExtractor={post => post?.data?.id.toString()}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  )
}

export default TopsPostsScreen
