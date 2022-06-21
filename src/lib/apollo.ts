import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7ow09111301xi62vl91o3/master',
  cache: new InMemoryCache()
})
