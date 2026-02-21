<!--
IMPORTANT NOTES
    - If the Vue App renders similar data in multiple places, extract it into a
      reusable.
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div class="post">
          <!-- Text Interpolation -->
          <h3 v-if="post.title" id="post-title">{{ post.title }}</h3>
          <p v-if="post.body" id="post-body"> {{ post.body }}</p>
          <p v-else><em>No content available.</em></p>
    </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default {
    name: 'PostItem',
    props: ['post']
}
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
</style>
