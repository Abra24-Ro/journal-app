import { Box, Toolbar } from "@mui/material";
import { Navbar, SideBar } from "../components";
import { useState } from "react";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  const [handleSideBar, sethandleSideBar] = useState(false);

  const onToggleDrawer = () => {
    sethandleSideBar(!handleSideBar);
  };

  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      {/* Navbar */}
      <Navbar drawerWidth={drawerWidth} onToggleDrawer={onToggleDrawer} />

      {/* Sidebar */}
      <SideBar
        drawerWidth={drawerWidth}
        isOpen={handleSideBar}
        onToggleDrawer={onToggleDrawer}
      />

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f4f6f8", // opcional: color suave de fondo
          minHeight: "100vh",
        }}
      >
        {/* Espaciador para que el contenido no quede debajo del AppBar */}
        <Toolbar />

        {/* Renderizado de children */}
        {children}
      </Box>
    </Box>
  );
};
