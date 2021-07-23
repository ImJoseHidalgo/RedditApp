import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

import { PostData } from '../interfaces/redditInterface';
import { RootStackParams } from '../navigation/NavigationController';

interface Props extends StackScreenProps<RootStackParams, 'WebViewScreen'>{};

const WebViewScreen = ({ route }: Props) => {

  const { top } = useSafeAreaInsets();

  const data = route.params;
  const uri = `http://reddit.com${data.permalink}`;

  return (
    <View style={{ marginTop: top, flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        source={{ uri }}
        javaScriptEnabled={true}
      />
    </View>
  );
}

export default WebViewScreen