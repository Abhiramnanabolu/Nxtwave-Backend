Create a Task

POST /tasks✅ Accepts a title and description.✅ Assigns a unique ID.✅ Returns the created task.

Get All Tasks

GET /tasks✅ Returns a list of all tasks.

Get a Single Task

GET /tasks/:id✅ Returns task details by ID.❌ Returns 404 if not found.

Update a Task

PUT /tasks/:id✅ Updates a task's title or description.✅ Returns the updated task.

Delete a Task

DELETE /tasks/:id✅ Deletes a task.✅ Returns a success message.

Error Handling

⚠️ 400 Bad Request: Invalid request.⚠️ 404 Not Found: Task not found.⚠️ 500 Internal Server Error: Unexpected error.

