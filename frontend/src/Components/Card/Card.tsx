import { CompanySearch } from "../../Types/company";
import "./Card.css";

interface CardProps {
    id: string;
    searchResult: CompanySearch;
}

const Card: React.FC<CardProps> = ({ id, searchResult }: CardProps): JSX.Element => {
    return (
        <div className="card">
            <img 
                src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Company logo"
            />

            <div className="details">
                <h2>{searchResult.name} - ({searchResult.symbol})</h2>
                <p>${searchResult.currency}</p>
            </div>

            <p className="info">{searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
        </div>
    )
}

export default Card