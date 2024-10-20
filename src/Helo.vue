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
    { property: 'og:url', content: 'https://helpful-lokum-b47748.netlify.app' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Testing' },
    { property: 'og:description', content: 'Testing with my purple' },
    { property: 'og:image', content: 'https://opengraph.b-cdn.net/production/images/18d4e1a8-95d9-4bff-ae37-53602d95a8f9.png?token=2_Utk_JLEGhuIlQKBIII9HHYy2SvkRUO5Ab__o2T37s&height=800&width=457&expires=33265346557' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'helpful-lokum-b47748.netlify.app' },
    { property: 'twitter:url', content: 'https://helpful-lokum-b47748.netlify.app' },
    { name: 'twitter:title', content: 'Testing' },
    { name: 'twitter:description', content: 'Testing with my purple' },
    { name: 'twitter:image', content: 'https://opengraph.b-cdn.net/production/images/18d4e1a8-95d9-4bff-ae37-53602d95a8f9.png?token=2_Utk_JLEGhuIlQKBIII9HHYy2SvkRUO5Ab__o2T37s&height=800&width=457&expires=33265346557' },
  ],
})

</script>