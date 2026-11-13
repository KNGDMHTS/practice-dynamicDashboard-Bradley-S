let tasks = [
    {taskName : "Study React", completed : true},
    {taskName : "Create Dashboard", completed : true},
    {taskName : "Brainstorm for Final", completed : false}
];

let tasksWithEmojis = tasks.map((task) => {
    if (task.completed) {
        return <li>{String.fromCodePoint(0x2705) + task.taskName}</li>        
    } else {
        return <li>{String.fromCodePoint(0x274C) + task.taskName}</li>
    }
});

function TaskList() {
    return <ul>
        {tasksWithEmojis}
    </ul>
}

export default TaskList;