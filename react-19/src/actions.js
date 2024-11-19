export const submitFormAction = async (previousState, formData) => {
  const name = formData.get("inputName");
  await new Promise((res) => setTimeout(res, 500));
  return { ...previousState, name };
};
