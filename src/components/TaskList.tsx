import { Task } from '../interfaces/interfaces';
import TaskCard from './TaskCard';

interface Props {
	tasks: Task[];
}

export default function TaskList({ tasks }: Props) {
	return (
		<>
			{tasks.map((task, index: number) => (
				<div key={index} className="col-md-4">
					<TaskCard task={task} />
				</div>
			))}
		</>
	);
}
