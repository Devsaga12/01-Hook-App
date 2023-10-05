// import { memo } from "react"
import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Nuevo Disparo :)");
  return <small>{value}</small>;
});
