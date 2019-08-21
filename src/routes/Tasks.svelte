<script>
	import workersData from '/home/rafy/svelte/my-svelte-project/src/data.js';
	export let params;

	let workers = workersData.workers;
	var isError = false;
	// let Tasks = workers.tasks;
	const status = {
		STARTED: 'started',
		RECEIVED: 'received',
		SUCCESS: 'success',
	};

	// let tasks = getSingleWorkerTasks(0);
	// console.log('tasks', tasks);

	var allTasks;

	if (params.taskId != null && params.taskId != undefined) {
		console.log('params', params.taskId);
		allTasks = getSingleWorkerTasks(params.taskId);
	} else {
		allTasks = getAllTaks();
	}

	// Getting tasks for each worker
	function getSingleWorkerTasks(workerId) {
		var workerTasks = [];
		var workerIndex;
		workerIndex = workers.findIndex(worker => worker.id == workerId);
		if (workerIndex == -1) {
			isError = true;
			return;
		}
		workers[workerIndex].tasks.forEach(task => {
			workerTasks.push(task);
		});
		return workerTasks;
	}

	function getAllTaks() {
		var allTasks = [];
		workers.forEach(worker => {
			let workerTasks = worker.tasks;
			workerTasks.forEach(task => {
				allTasks.push(task);
			});
		});
		return allTasks;
	}
</script>

<style>

</style>

<!--[Header]-->
<h1>Tasks</h1>

<!--[Containder]-->
<div class="row">
	<!--[Tasks-Data]-->
	<div class="col-sm-12">
		{#if isError != true}
			<!-- content here -->
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
		{:else}
			<!-- else content here -->
			<h3>There is no worker with this ID</h3>
		{/if}

	</div>
</div>
