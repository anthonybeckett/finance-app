interface SearchProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    search: string|undefined;
};

const Search: React.FC<SearchProps> = ({ onClick, handleChange, search }: SearchProps): JSX.Element => {
    return <div>
        <input type="text" value={search} onChange={handleChange} />
        <button onClick={onClick}>Search</button>
    </div>;
};

export default Search;
