
import { useFetch, usesCounter } from "../Hooks";
import { LoadingQuote, Quote } from "../03-example";

export const Layou = () => {
  const { counter, aumento } = usesCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/ ${counter}`
  );
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
      <button
        className="btn btn-success mt-1"
        disabled={isLoading}
        onClick={() => aumento(1)}
      >
        {" "}
        Nex Quote
      </button>
    </>
  );
};
