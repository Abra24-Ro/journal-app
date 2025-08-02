import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

export const Navbar = ({ drawerWidth = 240, onToggleDrawer}) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      elevation={1}
    >
      <Toolbar>
        {/* Botón del menú lateral (solo visible en pantallas pequeñas) */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onToggleDrawer}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        {/* Contenedor de título y botón de logout */}
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ flex: 1 }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            fontWeight="bold"
            letterSpacing={1}
          >
            Journal App
          </Typography>

          <IconButton color="error" onClick={onLogout} aria-label="logout">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  drawerWidth: PropTypes.number,
  onLogout: PropTypes.func,
  onToggleDrawer: PropTypes.func,
};
