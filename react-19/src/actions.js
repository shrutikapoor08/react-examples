export const submitData = async (name) => {
  await new Promise((res) => setTimeout(res, 1000));

  return name;
};
