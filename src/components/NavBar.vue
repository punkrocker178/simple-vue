<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar">
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
        <li>
          <RouterLink to="/countdown">Countdown</RouterLink>
        </li>
        <li>
          <RouterLink to="/posts">Posts</RouterLink>
        </li>
    </ul>
  </nav>
</template>