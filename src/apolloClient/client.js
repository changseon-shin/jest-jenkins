import {ApolloClient} from "apollo-client";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context';
import cookies from "browser-cookies";
import moment from "moment-timezone";

export default () => {
    const uri = process.env.GRAPHQL_URL || 'https://yap-graphql.dev.yanolja.in';

    const httpLink = new HttpLink({ uri: `${uri}/graphql`, fetch });
    // const httpLink = new HttpLink({ uri: `http://localhost:5000/graphql`, fetch});
    const authLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        const token = cookies.get('token');
        const timezone = moment.tz.guess() || '';
        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
                // authorization: `Bearer 82db015f-7486-49c6-9de5-e204c4608695`,
                timezone
            }
        }
    });

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache({
            addTypename: false
        })
    });
};
