<script>
	export let allTasks = [];
	export let isError = false;
	const state = {
		RESULT: 'ok',
		ERROR: 'error',
	};
	console.log('tasks rendering module');

	var successCount;
	var failureCount;
	if (isError != true) {
		successCount = 0;
		failureCount = 0;
		allTasks.forEach(task => {
			task.state == 'ok' ? successCount++ : 0;
		});
		allTasks.forEach(task => {
			task.state == 'error' ? failureCount++ : 0;
		});
	}
</script>

<!--[Containder]-->
<div>
	<div class="row">
		<!--[Tasks-Data]-->
		<div class="col-xs-12">
			{#if isError != true}
				<!-- content here -->
				<table class="table table-striped">
					<!--[Tasks-Data-Headers]-->
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Category</th>
							<th scope="col">Time start</th>
							<th scope="col">Time end</th>
							<th scope="col">State</th>
							<th scope="col">Action name</th>
							<th scope="col">args</th>
							<th scope="col">kwargs</th>
							<th scope="col">Result</th>
							<th scope="col">Error</th>
						</tr>
					</thead>
					<!--[Tasks-Data-Body]-->
					<tbody>
						{#each allTasks as task, i}
							<tr>
								<th scope="row">{i + 1}</th>
								<td>{task.category}</td>
								<td>{task.time_start}</td>
								<td>{task.time_end}</td>
								{#if task.state == state.RESULT}
									<td>
										<span class="label label-pill label-success">
											{task.state}
										</span>
									</td>
								{:else if task.state == state.ERROR}
									<td>
										<span class="label label-pill label-danger">
											{task.state}
										</span>
									</td>
								{/if}

								<td>{task.action_name}</td>
								<td>{task.args}</td>
								<td>{task.kwargs}</td>
								<td>{task.result}</td>
								<td>{task.error}</td>
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

	{#if isError != true}
		<!--[Containder]-->
		<div class="row">
			<!--[Tasks-Data]-->
			<div class="col-xs-12">
				<!-- content here -->
				<table class="table table-striped">
					<!--[Tasks-Data-Headers]-->
					<thead>
						<tr>
							<th class="text-center" scope="col">Total tasks</th>
							<th class="text-center" scope="col">Success tasks</th>
							<th class="text-center" scope="col">failure tasks</th>
						</tr>
					</thead>
					<tbody class="text-center">
						<td>{allTasks.length}</td>
						<td>{successCount}</td>
						<td>{failureCount}</td>
					</tbody>
				</table>
			</div>
		</div>
	{/if}
</div>
