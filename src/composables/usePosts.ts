import api from '@/clients/axios';
import { usePostsStore } from '@/stores/allPosts';

export const usePosts = () => {
  const getPosts = async () => {
    const response = await api.get('/posts');
    usePostsStore().setPosts(response.data);
  }

  const getPostById = async (id: number) => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  }

  const getCommentsByPostId = async (postId: number) => {
    const response = await api.get(`/posts/${postId}/comments`);
    return response.data;
  }

  return {
    getPosts,
    getPostById,
    getCommentsByPostId
  }
}

export default usePosts;