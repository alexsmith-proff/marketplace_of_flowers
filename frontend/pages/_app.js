import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useApollo } from '../util/apollo-client'

import { ApolloProvider } from "@apollo/client";
// import client from "../util/apollo-client";

import "../styles/global.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}
