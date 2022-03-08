import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Props, Task } from './interfaces/interfaces';
import Logo from './logo.svg';

export function App({ title }: Props) {
	const [tasks, setTasks] = useState<Task[]>([
		{
			id: 1,
			title: 'Learning React',
			description: 'With types',
			completed: false,
		},
	]);

	const getCurrentTimestamp = (): number => new Date().getTime();

	const addTask = (task: Task) => {
		setTasks([...tasks, { ...task, id: getCurrentTimestamp(), completed: false }]);
	};

	const deleteTask = (id: number) => setTasks(tasks.filter((task) => task.id !== id));
	return (
		<div className="bg-dark" style={{ height: '100vh' }}>
			<nav className="navbar navbar-dark bg-primary">
				<div className="container">
					<a href="/" style={{ display: 'flex', alignItems: 'center' }}>
						<img src={Logo} style={{ width: '4rem' }} alt="Logo" />
						<h3 style={{ color: 'whitesmoke' }}>{title}</h3>
					</a>
				</div>
			</nav>

			<main className="container p-4">
				<div className="row">
					<div className="col-md-4 text-white">
						<TaskForm addTask={addTask} />
					</div>
					<div className="col-md-8">
						<div className="row">
							<TaskList tasks={tasks} deleteTask={deleteTask} />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
