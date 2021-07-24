import { useEffect, useState } from "react"
import redditApi from "../api/redditAPI"
import { Data, RedditAPIResponse } from "../interfaces/redditInterface"

export const usePosts = (rute: string) => {

  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Data[]>([]);

  const getPosts = async () => {
    try {
      const res = await redditApi.get<RedditAPIResponse>(rute);
      const posts = res.data.data.children;
      setPosts(posts);
      setIsLoading(false);
    } catch (error) {
      console.log('Parece q hice demaciados llamados a la API y me bloqueo (?', error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {
    posts,
    isLoading,
  }
}