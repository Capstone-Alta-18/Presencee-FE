import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://charming-labrador-58.hasura.app/v1/graphql",
  cache: new InMemoryCache({ addTypename: false }),
  headers: {
    "x-hasura-admin-secret": "zxjNWcEroEXQzfrBrWh9bF1f7jXNGb1nx4tRO6G5VJ79b4ZkoTBBDe8477A9tTON",
  },
});
