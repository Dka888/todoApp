// import cn from 'classnames';
import { useTodosContext } from '../Context/TodosContext';

export const TodosError = () => {
  const { setMessageError, messageError } = useTodosContext();

  return (
    <div
      className={
        !messageError
          ? 'notification is-danger is-light has-text-weight-normal hidden'
          : 'notification is-danger is-light has-text-weight-normal'}
    >
      { /* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className="delete"
        onClick={() => setMessageError('')}
      />
      {messageError}
    </div>
  );
};
