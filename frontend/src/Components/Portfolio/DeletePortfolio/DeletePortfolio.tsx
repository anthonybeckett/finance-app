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

                <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
                    &times;
                </button>
            </form>
        </>
    );
};

export default DeletePortfolio;
