import { SyntheticEvent } from "react";
import { CompanySearch } from "../Types/company";
import AddPortfolio from "./Portfolio/AddPortfolio";
import { Link } from "react-router-dom";

interface CardProps {
    id: string;
    onPortfolioCreate: (event: SyntheticEvent) => void;
    searchResult: CompanySearch;
}

const Card: React.FC<CardProps> = ({
    id,
    searchResult,
    onPortfolioCreate,
}: CardProps): JSX.Element => {
    return (
        <div
            className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
            key={id}
            id={id}
        >
            <Link to={`/company/${searchResult.symbol}`} className="font-bold text-center text-black md:text-left">
                {searchResult.name} ({searchResult.symbol})
            </Link>

            <p className="text-black">{searchResult.currency}</p>

            <p className="font-bold text-black">
                {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>

            <AddPortfolio
                onPortfolioCreate={onPortfolioCreate}
                symbol={searchResult.symbol}
            />
        </div>
    );
};

export default Card;
