import { useState } from "react";

export default function useInput (initialValues, validationFn) {
  const [enteredValues, setEnteredValues] = useState(initialValues);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValues);

  function handleInputChange (event) {
    setEnteredValues(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur (identifier) {
    setDidEdit(true);
  }

  return {
    value: enteredValues,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid
  }
}