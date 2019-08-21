import Workers from './routes/Workers.svelte';
import Tasks from './routes/Tasks.svelte';
import SingleWorkerTasks from './routes/SingleWorkerTasks.svelte';

let routes
routes = new Map()
// routes.set('/', Workers)
routes.set('/workers', Workers)
routes.set('/tasks', Tasks)
routes.set('/single-worker-tasks/:taskId', SingleWorkerTasks)

export default routes
