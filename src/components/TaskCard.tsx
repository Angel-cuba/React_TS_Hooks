import { Task } from '../interfaces/interfaces';

interface Props {
	task: Task;
}

export default function TaskCard({ task }: Props) {
	return (
		<div className="card card-body bg-secondary rounded-0 text-dark">
			<h1>{task.title}</h1>
			<p>{task.id}</p>
			<p>{task.description}</p>
			<button className="btn btn-danger">Delete</button>
		</div>
	);
}
