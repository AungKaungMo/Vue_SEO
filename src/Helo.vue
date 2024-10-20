<template>
    <div>hahahahahahaiaa</div>
</template>
<script setup>
import { onMounted } from "vue";
import { useHead } from "@vueuse/head";

  useHead({
  title: 'Testing',
  meta: [
    { name: 'description', content: 'Testing with my purple' },

    // Open Graph / Facebook
    { property: 'og:url', content: 'https://helpful-lokum-b47748.netlify.app?v=1' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Testing' },
    { property: 'og:description', content: 'Testing with my purple' },
    { property: 'og:image', content: 'https://helpful-lokum-b47748.netlify.app/030f8798-7e96-48d7-a0c2-682a0fbdc6d3.png' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'helpful-lokum-b47748.netlify.app' },
    { property: 'twitter:url', content: 'https://helpful-lokum-b47748.netlify.app?v=1' },
    { name: 'twitter:title', content: 'Testing' },
    { name: 'twitter:description', content: 'Testing with my purple' },
    { name: 'twitter:image', content: 'https://helpful-lokum-b47748.netlify.app/030f8798-7e96-48d7-a0c2-682a0fbdc6d3.png' },
  ],
})

</script>