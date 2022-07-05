<template>
  <body class="box" style="margin-top: 100px;">
    
<div class="container">

  <main class="box px-3" style="margin: 50px; color: black;">
    <h1>Student Registration App.</h1>
    <p class="lead">Welcome to student registration single page application designed by Vue js, Node js and Mong DB. Here you 
      can register student to the database and view the registered students...
    </p>
    <p class="lead" style="margin: 50px;">
    <router-link to="/RegisterStudent" class="btn btn-lg btn-primary">Get Started</router-link>
    </p>
  </main>
</div>
  </body>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>


<style scoped>

.box {
  margin-top: 100px;
  height:100vh;
}
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; 
}



</style>
