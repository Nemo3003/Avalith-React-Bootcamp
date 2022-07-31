import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

  //quinto traemos el use form , comenzamos a destructurar, definimos onchange y onsubmit
    const { formState, onInputChange, onResetForm } = useForm({
        description: ''
    });
    const { description } = formState;
    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);
        onResetForm();
    }


    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="Tarea.."
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-2"
            >
                Agregar
            </button>
        </form>
    )
}