import React, { useState } from 'react';
import { InputField } from './components/inputfield';
import './App.css'
import { Todo } from './models';
import { TodoList } from './components/todolist';



const App: React.FC = () => {

    // const [todo, setTodo] = useState<string | number>("")

    const [todos, setTodos] = useState<Todo[]>([]) //declaring the array of todos using the Todo interface (this is same way you create an array of type or an interface)

    const handleAdd = (values:Todo) => {
        if (values.the_todo) {
            setTodos([...todos, {id:Date.now(), the_todo:values.the_todo, completed:values.completed}])
        }
    }



    return (
        <>
            <section className='bg-sky-700 min-h-screen py-24'>
                <div className='container mx-auto space-y-8'>
                    <h2 className='text-6xl font-bold text-center text-white'>Taskify</h2>
                    <div>
                        <InputField handleAdd={handleAdd} />
                    </div>

                    <div>
                        <TodoList todos={todos} setTodos={setTodos}/>
                    </div>
                </div>
            </section>
        </>
    )
};




export default App;