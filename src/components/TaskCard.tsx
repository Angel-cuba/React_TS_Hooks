import { Task } from '../interfaces/interfaces';

interface Props {
	task: Task;
	deleteTask: (id: number) => void;
}

export default function TaskCard({ task, deleteTask }: Props) {
	return (
		<div className="card card-body bg-secondary rounded-0 text-dark">
			<h1>{task.title}</h1>
			<p>{task.id}</p>
			<p>{task.description}</p>
			<button className="btn btn-danger" onClick={() => task.id && deleteTask(task.id)}>
				Delete
			</button>
		</div>
	);
}
