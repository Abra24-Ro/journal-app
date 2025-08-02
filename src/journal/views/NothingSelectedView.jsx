import { StarOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 3,
        px: 4,
        py: 6,
        textAlign: "center",
      }}
    >
      <Grid item>
        <StarOutlined sx={{ fontSize: 120, color: "white", mb: 2 }} />
      </Grid>

      <Grid item>
        <Typography variant="h5" color="white" fontWeight="medium">
          No hay nada seleccionado
        </Typography>
        <Typography variant="body1" color="white" sx={{ mt: 1 }}>
          Selecciona una nota existente o crea una nueva para comenzar.
        </Typography>
      </Grid>
    </Grid>
  );
};
