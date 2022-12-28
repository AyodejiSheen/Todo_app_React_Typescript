import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Todo } from '../models';


interface Props {
    handleAdd: (values: Todo) => void //the function is not returning r taking anything
}




export const InputField: React.FC<Props> = ({ handleAdd }) => {

    //useRef is like using document.getElementbyId,class...
    const inputRef = useRef<HTMLInputElement>(null)
    
    //creating  intialvalues for formik
    const intialValues: Todo = {
        id: NaN,
        the_todo: "",
        completed: false
    }

    //validationSchema--- to integrate validations on the form using Yup
    const validationSchema = Yup.object().shape({
        the_todo: Yup.string().required("Enter the Todo"),
    })


    return (
        <>
            {/* <form
                onSubmit={(e) => {
                    handleAdd(e)
                    inputRef.current?.blur()
                }}

                className="md:space-x-8 space-y-6 lg:w-2/3 mx-auto text-center">
                <input
                    ref={inputRef}
                    type="text" placeholder="Enter a task" className="rounded-full h-14 px-8 w-[80%] focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.6)] focus:outline-none focus:bg-sky-700 focus-border-white focus:border-4 focus:text-white shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]" value={todo} onChange={(e) => setTodo(e.target.value)} />

                <button type="submit" className="rounded-full border-4 border-white bg-sky-700 text-white font-semibold h-14 px-6 shadow-xl hover:shadow-none transition-all duration-300 hover:bg-white hover:text-sky-700">SUBMIT</button>
            </form> */}

            <div >
                <Formik
                    initialValues={intialValues}
                    onSubmit={(values, actions) => {
                        handleAdd(values);
                        actions.resetForm();
                        actions.setSubmitting(false);
                        inputRef.current?.blur();
                    }}
                    validationSchema={validationSchema}
                >
                    <Form className="md:space-x-8 space-y-6 lg:w-2/3 mx-auto text-center">
                        <Field innerRef={inputRef} autoFocus id="todo" name="the_todo" type="text" placeholder="Enter a task" className={`rounded-full h-14 px-8 w-[80%] focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.6)] focus:outline-none focus:bg-sky-700  focus:border-white focus:border-4 focus:text-white shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]`} />
                        <ErrorMessage name="the_todo" component="div" className="text-red-300 text-sm" />

                        <button type="submit" className="rounded-full border-4 border-white bg-sky-700 text-white font-semibold h-14 px-6 shadow-xl hover:shadow-none transition-all duration-300 hover:bg-white hover:text-sky-700">SUBMIT</button>
                    </Form>
                </Formik>
            </div>

        </>
    )
}
