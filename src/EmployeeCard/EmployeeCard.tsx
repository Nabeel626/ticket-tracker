import { useState } from "react";
import "./Employee.scss";


type CardInfo = {
    id: number;
    name: string;
    role: string; 
};

const EmployeeCard = ({name, role}: CardInfo) => {    

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
            <h2 className="employeeCard__name">{name}</h2>
            <hr className="employeeCard__splitter"/>
            <h2 className="employeeCard__role">{role}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Voluptatibus error laboriosam sapiente eum vel nostrum! Aspernatur 
                perferendis nihil nam fugit fugiat doloremque placeat officia praesentium, 
                commodi non ipsa quisquam vitae?</p><br/>
            
            <div className="employeeCard__counter--Container">
                <button className="employeeCard__decrease" aria-label="Decrease Number" onClick={handleDecrement}>-</button>
                <h2 className="employeeCard__counter">{counter}</h2>
                <button className="employeeCard__increase" aria-label="Increase Number" onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}

export default EmployeeCard;