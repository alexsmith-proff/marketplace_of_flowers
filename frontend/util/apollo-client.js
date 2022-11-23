import { ApolloClient, InMemoryCache } from "@apollo/client"
import { createUploadLink } from 'apollo-upload-client';

const client = new ApolloClient({
    link: createUploadLink({
        uri: "http://localhost:5000/graphql",
        credentials: 'same-origin',
    }),
    // uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
    
})

export default client