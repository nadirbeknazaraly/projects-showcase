import { gql } from 'apollo-boost';

export const CreateCompany = gql`
  mutation CreateCompany ($company: InputCompany!) {
    createCompany (company: $company) {
      id
    }
  }
`;

export default CreateCompany;
