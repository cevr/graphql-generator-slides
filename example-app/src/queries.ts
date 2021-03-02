import { gql } from "@apollo/client";

export const GetUserQuery = gql`
  query GetUser {
    me {
      id
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

export const SearchQuery = gql`
  query GetSearch($term: String!) {
    search(term: $term) {
      ... on Node {
        id
      }
      ... on User {
        id
      }
      ... on Chat {
        id
      }
      ... on ChatMessage {
        id
      }
    }
  }
`;
