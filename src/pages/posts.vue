<script setup>
import { usePosts } from '@/composables/usePosts';
import { usePostsStore } from '@/stores/allPosts';
import { onMounted, computed } from 'vue';
import Post from '../components/Post.vue';

const { getPosts } = usePosts();
const posts = computed(() => usePostsStore().postData);

onMounted(async () => {
  if (posts.value.length === 0) {
    await getPosts();
  }
});
</script>

<template>
  <div>
    <h1>Posts</h1>
    <div v-for="post in posts" :key="post.id">
      <Post :postData="post" />
    </div>
  </div>
</template>