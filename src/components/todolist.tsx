import { Todo } from "../models";
import { SignleTodo } from "./singleTodo";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {

    // console.log(todos)

    return (
        <>
                <div className="px-6 xl:px-0 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        todos.map((each, i) => (
                            <SignleTodo todo={each} key={each.id} todos={todos} setTodos={setTodos} />
                        ))
                    }
                </div>
        </>
    )
}