import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "../Types/company";
import axios from "axios";

interface SearchResponse {
    data: CompanySearch[];
}

const client = axios.create({
    baseURL: "https://financialmodelingprep.com/api/v3",
    params: {
        "apikey": process.env.REACT_APP_API_KEY,
    },
});

export const searchCompanies = async (query: string) => {
    try {
        const data = await client.get<SearchResponse>(
            `/search?query=${query}&limit=10&exchange=NASDAQ`
        );

        return data;
    } catch (error: any) {
        console.log("Error: ", error.message);
    }
};

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await client.get<CompanyProfile[]>(
            `/profile/${query}`
        );

        return data;
    } catch(error: any) {
        console.error("Error: ", error.message);
    }
}

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await client.get<CompanyKeyMetrics[]>(
            `/key-metrics-ttm/${query}`
        );

        return data;
    } catch(error: any) {
        console.error("Error: ", error.message);
    }
}

export const getIncomeStatement = async (query: string) => {
    try {
        const data = await client.get<CompanyIncomeStatement[]>(
            `/income-statement/${query}?limit=40`
        );

        return data;
    } catch(error: any) {
        console.error("Error: ", error.message);
    }
}

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await client.get<CompanyBalanceSheet[]>(
            `/balance-sheet-statement/${query}?limit=40`
        );

        return data;
    } catch(error: any) {
        console.error("Error: ", error.message);
    }
}

export const getCashFlowStatement = async (query: string) => {
    try {
        const data = await client.get<CompanyCashFlow[]>(
            `/cash-flow-statement/${query}?limit=40`
        );

        return data;
    } catch(error: any) {
        console.error("Error: ", error.message);
    }
}
