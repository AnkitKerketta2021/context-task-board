import { AddTaskForm } from "./components/AddTaskForm";
import { Header } from "./components/Header";
import { Stats } from "./components/Stats";
import { TaskColumn } from "./components/TaskColumn";

export default function App() {
  return (
    <main className="app-shell">
      <Header />

      <Stats />

      <section className="workspace">
        <aside>
          <AddTaskForm />
        </aside>

        <div className="board">
          <div className="board-heading">
            <div>
              <p className="section-kicker">Workspace</p>
              <h2>Project tasks</h2>
            </div>
            <span>Shared through Context</span>
          </div>

          <div className="columns">
            <TaskColumn status="todo" />
            <TaskColumn status="progress" />
            <TaskColumn status="done" />
          </div>
        </div>
      </section>

      <footer className="learning-footer">
        <span>createContext</span>
        <span>useContext</span>
        <span>Provider</span>
        <span>Custom hooks</span>
        <span>Shared state</span>
      </footer>
    </main>
  );
}
