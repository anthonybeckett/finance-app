import { formatLargeMonetaryNumber } from "../Helpers/NumberFormatter";
import { CompanyCashFlow } from "../Types/company";

export const CashFlowStatementConfig = [
    {
        label: "Date",
        render: (company: CompanyCashFlow) => company.date,
    },
    {
        label: "Operating Cashflow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.operatingCashFlow),
    },
    {
        label: "Investing Cashflow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
    },
    {
        label: "Financing Cashflow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(
                company.netCashUsedProvidedByFinancingActivities
            ),
    },
    {
        label: "Cash At End of Period",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
    },
    {
        label: "CapEX",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.capitalExpenditure),
    },
    {
        label: "Issuance Of Stock",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.commonStockIssued),
    },
    {
        label: "Free Cash Flow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.freeCashFlow),
    },
];
