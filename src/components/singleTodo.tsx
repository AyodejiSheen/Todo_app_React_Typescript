import { Todo } from "../models"
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { useState, useRef, useEffect } from 'react';

type Props = {
    todo: Todo,  // since its eachtodo and not an array or todos that we are passing we don include the []
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}



export const SignleTodo: React.FC<Props> = ({ todo, todos, setTodos, }) => {

    const [edit, setEdit] = useState<boolean>(false);

    const [editText, setEditText] = useState<string | number>(todo.the_todo)


    const handleDone = (id: number) => {
        setTodos(todos.map((eachTodo) => eachTodo.id === id ? { ...eachTodo, completed: !eachTodo.completed } : eachTodo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((each) => each.id !== id))
    }

    const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        setEdit(false)
        let miketoo = todos.find((each) => each.id === id)
        if(miketoo){
            miketoo.the_todo = editText
        }
        console.log(miketoo)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])


    return (
        <>
            <form onSubmit={(e) => handleEdit(e, todo.id)} className="flex justify-between items-center bg-yellow-500 p-5 rounded-xl text-lg font-medium shadow-lg">
                {
                    edit ? (
                        <>
                            <input
                                type="text"
                                ref={inputRef}
                                value={editText} onChange={(e) => setEditText(e.target.value)} className="focus:outline-none rounded-lg p-2 md:w-[70%]" />
                        </>
                    ) : (
                        todo.completed ? (
                            <s>{todo.the_todo}</s>
                        ) : (
                            <div>{todo.the_todo}</div>
                        )
                    )
                }

                <div className="flex items-center gap-4">
                    <div className="cursor-pointer" onClick={() => {
                        if (!todo.completed) {
                            setEdit(!edit)
                        }
                    }}><AiFillEdit /></div>
                    <div className="cursor-pointer" onClick={() => handleDelete(todo.id)}><AiFillDelete /></div>
                    <div className="cursor-pointer" onClick={() => handleDone(todo.id)}><MdDone /></div>
                </div>
            </form>

        </>
    )
}