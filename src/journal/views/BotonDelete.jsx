import { Button, Grid, Tooltip } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

export const BotonDelete = ({ onClick }) => {
  return (
    <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
      <Tooltip title="Eliminar nota" arrow>
        <Button
          onClick={onClick}
          startIcon={<DeleteOutline />}
          sx={{
            backgroundColor: "#e53935",
            color: "white",
            fontWeight: "bold",
            borderRadius: "8px",
            textTransform: "none",
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#c62828",
              transform: "scale(1.05)",
            },
            px: 3,
            py: 1,
          }}
        >
          Eliminar
        </Button>
      </Tooltip>
    </Grid>
  );
};
