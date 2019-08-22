<script>
	import TasksRendering from './TasksRendering.svelte';
	import workersData from '/home/rafy/svelte/my-svelte-project/src/data.js';

	let allTasks = workersData.jobs;

	allTasks.forEach(task => {task.state = task.state.toUpperCase()})
	console.log("working")
</script>

<style>

</style>

<!--[Header]-->
<h1>Tasks</h1>
<TasksRendering  allTasks = {allTasks}/>			