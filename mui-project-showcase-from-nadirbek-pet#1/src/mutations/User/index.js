import { gql } from 'apollo-boost';

export const Register = gql`
  mutation Register ($email: String!, $password: String!) {
    register (email: $email, password: $password) {
      id
      email
    }
  }
`;

export default Register;
