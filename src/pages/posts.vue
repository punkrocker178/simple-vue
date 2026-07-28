<script setup>
import { usePosts } from '@/composables/usePosts';
import { onMounted } from 'vue';

const { posts, getPosts } = usePosts();

onMounted(async () => {
  await getPosts();
  console.log(posts.value);
});
</script>