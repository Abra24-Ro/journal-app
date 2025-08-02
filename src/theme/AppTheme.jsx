import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { purpleTheme } from "./purpleTheme";

// Tema personalizado (puedes cambiar los colores)

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline /> {/* Normaliza los estilos base */}
      {children}
    </ThemeProvider>
  );
};
