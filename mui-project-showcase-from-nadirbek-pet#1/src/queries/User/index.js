import { gql } from 'apollo-boost';

export const Login = gql`
  query Login ($email: String!, $password: String!) {
    login (email: $email, password: $password) {
      token
    }
  }
`;

export default Login;
