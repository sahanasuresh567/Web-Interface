import React, { useEffect, useState } from "react";
import "./Todo.css";

function Todo() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    if (editId) {
      setTasks(
        tasks.map((item) =>
          item.id === editId
            ? {
                ...item,
                text: task,
                priority: priority,
                dueDate: dueDate,
              }
            : item
        )
      );
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
        priority: priority,
        dueDate: dueDate,
      };

      setTasks([...tasks, newTask]);
    }

    setTask("");
    setPriority("Medium");
    setDueDate("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const editTask = (item) => {
    setTask(item.text);
    setPriority(item.priority);
    setDueDate(item.dueDate);
    setEditId(item.id);
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((item) => !item.completed));
  };

  const filteredTasks = tasks.filter((item) => {
    const matchesSearch = item.text
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All"
        ? true
        : filter === "Active"
        ? !item.completed
        : item.completed;

    return matchesSearch && matchesFilter;
  });

  const completedCount = tasks.filter((item) => item.completed).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedCount / tasks.length) * 100);

  return (
    <div className={darkMode ? "todo-app dark" : "todo-app"}>

      <div className="todo-container">

        <div className="todo-header">
          <div>
            <h1>My Tasks</h1>
            <p>Organize your day and stay productive</p>
          </div>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="progress-card">
          <div className="progress-info">
            <span>Task Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="input-section">

          <input
            type="text"
            placeholder="What needs to be done?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <button onClick={addTask}>
            {editId ? "Update" : "+ Add Task"}
          </button>

        </div>

        <div className="tools">

          <input
            className="search"
            type="text"
            placeholder="🔍 Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="filters">
            <button
              className={filter === "All" ? "active" : ""}
              onClick={() => setFilter("All")}
            >
              All
            </button>

            <button
              className={filter === "Active" ? "active" : ""}
              onClick={() => setFilter("Active")}
            >
              Active
            </button>

            <button
              className={filter === "Completed" ? "active" : ""}
              onClick={() => setFilter("Completed")}
            >
              Completed
            </button>
          </div>

        </div>

        <div className="task-list">

          {filteredTasks.length === 0 ? (
            <div className="empty">
              <div>📋</div>
              <h3>No tasks found</h3>
              <p>Add a new task to get started.</p>
            </div>
          ) : (
            filteredTasks.map((item) => (
              <div
                className={
                  item.completed
                    ? "task-card completed"
                    : "task-card"
                }
                key={item.id}
              >

                <button
                  className="check-btn"
                  onClick={() => toggleTask(item.id)}
                >
                  {item.completed ? "✓" : ""}
                </button>

                <div className="task-content">

                  <h3>{item.text}</h3>

                  <div className="task-details">

                    <span
                      className={`priority ${item.priority.toLowerCase()}`}
                    >
                      {item.priority}
                    </span>

                    {item.dueDate && (
                      <span className="date">
                        📅 {item.dueDate}
                      </span>
                    )}

                  </div>

                </div>

                <div className="task-actions">

                  <button onClick={() => editTask(item)}>
                    ✏️
                  </button>

                  <button onClick={() => deleteTask(item.id)}>
                    🗑️
                  </button>

                </div>

              </div>
            ))
          )}

        </div>

        <div className="footer">

          <span>
            {tasks.length} tasks • {completedCount} completed
          </span>

          <button onClick={clearCompleted}>
            Clear Completed
          </button>

        </div>

      </div>

    </div>
  );
}

export default Todo;