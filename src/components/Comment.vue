<script setup lang="ts">
import { usePosts } from '@/composables/usePosts';
import type { Comment } from '@/models/comment';
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
  postId: {
    type: String,
    required: true
  }
})

const { getCommentsByPostId } = usePosts();
const comments = ref<Comment[] | undefined>(undefined);
const isLoading = computed(() => comments.value === undefined);

onMounted(async () => {
  comments.value = await getCommentsByPostId(props.postId);
});
</script>

<template>
  <div v-if="isLoading">
    <p class="comment">Loading comments...</p>
  </div>
  <div v-else>
    <div v-for="comment in comments!" :key="comment.id" class="comment">
      <h3>{{ comment.name }} - {{ comment.email }}</h3>
      <p>{{ comment.body }}</p>
    </div>
  </div>
</template>

<style scoped>
.comment {
  padding: 10px;
  margin: 10px;
}
</style>