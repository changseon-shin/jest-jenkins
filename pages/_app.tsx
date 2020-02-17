import React from "react";
import {NextPageContext} from "next";
import App from "next/app";
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import makeStore, {Store} from "../src/store";
import {ApolloProvider} from 'react-apollo';
import {ApolloProvider as ApolloHooksProvider} from "@apollo/react-hooks";
import client from '../src/apolloClient/client';
import Head from "next/head";
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

interface IAppContext extends NextPageContext {
    store: Store;
    env: string;
}

class RootApp extends App<IAppContext> {
    static async getInitialProps ({ Component, ctx: context }) {
        let pageProps = {};

        if(Component.getInitialProps) pageProps = await Component.getInitialProps(context);

        return {pageProps, env: process.env.API_ENV};
    }

    public componentDidCatch (error, errorInfo) {
        /* TODO. Sentry 추가 */
        console.log('CUSTOM ERROR HANDLING', error);
        // This is needed to render errors correctly in development / production
        super.componentDidCatch(error, errorInfo);
    }

    render() {
        const {Component, pageProps, store} = this.props;
        const apolloClient = client();

        return (
            <>
                <Head>
                    <title>YAP ADMIN</title>
                    <meta charSet='utf-8' />
                    <link rel="shortcut icon" href={`${publicRuntimeConfig.IMAGE_URL}/favicon.png`} />
                </Head>
                <ApolloProvider client={apolloClient}>
                    <ApolloHooksProvider client={apolloClient}>
                        <Provider store={store}>
                            <Component {...pageProps} />
                        </Provider>
                    </ApolloHooksProvider>
                </ApolloProvider>
            </>
        );
    }
};

export default withRedux(makeStore)(RootApp);