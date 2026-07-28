import type { Post } from '@/models/post';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePostsStore = defineStore('allPosts', () => {
  const postData = ref<Post[]>([]);

  function setPosts(data: Post[]) {
    postData.value = data;
    return postData.value;
  }

  function getPosts() {
    return postData.value;
  }

  function getPostById(id: number) {
    return postData.value.find(post => post.id === id);
  }

  return {
    postData,
    setPosts,
    getPosts,
    getPostById
  }
});