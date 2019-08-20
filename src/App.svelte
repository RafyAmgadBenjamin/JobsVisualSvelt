<script>
	import Router from 'svelte-spa-router';
	import Workers from './routes/Workers.svelte';
	import Tasks from './routes/Tasks.svelte';
	// import active from 'svelte-spa-router';
	import routes from './routes'
	import {link, push, pop, replace, location, querystring} from 'svelte-spa-router'
</script>

<style>

</style>

<!--Navigtation bar-->
<div>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Jobs visualization bannel </a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="/#/workers">Workers</a></li>
      <li><a href="/#/tasks">Tasks</a></li>
    </ul>
  </div>
</nav>
</div>
<h1>parent</h1>
<div class="container">
	<!-- <Workers />
	<Tasks /> -->

	<!-- Show the router -->
	<Router {routes} />
</div>
