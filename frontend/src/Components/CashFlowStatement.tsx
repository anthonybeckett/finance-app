import { useOutletContext } from "react-router";
import { CashFlowStatementConfig } from "../Configs/TableConfigs/CashFlowStatementConfig";
import { useEffect, useState } from "react";
import { CompanyCashFlow } from "../Types/company";
import { getCashFlowStatement } from "../Api/Api";
import Table from "./Table";

interface CashFlowStatementProps {}

const CashFlowStatement: React.FC<CashFlowStatementProps> = (
    props: CashFlowStatementProps
): JSX.Element => {
    const ticker = useOutletContext<string>();

    const [cashFlowData, setCashFlowData] = useState<CompanyCashFlow[]>();

    useEffect(() => {
        const fetchCashFlow = async () => {
            const result = await getCashFlowStatement(ticker!);

            setCashFlowData(result!.data);
        };

        fetchCashFlow();
    }, []);

    return (
        <>
            {cashFlowData ? (
                <Table config={CashFlowStatementConfig} data={cashFlowData} />
            ) : (
                <h1>No Results</h1>
            )}
        </>
    );
};

export default CashFlowStatement;
