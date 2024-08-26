import "./Card.css";

interface CardProps {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({ companyName, ticker, price }: CardProps) => {
    return (
        <div className="card">
            <img 
                src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Living room"
            />

            <div className="details">
                <h2>{companyName} - ({ticker})</h2>
                <p>${price}</p>
            </div>

            <p className="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, perferendis?</p>
        </div>
    )
}

export default Card