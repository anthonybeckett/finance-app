import { useOutletContext } from "react-router-dom";
import { IncomeStatementConfig } from "../Configs/TableConfigs/IncomeStatementConfig";
import { useEffect, useState } from "react";
import { CompanyIncomeStatement } from "../Types/company";
import { getIncomeStatement } from "../Api/Api";
import Table from "./Table";
import Spinner from "./Spinner";

interface IncomeStatementProps {}

const IncomeStatement: React.FC<IncomeStatementProps> = (
    props: IncomeStatementProps
): JSX.Element => {
    const ticker = useOutletContext<string>();

    const [incomeStatement, setIncomeStatement] =
        useState<CompanyIncomeStatement[]>();

    useEffect(() => {
        const incomeStatementData = async () => {
            const result = await getIncomeStatement(ticker);

            setIncomeStatement(result!.data);
        };

        incomeStatementData();
    }, [ticker]);

    return (
        <>
            {incomeStatement ? (
                <>
                    <Table
                        config={IncomeStatementConfig}
                        data={incomeStatement}
                    />
                </>
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default IncomeStatement;
