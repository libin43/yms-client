
import { gql, useMutation } from '@apollo/client';

export const YARD_LOGIN = gql`
mutation Mutation($input: YardCredential!) {
  login(input: $input) {
    yard_name
    accessToken
    role
  }
}
`;
