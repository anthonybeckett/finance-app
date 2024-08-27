import { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";

interface CardPortfolioProps {
    portfolioValue: string;
    onPortfolioDelete: (event: SyntheticEvent) => void;
}

const CardPortfolio: React.FC<CardPortfolioProps> = ({
    portfolioValue,
    onPortfolioDelete,
}: CardPortfolioProps): JSX.Element => {
    return (
        <>
            <h4>{portfolioValue}</h4>
            <DeletePortfolio
                onPortfolioDelete={onPortfolioDelete}
                portfolioValue={portfolioValue}
            />
        </>
    );
};

export default CardPortfolio;
