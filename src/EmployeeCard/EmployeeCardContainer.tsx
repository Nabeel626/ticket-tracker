import EmployeeCard from './EmployeeCard';

type TeamData = {
    users: EmployeeData[];
};

type EmployeeData = {
    id: number;
    name: string;
    role: string; 
};
  

const EmployeeCardContainer = ({users} : TeamData) => {
  
    return (
        <>
            {users.map((user) => {
                return <EmployeeCard key={user.id} id={user.id} name={user.name} role={user.role} /> //This will map out the employee card so that it can return it
            })}

        </>
    );
}

export default EmployeeCardContainer;