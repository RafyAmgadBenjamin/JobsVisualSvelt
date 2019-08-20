<script>
	import workersData from '/home/rafy/svelte/my-svelte-project/src/data.js';

	let workers = workersData.workers;

	// let Tasks = workers.tasks;
	const status = {
		STARTED: 'started',
		RECEIVED: 'received',
		SUCCESS: 'success',
	};

	let tasks = getSingleWorkerTasks(0);
	console.log('tasks', tasks);

	// Getting tasks for each worker
	function getSingleWorkerTasks(workerId) {
		var tasks = [];
		workers[workerId].tasks.forEach(task => {
			tasks.push(task);
		});
		return tasks;
	}
	var allTasks = getAllTaks();
	console.log('all tasks', allTasks);

	//Getting tasks from all workers
	function getAllTaks() {
		var allTasks = [];
		for (var worker in workers) {
			//Getting tasks for each Worker
			let workerTasks = getSingleWorkerTasks(worker);
			workerTasks.forEach(task => {
				allTasks.push(task);
			});
		}
		return allTasks;
	}
	console.log(tasks);
</script>

<style>

</style>

<!--[Header]-->
<h1>Tasks</h1>
<!--[Containder]-->
<div class="row">
	<!--[Tasks-Data]-->
	<div class="col-sm-12">
		<table class="table table-striped">
			<!--[Tasks-Data-Headers]-->
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Name</th>
					<th scope="col">UUID</th>
					<th scope="col">Status</th>
					<th scope="col">args</th>
					<th scope="col">kwargs</th>
					<th scope="col">Result</th>
				</tr>
			</thead>
			<!--[Tasks-Data-Body]-->
			<tbody>
				{#each allTasks as task, i}
					<tr>
						<th scope="row">{i + 1}</th>
						<td>{task.name}</td>
						<td>{task.uuid}</td>

						{console.log("status",task.status)}

						{#if task.status == status.SUCCESS}
							<td>
								<span class="label label-pill label-success">
									{task.status}
								</span>
							</td>
						{:else if task.status == status.RECEIVED}
							<td>
								<span class="label label-pill label-primary">
									{task.status}
								</span>
							</td>
						{:else if task.status == status.STARTED}
							<td>
								<span class="label label-pill label-danger">
									{task.status}
								</span>
							</td>
						{/if}

						<td>{task.args}</td>
						<td>{task.kwargs}</td>
						<td>{task.result}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
