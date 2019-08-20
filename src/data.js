export default
    {

        "workers": [
            {
                "id": "32dsf34",
                "name": "celery1.pi.local",
                "status": "online",
                "concurrency": 4,
                "completedTasks": 13902,
                "runningTasks": 0,
                "queues": ["images", "data", "video"],
                "tasks": [
                    { "name": "tasks.sleep", "uuid": "1233324-1234dsf-34dsr-34drfds", "status": "success", "args": "[5]", "kwargs": "{}", "result": "5" },
                    { "name": "tasks.sleep", "uuid": "3fe4354-1234dsf-34dsr-34drfds", "status": "started", "args": "[5]", "kwargs": "{}", "result": "5" },
                    { "name": "tasks.sleep", "uuid": "343nj4n-1234dsf-34dsr-34drfds", "status": "success", "args": "[5]", "kwargs": "{}", "result": "5" },
                    { "name": "tasks.sleep", "uuid": "dfsadsf-1234dsf-34dsr-34drfds", "status": "received", "args": "[5]", "kwargs": "{}", "result": "5" },
                ]

            }, {
                "id": "FASDF34",
                "name": "celery2.pi.local",
                "status": "online",
                "concurrency": 2,
                "completedTasks": 13900,
                "runningTasks": 0,
                "queues": ["images", "data", "video"],
                "tasks": [
                    { "name": "tasks.sleep", "uuid": "dfsadsf-1234dsf-34dsr-34drfds", "status": "received", "args": "[5]", "kwargs": "{}", "result": "5" },
                ]
            },
            {
                "id": "2342k90dsf",
                "name": "celery3.pi.local",
                "status": "offline",
                "concurrency": 3,
                "completedTasks": 14500,
                "runningTasks": 0,
                "queues": ["images", "video"],
                "tasks": []
            }
        ],

    }
