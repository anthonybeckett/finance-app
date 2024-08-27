import { SyntheticEvent } from "react";

interface DeletePortfolioProps {
    onPortfolioDelete: (event: SyntheticEvent) => void;
    portfolioValue: string;
}

const DeletePortfolio: React.FC<DeletePortfolioProps> = ({
    onPortfolioDelete,
    portfolioValue,
}: DeletePortfolioProps): JSX.Element => {
    return (
        <>
            <form onSubmit={onPortfolioDelete}>
                <input type="hidden" value={portfolioValue} />
                <button>&times;</button>
            </form>
        </>
    );
};

export default DeletePortfolio;
