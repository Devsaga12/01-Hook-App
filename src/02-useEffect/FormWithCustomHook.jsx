import { useForm } from "../Hooks/useForm";

export const FormWithCustomHook = () => {



  const {formState,inputChange,onResetForm,username,email,password }= useForm({
    //estado inicial
    username: '',
    email: '',
    password: '',
  });

  // const { username, email, password  } = useForm;
 

  return (
    <>
      <h1>Form with custom hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Name User"
        name="username"
        value={username}
        onChange={inputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="@icloud"
        name="email"
        value={email}
        onChange={inputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={inputChange}
      />
      <button onClick={ onResetForm } className="btn btn-primary mt-2">Borra</button>
    </>
  );
};
