import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailAndPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } = await registerUserEmailPassword(
      {
        email,
        password,
        displayName,
      }
    );

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });
    const { ok, uid, photoURL, displayName, errorMessage } = result;

    if (!ok) {
      // Aseguramos que errorMessage tenga un valor
      return dispatch(
        logout({ errorMessage: errorMessage || "Error al iniciar sesión" })
      );
    }

    dispatch(
      login({
        uid,
        displayName,
        email,
        photoURL,
      })
    );
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
     dispatch(clearNotesLogout()); // Limpiamos las notas al hacer logout
    // Aseguramos que el logout se maneje correctamente
    dispatch(logout());
  };
};
