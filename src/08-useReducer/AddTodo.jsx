import { useForm } from "../Hooks/useForm"

export const AddTodo = ({onewTodo}) => {

  const {  description , inputChange , onResetForm} =useForm ({
    description:'',
  });

  const submit =(event)=>{
    event.preventDefault();
    if ( description.lenght <=1) return;


    const newTodo={
        id: new Date().getTime(),
        done:false,
        description:description,

    }

    onewTodo(newTodo);
    onResetForm()

  }

  return (
    <form onSubmit={submit}>
            <input
              type="text"
              placeholder="Write Note "
              className="form-control"
              name="description"
              value={description}
              onChange={inputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-2">
              Agregar
            </button>
          </form> 
  )
}
