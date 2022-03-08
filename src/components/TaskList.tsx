import { Task } from '../interfaces/interfaces';
import TaskCard from './TaskCard';

interface Props {
	tasks: Task[];
	deleteTask: (id: number) => void;
}

export default function TaskList({ tasks, deleteTask }: Props) {
	return (
		<>
			{tasks.map((task, index: number) => (
				<div key={index} className="col-md-4">
					<TaskCard task={task} deleteTask={deleteTask} />
				</div>
			))}
		</>
	);
}
