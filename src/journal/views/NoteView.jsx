import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import { ImageGalery } from "../components";
import { BotonSave } from "./BotonSave";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { DeleteOutline, UploadOutlined } from "@mui/icons-material";
import {
  startDeletingNote,
  startUploadingFiles,
} from "../../store/journal/thunks";
import { BotonDelete } from "./BotonDelete";

export const NoteView = () => {
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  const { title, body, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat("es-PE", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(newDate);
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState, dispatch]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Guardado", messageSaved, "success");
    }
  }, [messageSaved]);

  const onFileChange = ({ target }) => {
    if (target.files.length === 0) return;

    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Box
      sx={{ position: "relative", minHeight: "calc(100vh - 110px)" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      {/* Encabezado: Fecha + Botón Guardar */}
      <BotonSave
        date={dateString}
        isSaving={isSaving}
        onFileChange={onFileChange}
      />

      {/* Inputs de título y notas */}
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField
            variant="filled"
            fullWidth
            placeholder="Ingrese un título"
            label="Título"
            name="title"
            value={title}
            onChange={onInputChange}
            InputProps={{ disableUnderline: true }}
            sx={{
              mb: 2,
              backgroundColor: "#f5f5f5",
              borderRadius: 1,
            }}
          />
          <TextField
            variant="filled"
            fullWidth
            multiline
            name="body"
            value={body}
            onChange={onInputChange}
            minRows={6}
            placeholder="¿Qué sucedió hoy?"
            label="Notas"
            InputProps={{ disableUnderline: true }}
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: 1,
            }}
          />
        </Grid>
      </Grid>

      <BotonDelete onClick={onDelete} />

      {/* Galería de imágenes */}
      <ImageGalery images={note.imageUrls} />
    </Box>
  );
};
