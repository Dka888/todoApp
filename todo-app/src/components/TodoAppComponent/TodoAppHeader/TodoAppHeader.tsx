/* eslint-disable jsx-a11y/control-has-associated-label */
// import cn from 'classnames';
import { TodoForm } from './TodoForm';
import { useTodosContext } from '../../../Context/TodosContext';

export const TodoAppHeader = () => {
  const {
    todos, handleToggleComplete,
  } = useTodosContext();
  const isActive = todos.filter(todo => !todo.completed).length > 0;

  return (
    <header className="todoapp__header">
      <button
        type="button"
        className={
          isActive 
          ? 'todoapp__toggle-all active' 
          : 'todoapp__toggle-all'
        }
        onClick={handleToggleComplete}
      />

      <TodoForm />
    </header>
  );
};
