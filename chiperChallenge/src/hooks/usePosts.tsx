import { useEffect, useState } from "react"
import redditApi from "../api/redditAPI"
import { Data, RedditAPIResponse } from "../interfaces/redditInterface"

export const usePosts = (rute: string) => {

  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Data[]>([]);

  const getPosts = async () => {
    const res = await redditApi.get<RedditAPIResponse>(rute);
    const posts = res.data.data.children;
    setPosts(posts);
    setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {
    posts,
    isLoading,
  }
}