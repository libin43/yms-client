'use client'

import { ApolloClient, ApolloProvider, gql, useQuery } from '@apollo/client';
import apolloClient from '@/app/_lib/apollo';

export default function CustomApolloProvider({ children }: { children: React.ReactNode}) {
return (
  <ApolloProvider client={apolloClient}>
  { children }
</ApolloProvider>
)
}