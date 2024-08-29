import { useOutletContext } from "react-router-dom";
import { BalanceSheetConfig } from "../Configs/BalanceSheetConfig";
import { CompanyBalanceSheet } from "../Types/company";
import { useEffect, useState } from "react";
import { getBalanceSheet } from "../Api/Api";
import RatioList from "./RatioList";
import Spinner from "./Spinner";

interface BalanceSheetProps {}

const BalanceSheet: React.FC<BalanceSheetProps> = (
    props: BalanceSheetProps
): JSX.Element => {
    const ticker = useOutletContext<string>();

    const [balanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();

    useEffect(() => {
        const getBalanceSheetData = async () => {
            const value = await getBalanceSheet(ticker!);

            setBalanceSheet(value?.data[0]);
        };

        getBalanceSheetData();
    }, [ticker]);

    return (
        <>
            {balanceSheet ? (
                <RatioList config={BalanceSheetConfig} data={balanceSheet} />
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default BalanceSheet;
