import { SyntheticEvent } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

interface ListPortfolioProps {
    portfolioValues: string[];
    onPortfolioDelete: (event: SyntheticEvent) => void;
}

const ListPortfolio: React.FC<ListPortfolioProps> = ({
    portfolioValues,
    onPortfolioDelete,
}: ListPortfolioProps): JSX.Element => {
    return (
        <>
            <h3>My Portfolio</h3>

            <ul>
                {portfolioValues &&
                    portfolioValues.map((portfolioValue) => {
                        return (
                            <CardPortfolio
                                portfolioValue={portfolioValue}
                                onPortfolioDelete={onPortfolioDelete}
                            />
                        );
                    })}
            </ul>
        </>
    );
};

export default ListPortfolio;
