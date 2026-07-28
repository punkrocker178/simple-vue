<script setup>
import { computed } from 'vue';

const props = defineProps({
  seconds: Number
});

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
  if (props.seconds == null) return '00d 00h 00m 00s';
  return formatRemainingSeconds(props.seconds);
});

</script>

<template>
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