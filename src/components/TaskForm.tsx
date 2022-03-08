import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { NewTask, Task } from '../interfaces/interfaces';

export default function TaskForm({ addTask }: NewTask) {
	const initialTask = {
		title: '',
		description: '',
	};

	const [task, setTask] = useState<Task>(initialTask);
	const inputTitle = useRef<HTMLInputElement>(null);

	const handleInput = ({
		target: { name, value },
	}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setTask({ ...task, [name]: value });
	};

	const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTask(task);
		setTask(initialTask);
		inputTitle.current?.focus();
	};

	return (
		<div className="card-card-body bg-secondary text-dark p-3 text-center">
			<h1 className="pb-2">Add a Task</h1>
			<form onSubmit={handleNewTask}>
				<input
					type="text"
					placeholder="Write a title"
					className="form-control mb-3 rounded-0 shadow-none border-0"
					name="title"
					onChange={handleInput}
					value={task.title}
					autoFocus
				/>
				<textarea
					name="description"
					cols={30}
					rows={3}
					placeholder="Description..."
					className="form-control mb-3 rounded-0 shadow-none"
					onChange={handleInput}
					value={task.description}
				></textarea>
				<button className="btn btn-primary">
					Save
					<AiOutlinePlus />
				</button>
			</form>
		</div>
	);
}
