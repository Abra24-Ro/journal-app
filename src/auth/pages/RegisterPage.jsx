import { Link as RouterLink } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Divider,
  Alert,
  Grid,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailAndPassword } from "../../store/auth";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener un @"],
  password: [
    (value) => value.length >= 6,
    "El password debe tener más de 6 letras",
  ],
  displayName: [
    (value) => value.trim().length >= 1,
    "El nombre es obligatorio",
  ],
};

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector((state) => state.auth);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    // Aquí va la lógica de registro (por ejemplo, dispatch, API, etc.)

    dispatch(startCreatingUserWithEmailAndPassword(formState));
  };

  return (
    <AuthLayout title="Crear cuenta">
      <Box component="form" onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <TextField
          label="Nombre completo"
          type="text"
          fullWidth
          margin="normal"
          placeholder="Tu nombre"
          name="displayName"
          value={displayName}
          onChange={onInputChange}
          error={!!displayNameValid && formSubmitted}
          helperText={formSubmitted ? displayNameValid : ""}
        />

        <TextField
          label="Correo electrónico"
          type="email"
          fullWidth
          margin="normal"
          name="email"
          value={email}
          onChange={onInputChange}
          error={!!emailValid && formSubmitted}
          helperText={formSubmitted ? emailValid : ""}
        />

        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          margin="normal"
          name="password"
          value={password}
          onChange={onInputChange}
          error={!!passwordValid && formSubmitted}
          helperText={formSubmitted ? passwordValid : ""}
        />
        <Grid display={!!errorMessage ? "" : "none"}>
          <Alert severity="error">{errorMessage}</Alert>
        </Grid>

        <Button
          disabled={isAuthenticating}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ mt: 2 }}
        >
          Registrar
        </Button>
      </Box>

      <Divider sx={{ my: 3 }}>o</Divider>

      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="body2">
          ¿Ya tienes una cuenta?{" "}
          <Link
            component={RouterLink}
            to="/auth/login"
            underline="hover"
            color="primary"
          >
            Iniciar sesión
          </Link>
        </Typography>
      </Box>
    </AuthLayout>
  );
};
