import { Navigate, Route, Routes ,} from "react-router-dom";
import { HomePage } from "./HomePage";
import { AbouPage } from "./AbouPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      
      <Navbar/>
      <hr />

{/* objeto chilchen */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AbouPage />} />
        <Route path="login" element={<LoginPage />} />

        {/* 404 pagina no encontrada . si al navigate to ="/"  con ese añadiido del navigatir podemos dirigir al usurio alguna pagina de nuestro crterio*/}
        <Route path="/*" element={<Navigate to="/about" /> } />
      </Routes>
    </UserProvider>
  );
};
