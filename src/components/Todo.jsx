import style from './todo.module.css';
function Todo({todo}) {
    return (
        <div className={style.div}>{todo}</div>
    );
}

export default Todo;