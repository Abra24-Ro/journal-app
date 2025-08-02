import React from "react";
import { CircularProgress, Grid, Typography, Box, Paper } from "@mui/material";

export const CheckingAuth = () => {
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
        padding: 2,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 4,
          borderRadius: 4,
          backgroundColor: "background.paper",
          textAlign: "center",
          width: { xs: "90%", sm: 400 },
          maxWidth: 450,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Box mb={3}>
          <CircularProgress size={60} thickness={5} color="warning" />
        </Box>

        <Typography
          variant="h6"
          color="text.primary"
          fontWeight="bold"
          letterSpacing={1}
        >
          Verificando credenciales...
        </Typography>

        <Typography variant="body2" color="text.secondary" mt={1}>
          Por favor, espera unos segundos
        </Typography>
      </Paper>
    </Grid>
  );
};
