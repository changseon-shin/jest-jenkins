import React, {useEffect, NextFunctionComponent} from "react";
import css from "../style.module.css";
import Counter from "../src/components/Counter";
import { gql } from 'apollo-boost';
import {useQuery} from "@apollo/react-hooks";

const GET_LANGUAGE_ERROR = gql`
    query getYapPartnerLanguage($lang: String){
        getYapPartnerLanguage(lang: $lang) {
            error {
                errorTitle
                errorInfo
                backButton
            }

        }
    }
`;

const Component:NextFunctionComponent<any> = () => {
    // const {data} = useQuery(GET_LANGUAGE_ERROR);
    //
    // useEffect(() => {
    //     console.log('lang', data);
    // }, [data]);

    return (
        <div className={css.example}>
            Hello World!
        </div>
    )
};

Component.getInitialProps = async () => {
};

export default Component;