import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from '@tanstack/react-query';
/**
 * Create a QueryClient configured with the application's default query and hydration options.
 *
 * Configured options include a 30-second query staleTime and a dehydrate policy that treats queries
 * as dehydrated if they meet React Query's defaults or if their state status is `'pending'`.
 *
 * @returns A configured `QueryClient` instance
 */
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        // serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
      hydrate: {
        // deserializeData: superjson.deserialize,
      },
    },
  });
}