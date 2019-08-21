<script>
	import workersData from '/home/rafy/svelte/my-svelte-project/src/data.js';
	
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
		<div class="col-sm-12">
			<table class="table table-striped">
				<!--[Workers-Data-Headers]-->
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">Status</th>
						<th scope="col">Concurrentcy</th>
						<th scope="col">Completed Tasks</th>
						<th scope="col">Running Tasks</th>
						<th scope="col">Queues</th>
					</tr>
				</thead>
				<!--[Workers-Data-Body]-->
				<tbody>
					{#each workers as worker, i}
						<tr>
							<th scope="row">{i + 1}</th>
							<td>{worker.name}</td>
							{#if worker.status == status.ONLINE}
								<td>
									<span class="label label-pill label-success">
										{worker.status}
									</span>
								</td>
							{:else if worker.status == status.OFFLINE}
								<td>
									<span class="label label-pill label-danger">
										{worker.status}
									</span>
								</td>
							{/if}
							<td>{worker.concurrency}</td>
							<td>{worker.completedTasks}</td>
							<td>{worker.runningTasks}</td>
							<td>{worker.queues}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
