<script setup lang="ts">
import type { PropType } from 'vue';
import type { Post } from '../models/post';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  postData: {
    type: Object as PropType<Post>,
    required: true
  },
  isDetail: {
    type: Boolean,
    default: false
  }
})

const onClick = () => {
  if (!props.isDetail) {
    router.push(`/posts/${props.postData.id}`);
  }
}
</script>

<template>
  <div class="post" :class="{ 'post-detail': isDetail }" @click="onClick">
    <h2>{{ postData.title }}</h2>
    <p>{{ postData.body }}</p>
  </div>
</template>

<style scoped>
.post {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 6px;
}

.post:hover:not(.post-detail) {
  cursor: pointer;
}
</style>