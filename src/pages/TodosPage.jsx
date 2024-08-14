import Todo from "../components/Todo"

const array = ["todo 1", "todo 2", "todo 3"];
function TodosPage() {
    return (
        <>

            {
                array.map((el, index) => <Todo todo = {el}/>)
            }

        </>
    );
}

export default TodosPage;