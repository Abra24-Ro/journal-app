import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Link,
  Divider,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSignIn,
  startLoginWithEmailAndPassword,
} from "../../store/auth";


const formDate = {
  email: "",
  password: "",
}

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();



  const { email, password, onInputChange } = useForm(formDate);

  const isAuthenticating = status === "checking";

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailAndPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Iniciar sesión">
      <Box
        component="form"
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <TextField
          label="Correo electrónico"
          type="email"
          fullWidth
          margin="normal"
          required
          name="email"
          value={email}
          onChange={onInputChange}
        />

        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          margin="normal"
          required
          name="password"
          value={password}
          onChange={onInputChange}
        />

        {errorMessage && (
          <Box sx={{ mt: 2 }}>
            <Alert severity="error">{errorMessage}</Alert>
          </Box>
        )}

        <Button
          disabled={isAuthenticating}
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ mt: 2 }}
        >
          Iniciar sesión
        </Button>
      </Box>

      <Divider sx={{ my: 3 }}>o</Divider>

      <Button
        disabled={isAuthenticating}
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={onGoogleSignIn}
      >
        Iniciar con Google
      </Button>

      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="body2" sx={{ mt: 2 }}>
          ¿No tienes cuenta?{" "}
          <Link
            component={RouterLink}
            to="/auth/register"
            underline="hover"
            color="primary"
          >
            Regístrate
          </Link>
        </Typography>
      </Box>
    </AuthLayout>
  );
};
