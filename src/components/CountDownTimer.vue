<script setup>
import { ref, computed, onUnmounted } from 'vue';

let timer = ref(null);
function formatRemainingSeconds(totalSeconds) {
  let s = Math.max(0, Math.floor(totalSeconds));
  const days = Math.floor(s / 86400);
  s %= 86400;
  const hours = Math.floor(s / 3600);
  s %= 3600;
  const minutes = Math.floor(s / 60);
  const seconds = s % 60;
  const pad = (n) => n.toString().padStart(2, '0');
  let result = `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  if (days > 0) result = `${days}d ${result}`;
  return result;
}

let timerDisplay = computed(() => {
  if (timer.value == null) return '00d 00h 00m 00s';
  return formatRemainingSeconds(timer.value);
});
let date = null;
let interval = null;

const startTimer = () => {
  interval = setInterval(() => {
    const unix = new Date(date).getTime() / 1000;
    const now = Math.floor(Date.now() / 1000);
    const diff = unix - now;
    if (diff < 0) {
      clearInterval(interval);
      return;
    }
    timer.value = diff;
  }, 1000)
}

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
    <div>
        <h1>Count Down Timer</h1>
        <input type="date" v-model="date" />
        <button @click="startTimer">Start</button>
    </div>
    <div class="countdown-display">
      {{ timerDisplay }}
    </div>
</template>

<style scoped>
.countdown-display {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}
</style>