import { useState } from "react";
import "./Employee.scss";


type CardInfo = {
    id: number;
    name: string;
    role: string; 
};

const EmployeeCard = ({id, name, role}: CardInfo) => {
    
    const [counter, setCounter] = useState<number>(0);

    const handleIncrement = () => {

        setCounter(counter + 1);
    };
    
    const handleDecrement = () => {
        
        if (counter === 0 || counter < 0) {
          setCounter(0);
        } else {
            setCounter(counter - 1);
        }

    };

    return (
        <div className="employeeCard__container">
            <h2 className="employeeCard__id">{id}</h2>
            <h2 className="employeeCard__name">{name}</h2>
            <h2 className="employeeCard__role">{role}</h2>

            <button className="employeeCard__increase" aria-label="Decrease Number" onClick={handleDecrement}>-</button>
            
            <h2 className="carousel__image">{counter}</h2>

            <button className="employeeCard__decrease" aria-label="Increase Number" onClick={handleIncrement}>+</button>
        </div>
    )
}

export default EmployeeCard;