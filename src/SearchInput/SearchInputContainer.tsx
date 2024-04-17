import { FormEvent, useState } from "react";
import SearchInput from "./SearchInput"
import EmployeeCard from "../EmployeeCard/EmployeeCard";

type TeamData = {
    users: EmployeeData[];
};

type EmployeeData = {
    id: number;
    name: string;
    role: string; 
};

const SearchInputContainer = ({users} : TeamData) => {
  
    const [searchTerm, setSearchTerm] = useState<string>("");
    
    const handleInput = (event : FormEvent<HTMLInputElement>) => {
        const cleanedInput = event?.currentTarget.value.toLowerCase();

        setSearchTerm(cleanedInput);
    }

    const filteredSearch = users.filter((user) => {                
        return user.name.toLowerCase().includes(searchTerm);
        
    });
  
    return (
        <>
            <SearchInput label="Search By Name" searchTerm={searchTerm} handleInput={handleInput} />
            {filteredSearch}
            {users.map((user) => {
                return <EmployeeCard key={user.id} id={user.id} name={String(filteredSearch)} role={user.role} /> //This will map out the employee card so that it can return it
            })}
            
        </>
    )
}

export default SearchInputContainer