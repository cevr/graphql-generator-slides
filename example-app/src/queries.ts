import { gql } from "@apollo/client";

export const GetUserQuery = gql`
  query GetUser {
    me {
      id
      username
      email
      role
    }
  }
`;

export const ChatQuery = gql`
  query GetChat {
    myChats {
      id
      users {
        id
        username
        email
        role
      }
    }
  }
`;
