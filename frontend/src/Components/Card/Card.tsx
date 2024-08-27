import { SyntheticEvent } from "react";
import { CompanySearch } from "../../Types/company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import "./Card.css";

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
        <div className="card">
            <img
                src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Company logo"
            />

            <div className="details">
                <h2>
                    {searchResult.name} - ({searchResult.symbol})
                </h2>
                <p>${searchResult.currency}</p>
            </div>

            <p className="info">
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
