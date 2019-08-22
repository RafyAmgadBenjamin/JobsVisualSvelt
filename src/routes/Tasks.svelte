<script>
	import TasksRendering from './TasksRendering.svelte';
	import workersData from '/home/rafy/svelte/my-svelte-project/src/data.js';

	let allTasks = workersData.jobs;
	//Make all the states UpperCase
	allTasks.forEach(task => {
		task.state = task.state.toUpperCase();
	});
</script>

<style>

</style>

<!--[Header]-->
<h1>Tasks</h1>
<TasksRendering {allTasks} />
