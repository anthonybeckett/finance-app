import { useState } from "react";

type SearchProps = {};

const Search: React.FC<SearchProps> = (props: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    
    return <div>
        <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
    </div>;
};

export default Search;
