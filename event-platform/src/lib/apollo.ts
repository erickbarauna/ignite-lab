import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ohkjnu06kq01z46u4qbqxq/master',
  cache: new InMemoryCache()
})