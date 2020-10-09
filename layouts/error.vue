<template>
  <div class="error-page">
    <vs-alert relief>
    <h1>Oops, something went wrong!</h1>
    <strong>Back to <a href="/">safety</a>!</strong>
    </vs-alert>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
 margin:5em 5em;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
