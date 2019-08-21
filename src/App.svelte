<script>
	import Router from 'svelte-spa-router';
	import Workers from './routes/Workers.svelte';
	import Tasks from './routes/Tasks.svelte';
	import Navigtation from './Navigation.svelte';
	// import active from 'svelte-spa-router';
	import routes from './routes';
	import {
		link,
		push,
		pop,
		replace,
		location,
		querystring,
	} from 'svelte-spa-router';
</script>

<style>

</style>

<!--Navigtation bar-->
<div>
	<Navigtation />
</div>
<h1>parent</h1>
<div class="container">
	<!-- <Workers />
	<Tasks /> -->

	<!-- Show the router -->
	<Router {routes} />
</div>
