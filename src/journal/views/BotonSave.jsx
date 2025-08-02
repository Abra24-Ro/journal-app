import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startSaveNote } from "../../store/journal/thunks";
import { UploadButton } from "./UploadButton";

export const BotonSave = ({ date, isSaving, onFileChange }) => {
  const dispatch = useDispatch();

  const onSaveNote = () => {
   
    dispatch(startSaveNote());
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      {/* Fecha */}
      <Grid item xs={12} sm={4} md={3}>
        <Typography
          variant="body1"
          sx={{
            color: "#616161", // gris elegante
            fontWeight: 400,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            textTransform: "capitalize",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {date}
        </Typography>
      </Grid>

      {/* Botón de subir imágenes en el centro (solo móvil) */}
      <Grid
        item
        xs={12}
        sm={0}
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          my: 1,
        }}
      >
        <UploadButton isSaving={isSaving} onFileChange={onFileChange} size={48} />
      </Grid>

      {/* Container para botones en pantallas medianas y grandes */}
      <Grid
        item
        xs={12}
        sm={8}
        md={9}
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Botón de subir imágenes (pantallas medianas+) */}
        <UploadButton  isSaving={isSaving} onFileChange={onFileChange} size={56} />

        {/* Botón Guardar */}
        <Button
          onClick={onSaveNote}
          disabled={isSaving}
          variant="outlined"
          startIcon={<SaveOutlined sx={{ fontSize: 22 }} />}
          sx={{
            px: 3,
            py: 1.2,
            borderRadius: "2rem",
            borderColor: "#1976d2",
            color: "#1976d2",
            textTransform: "none",
            fontWeight: 500,
            fontSize: { xs: "0.85rem", sm: "0.95rem" },
            boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#1976d2",
              color: "#fff",
              borderColor: "#1976d2",
            },
          }}
        >
          Guardar
        </Button>
      </Grid>

      {/* Botón Guardar (solo móvil) */}
      <Grid
        item
        xs={12}
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
        }}
      >
        <Button
          onClick={onSaveNote}
          disabled={isSaving}
          variant="outlined"
          startIcon={<SaveOutlined sx={{ fontSize: 22 }} />}
          sx={{
            px: 3,
            py: 1.2,
            borderRadius: "2rem",
            borderColor: "#1976d2",
            color: "#1976d2",
            textTransform: "none",
            fontWeight: 500,
            fontSize: "0.85rem",
            boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#1976d2",
              color: "#fff",
              borderColor: "#1976d2",
            },
          }}
        >
          Guardar
        </Button>
      </Grid>
    </Grid>
  );
};
