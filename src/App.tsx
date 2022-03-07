import { useState } from 'react';
import './App.css';

interface Props {
	title: string;
}
interface Task {
	id: number;
	title: string;
	description: string;
	completed: boolean;
}

export function App({ title }: Props) {
	const [task, setTask] = useState<Task[]>([
		{
			id: 1,
			title: 'Learning React',
			description: 'With types',
			completed: false,
		},
	]);
	return (
		<div className="App">
			<h2>{title}</h2>
			{task.map((t, index: number) => (
				<div key={index}>
					<h1>{t.title}</h1>
				</div>
			))}
		</div>
	);
}
