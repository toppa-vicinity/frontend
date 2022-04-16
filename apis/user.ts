import { gql } from "@apollo/client";

export const LOGIN_CREDENTIALS = "vicinityCredentials";

export const USER_LOGIN = gql`
  mutation Login($options: UsernamePasswordInput!) {
    login(options: $options) {
      user {
        id
        username
        email
      }
      token
    }
  }
`;
