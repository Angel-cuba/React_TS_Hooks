import { Task } from '../interfaces/interfaces';

interface Props {
	task: Task;
}

export default function TaskCard({ task }: Props) {
	return (
		<div>
			<h1>{task.title}</h1>
		</div>
	);
}
