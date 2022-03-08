import React from 'react';

export default function TaskForm() {
	return (
		<div className="card-card-body bg-secondary text-dark p-3 text-center">
			<h1 className="pb-2">Add a Task</h1>
			<form>
				<input
					type="text"
					placeholder="Write a title"
					className="form-control mb-3 rounded-0 shadow-none border-0"
					name="title"
				/>
				<textarea
					name="description"
					cols={30}
					rows={3}
					placeholder="Description..."
					className="form-control mb-3 rounded-0 shadow-none"
				></textarea>
				<button className="btn btn-primary">Save</button>
			</form>
		</div>
	);
}
