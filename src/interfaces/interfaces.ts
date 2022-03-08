export interface Props {
	title: string;
}
export interface Task {
	id?: number;
	title: string;
	description: string;
	completed?: boolean;
}

export interface NewTask {
	addTask: (task: Task) => void;
}
