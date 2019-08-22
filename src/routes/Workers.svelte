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

	const state = {
		RESULT: 'OK',
		ERROR: 'ERROR',
		NEW: 'NEW',
	};
	let workers = workersData.workers;
	const status = { ONLINE: 'online', OFFLINE: 'offline' };
	workers.forEach(worker => {worker.state = worker.state.toUpperCase()})
	console.log("workers",workers)
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
					<th scope="col">Id</th>
					<th scope="col">Halt</th>
					<th scope="col">Pid</th>
					<th scope="col">State</th>
					<th scope="col">Error</th>
					<th scope="col">Current Job</th>
					<th scope="col">Last Update</th>
					<th scope="col">Time Start</th>
					<th scope="col">Timeout</th>
				</tr>
			</thead>
			<!--[Workers-Data-Body]-->
			<tbody>
				{#each workers as worker, i}
					<tr>
						<th scope="row">{i + 1}</th>
						<td>
							<a href="/single-worker-tasks/{worker.id}" use:link>
								{worker.id}
							</a>
						</td>
						<td>{worker.halt}</td>
						<td>{worker.pid}</td>
						{#if worker.state == state.RESULT}
							<td>
								<span class="label label-pill label-success">
									{worker.state}
								</span>
							</td>
						{:else if worker.state == state.ERROR}
							<td>
								<span class="label label-pill label-danger">
									{worker.state}
								</span>
							</td>
						{:else if worker.state == state.NEW}
							<td>
								<span class="label label-pill label-primary">
									{worker.state}
								</span>
							</td>
						{/if}
						<td>{worker.error}</td>
						<td>{worker.current_job}</td>
						<td>{worker.last_update}</td>
						<td>{worker.time_start}</td>
						<td>{worker.timeout}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
