import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  // ✅ Siempre actualiza el formState si cambia initialForm
  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  // 🔁 Validar cada vez que cambian los campos
  useEffect(() => {
    createValidators();
  }, [formState]);

  // 📌 Validación general del formulario
  const isFormValid = useMemo(() => {
    return Object.values(formValidation).every((value) => value === null);
  }, [formValidation]);

  // 🧠 Validación individual
  const createValidators = () => {
    const formCheckedValues = {};

    for (const field of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[field];
      formCheckedValues[`${field}Valid`] = fn(formState[field])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  // 📤 Cambio en los inputs
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // 🔄 Reiniciar formulario
  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};