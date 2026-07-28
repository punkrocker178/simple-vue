<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  dob: '',
  address: '',
});

const submitForm = () => {
  console.log(form, form.name);
};
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" />
      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="tel" id="phone" v-model="form.phone" />
      </div>
      <div>
        <label for="dob">Date of Birth</label>
        <input type="date" id="dob" v-model="form.dob" />
      </div>
      <div>
        <label for="address">Address</label>
        <input type="text" id="address" v-model="form.address" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>