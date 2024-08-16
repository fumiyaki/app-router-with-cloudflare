import { GraphQLClient, gql } from "graphql-request";

const endpoint = "https://api.github.com/graphql";
const token = "";

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`,
  },
});

const query = gql`
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      owner {
        login
      }
      description
      stargazerCount
      forkCount
    }
  }
`;

export const RepositoryInfo = async ({ owner, name }) => {
  const variables = { owner, name };
  const data = await graphQLClient.request(query, variables);

  return (
    <div>
      <h1>{data.repository.name}</h1>
      <p>{data.repository.description}</p>
      <p>Stars: {data.repository.stargazerCount}</p>
      <p>Forks: {data.repository.forkCount}</p>
    </div>
  );
};
