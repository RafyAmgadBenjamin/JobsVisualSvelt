import Workers from './routes/Workers.svelte';
import Tasks from './routes/Tasks.svelte';

let routes
routes = new Map()
// routes.set('/', Workers)
routes.set('/workers', Workers)
routes.set('/tasks', Tasks)

export default routes
