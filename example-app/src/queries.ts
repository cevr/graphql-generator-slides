import { gql } from "@apollo/client";

export const UserFragment = gql`
  fragment UserFields on User {
    id
    username
    email
    role
  }
`;

export const GetUserQuery = gql`
  query GetUser {
    me {
      ...UserFields
    }
  }
  ${UserFragment}
`;

export const ChatQuery = gql`
  query GetChat {
    myChats {
      id
      users {
        ...UserFields
      }
    }
  }
  ${UserFragment}
`;
