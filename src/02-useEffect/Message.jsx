import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    //Recommendation always assign a function
    const onMouseMove = ({ x, y }) => {
      const coods = { x, y };

      console.log(coods);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener( 'mousemove', onMouseMove);
    };
  }, []);


  return (
    <>
      <h1>User already exists</h1>
    </>
  );
};
//when a function enters an event it is at the beginning and the delete function or the return that deletes blocks it