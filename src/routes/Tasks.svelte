<script>
	import TasksRendering from './TasksRendering.svelte';
	import workersData from '/home/rafy/svelte/my-svelte-project/src/data.js';

	let workers = workersData.workers;

	var allTasks = [];

	allTasks = getAllTaks();

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
	console.log("working")
</script>

<style>

</style>

<!--[Header]-->
<h1>Tasks</h1>
<TasksRendering  allTasks = {allTasks}/>			