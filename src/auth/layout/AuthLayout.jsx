import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

export const AuthLayout = ({ children, title = "Iniciar sesión" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid item>
        <Paper
          elevation={6}
          sx={{
            padding: 4,

            borderRadius: 3,
            width: { xs: "90vw", sm: 400, md: 450 },
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h5" textAlign="center" mb={3}>
            {title}
          </Typography>

          {/* Aquí puedes renderizar el contenido (formulario, botones, etc.) */}
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
};
