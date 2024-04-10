export const createBody = (values) => ({
  name: values.company.companyName,
  hhSourceID: values.company.companyID,
});

export default createBody;
