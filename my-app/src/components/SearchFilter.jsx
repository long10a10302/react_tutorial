import React, {useState} from 'react'

const SearchFilter = () => {
    const [searchItem,setSearchItem] = useState("");
    const items = ["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape"];

    const filteredItems = items.filter(item => 
        item.toLowerCase().includes(searchItem.toLowerCase())
    );

    return (
        <div>
            <h2>Search Filter</h2>
            <input
            type='text'
            placeholder='Search items'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)} 
            />
            <ul>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item,index) => <li key={index}>{item}</li>)
                ) : (
                    <li>No items found</li>
                ) } 
            </ul>
        </div>
    );
};
export default SearchFilter;