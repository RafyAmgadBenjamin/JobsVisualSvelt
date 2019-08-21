<script>
import active from 'svelte-spa-router/active'
import {
		link,
		push,
		pop,
		replace,
		location,
		querystring,
	} from 'svelte-spa-router';
</script>
<div>
	<nav class="navbar navbar-inverse test">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">Jobs visualization</a>
			</div>
			<ul class="nav navbar-nav">
				<li class="_active">
					<a href="#">Home</a>
				</li>
				<li>
					<a href="/workers"  use:link >Workers</a>
				</li>
				<li>
					<a href="/tasks" use:link use:active={'/tasks/*', 'my-active'}>Tasks</a>
				</li>
			</ul>
		</div>
	</nav>
</div>

<style>
/* Style for "active" links; need to mark this :global because the router adds the class directly */
:global(a.my-active) {
    color: #9d9d9d !important;
}
</style>
