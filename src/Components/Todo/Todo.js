import PropTypes from "prop-types";
import styles from "./Todo.module.css";

export default function Todo({ text, id, deleteTodo, removeTodo }) {
  const { todoList__item } = styles;
  return (
    <li className={todoList__item} id={id}>
      <p className="todoList__text">{text}</p>
      <button
        className="completeBtn"
        type="button"
        onClick={() => removeTodo(id)}
      >
        Complete
      </button>
    </li>
  );
}

Todo.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  deleteTodo: PropTypes.func,
};
