export const submitAction = async (previousState, formData) => {
  const name = formData.get("name");
  await new Promise((res) => setTimeout(res, 1000));
  return { ...previousState, name: name };
};
