import {
    ApolloClient,
    ApolloLink,
    InMemoryCache,
    HttpLink
  } from 'apollo-boost'
  import fetch from 'isomorphic-unfetch'
  
  const isServer = () => typeof window === `undefined`
  
  const fetchHack = (url, ...args) => {
    const shouldRewriteUri = isServer() && process.env.NODE_ENV === `development`
    let adjustedUrl = shouldRewriteUri ? process.env.API_URI : process.env.API_URI_DOCKER
    adjustedUrl = `${adjustedUrl}/graphql`
    alert(adjustedUrl)
    return fetch(adjustedUrl, ...args)
  }
  const httpLink = new HttpLink({
    fetch: fetchHack,
    credentials: `include`,
  })
  const create = (initialState = {}, cookies) => {
    /* your middleware code here */
    return new ApolloClient({
      connectToDevTools: process.browser,
      ssrMode: !process.browser,
      link: httpLink,
    })
  }