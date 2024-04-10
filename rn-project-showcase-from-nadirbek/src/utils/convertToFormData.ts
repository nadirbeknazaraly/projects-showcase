const convertToFormData = (value: Record<string, any>): FormData => {
  const formData = new FormData();

  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      formData.append(key, value[key]);
    }
  }

  return formData;
};

export default convertToFormData;
