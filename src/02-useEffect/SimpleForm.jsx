import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  //mantener el esatdo
  const [formState, setFormState] = useState({
    //estado inicial
    username: "usuario nuevo",
    email: "nuevo@gmail.com",
  });

  const { username, email } = formState; //TODO:interpolacion

  //valor de cambio
  const inputChange = ({ target }) => {
    const { name, value } = target;

    //cambio de estado
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('usesffect callbak')
  }, []);

  useEffect(() => {
    // console.log('email change')
  }, [email]); //TODO: disparo de cambio de email

  useEffect(() => {
    // console.log('formState change')
  }, [formState]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={inputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="@gmail.com"
        name="email"
        value={email}
        onChange={inputChange}
      />
      {username === "usuario nuevo2" && <Message />}
    </>
  );
};
