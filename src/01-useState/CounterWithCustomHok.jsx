import { usesCounter } from "../Hooks/usesCounter";

export const CounterWithCustomHok = () => {
  const { counter, aumento, menor, rest } = usesCounter(); //TODO: valor desestructurado del hook

  return (
    <>
      <h1>Counter With CustomHok: {counter}</h1>

      <hr />
      <button className="btn btn-primary" onClick={()=> aumento (2)}>
        +1
      </button>

      <button className="btn btn-warning" onClick={rest}>
        Rest
      </button>

      <button className="btn btn-info" onClick={ ()=> menor (2)}>
        -1
      </button>
    </>
  );
};
