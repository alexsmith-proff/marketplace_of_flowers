import { ApolloClient, InMemoryCache } from "@apollo/client"
import { createUploadLink } from 'apollo-upload-client';

const client = new ApolloClient({
    // link: createUploadLink({
    //     uri: "http://localhost:5000/graphql",
    //     credentials: 'same-origin',
    // }),
    uri: "http://localhost:5000/graphql",
    // uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
    
})

export default client