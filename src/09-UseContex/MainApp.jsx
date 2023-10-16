import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AbouPage } from "./AbouPage";
import { LoginPage } from "./LoginPage";

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AbouPage />} />
        <Route path="login" element={<LoginPage />} />

        {/* 404 pagina no encontrada . si al navigate to ="/"  con ese añadiido del navigatir podemos dirigir al usurio alguna pagina de nuestro crterio*/}
        <Route path="/*" element={<Navigate to="/about" /> } />
      </Routes>
    </>
  );
};
