import { useOutletContext } from "react-router-dom";
import { CompanyProfileTableConfig } from "../Configs/TableConfigs/CompanyProfileTableConfig";
import { CompanyKeyMetrics } from "../Types/company";
import { useEffect, useState } from "react";
import { getKeyMetrics } from "../Api/Api";
import RatioList from "./RatioList";

interface CompanyProfileProps {}

const CompanyProfile: React.FC<CompanyProfileProps> = (
    props: CompanyProfileProps
): JSX.Element => {
    const ticker = useOutletContext<string>();

    const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();

    useEffect(() => {
        const getCompanyKeyMetrics = async () => {
            const value = await getKeyMetrics(ticker);

            setCompanyData(value?.data[0]);
        };

        getCompanyKeyMetrics();
    }, []);

    return (
        <>
            {companyData ? (
                <RatioList
                    data={companyData}
                    config={CompanyProfileTableConfig}
                />
            ) : (
                <div>Loading</div>
            )}
        </>
    );
};

export default CompanyProfile;
