<script setup>
import { ref, onUnmounted, watch } from 'vue';
import CountDownTimer from '../components/CountDownTimer.vue';


let date = ref(null);
let interval = null;
let remainingSeconds = ref(0);

const startTimer = () => {
  interval = setInterval(() => {
    const unix = new Date(date.value).getTime() / 1000;
    const now = Math.floor(Date.now() / 1000);
    const diff = unix - now;
    if (diff < 0) {
      clearInterval(interval);
      return;
    }
    remainingSeconds.value = diff;
  }, 1000)
}

watch(date, (newDate) => {
  if (newDate) {
    clearInterval(interval);
    remainingSeconds.value = 0;
  }
});


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
    <CountDownTimer :seconds="remainingSeconds" />
</template>