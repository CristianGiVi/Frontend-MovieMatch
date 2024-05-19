// Importa el componente AppRouter desde la carpeta Router
import { AppRouter } from "./Router/AppRouter";

// Define y exporta el componente principal App
export function App() {
  return (
    <>
      {/* Renderiza el componente AppRouter, encargado de gestionar las rutas de la aplicación */}
      <AppRouter />
    </>
  );
}

