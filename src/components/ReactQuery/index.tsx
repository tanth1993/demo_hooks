import { QueryClient, QueryClientProvider } from 'react-query'
import ComponentA from './ComponentA'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export default function ReactQuery() {
    return <QueryClientProvider client={queryClient}>
        <ComponentA />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
}
