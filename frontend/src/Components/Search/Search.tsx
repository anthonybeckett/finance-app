import { SyntheticEvent } from "react";

interface SearchProps {
    onSearchSubmit: (event: SyntheticEvent) => void;
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    search: string | undefined;
}

const Search: React.FC<SearchProps> = ({
    onSearchSubmit,
    handleSearchChange,
    search,
}: SearchProps): JSX.Element => {
    return (
        <>
            <form onSubmit={onSearchSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                />
            </form>
        </>
    );
};

export default Search;
