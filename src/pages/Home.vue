<template>
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  </template>
  
  <script setup>
  import { useHead } from '@unhead/vue';
  
  useHead({
    title: 'Home - Car ATM',
    meta: [
      { name: 'description', content: 'Welcome to the Car ATM homepage, where you can find cars for sale and schedule service appointments.' }
    ]
  });
  </script>
  