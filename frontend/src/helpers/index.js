export function formatError(validatedData) {
  const errors = validatedData.error.flatten();
  // console.log(errors);
  let errorsArray = [];

  //Fill array with all the error messages
  for (const err in errors.fieldErrors) {
    errorsArray = [...errorsArray, ...errors.fieldErrors[err]];
  }

  errorsArray = [...errorsArray, ...errors.formErrors];

  return errorsArray;
}

export function formatDate(date) {
  const objectDate = new Date(date);

  const formattedDate = new Intl.DateTimeFormat("es", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(objectDate);

  return formattedDate;
}

export function formatDateDay(date) {
  const objectDate = new Date(date);

  const formattedDate = new Intl.DateTimeFormat("es", {
    day: "2-digit",
    month: "short",
  }).format(objectDate);

  return formattedDate;
}
