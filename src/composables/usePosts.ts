import api from '@/clients/axios';
import { ref } from 'vue';

export const usePosts = () => {
  const posts = ref([]);
  const getPosts = async () => {
    const response = await api.get('/posts');
    posts.value = response.data;
  }

  return {
    posts,
    getPosts
  }
}

export default usePosts;