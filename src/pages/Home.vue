<template>
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  </template>
  
  <script setup>
  import { useHead } from '@unhead/vue';
  useHead({
  title: 'Testing HOME',
  meta: [
    { name: 'description', content: 'Testing description' },

    // Open Graph / Facebook
    { property: 'og:url', content: 'https://dev.api-aikrut.umgclouds.com' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Testing' },
    { property: 'og:description', content: 'Testing description' },
    { property: 'og:image', content: 'https://helpful-lokum-b47748.netlify.app/030f8798-7e96-48d7-a0c2-682a0fbdc6d3.png' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'helpful-lokum-b47748.netlify.app' },
    { property: 'twitter:url', content: 'https://dev.api-aikrut.umgclouds.com' },
    { name: 'twitter:title', content: 'Testing' },
    { name: 'twitter:description', content: 'Testing description' },
    { name: 'twitter:image', content: 'https://helpful-lokum-b47748.netlify.app/030f8798-7e96-48d7-a0c2-682a0fbdc6d3.png' },
  ],
})
  </script>
  