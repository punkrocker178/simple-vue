<script setup>
import { usePostsStore } from '@/stores/allPosts';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Post from '../components/Post.vue';
import Comment from '../components/Comment.vue';
import { usePosts } from '@/composables/usePosts';

const route = useRoute();
const { getPostById } = usePosts();

const postId = computed(() => route.params.id);

const storedData = computed(() => usePostsStore().getPostById(Number(postId.value)));
const post = ref(null); 

const isLoading = computed(() => post.value === null);

onMounted(async () => {
  if (!storedData.value) {
    post.value = await getPostById(postId.value);
  } else {
    post.value = storedData.value;
  }
});
</script>
<template>
  <Post v-if="!isLoading" :postData="post" :isDetail="true" />

  <div>Comments</div>
  <Comment :postId="postId" />
</template>