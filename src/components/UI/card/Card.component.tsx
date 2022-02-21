import "./Card.styles.css";
import { FC } from "react";

interface CardProps {
  className: string;
}

const Card: FC<CardProps> = ({ className, children }) => (
  <div className={`card ${className}`}>{children}</div>
);

export default Card;
