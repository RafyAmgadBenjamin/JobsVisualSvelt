<script>
	import workersData from '/home/rafy/svelte/my-svelte-project/src/data.js';
	import {
		link,
		push,
		pop,
		replace,
		location,
		querystring,
	} from 'svelte-spa-router';

	let workers = workersData.workers;
	const status = { ONLINE: 'online', OFFLINE: 'offline' };
</script>

<style>

</style>

<!--[Header]-->
<h1>Workers</h1>
<!--[Containder]-->
<div class="row">
	<!--[Workers-Data]-->
	<div class="col-xs-12">
		<table class="table table-striped">
			<!--[Workers-Data-Headers]-->
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Pid</th>
					<th scope="col">Time start</th>
					<th scope="col">Last update</th>
					<th scope="col">Current job</th>
					<th scope="col">Running</th>
				</tr>
			</thead>
			<!--[Workers-Data-Body]-->
			<tbody>
				{#each workers as worker, i}
					<tr>
						<th scope="row">{i + 1}</th>
						<td>
							<a href="/single-worker-tasks/{worker.pid}" use:link>{worker.pid}</a>
						</td>
						<td>{worker.time_start}</td>
						<td>{worker.last_update}</td>
						<td>{worker.current_job}</td>
						<td>{worker.running}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
