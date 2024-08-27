import { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../Types/company";
import { v4 as uuidv4 } from "uuid";

interface CardListProps {
    onPortfolioCreate: (event: SyntheticEvent) => void;
    searchResults: CompanySearch[];
}

const CardList: React.FC<CardListProps> = ({
    searchResults,
    onPortfolioCreate,
}: CardListProps): JSX.Element => {
    return (
        <>
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return (
                        <Card
                            id={result.symbol}
                            key={uuidv4()}
                            searchResult={result}
                            onPortfolioCreate={onPortfolioCreate}
                        />
                    );
                })
            ) : (
                <h1>No Results</h1>
            )}
        </>
    );
};

export default CardList;
