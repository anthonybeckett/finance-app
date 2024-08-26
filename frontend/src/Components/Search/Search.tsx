import { useState } from "react";

type SearchProps = {};

const Search: React.FC<SearchProps> = (props: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    
    return <div>
        <input type="text" value={search} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} />
        <button onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log(event)}></button>
    </div>;
};

export default Search;
