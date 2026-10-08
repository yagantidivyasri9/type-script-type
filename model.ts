type TaskStatus = "todo" | "in-progress" | "done";

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

let nextId = 1;

function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title,
    status: "todo"
  };

  return [...tasks, newTask];
}

function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((t) =>
    t.id === id ? { ...t, status: "done" } : t
  );
}

function filterByStatus(
  tasks: Task[],
  status: TaskStatus
): Task[] {
  return tasks.filter((t) => t.status === status);
}

// Extra operation
function countByStatus(
  tasks: Task[],
  status: TaskStatus
): number {
  return tasks.filter((t) => t.status === status).length;
}