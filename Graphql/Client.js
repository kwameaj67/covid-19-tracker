import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { api } from '../config'

const httplink = createHttpLink({
    uri:api
})

const client = new ApolloClient({
    link:httplink,
    cache: new InMemoryCache()
})

module.exports = {
    client
}