import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description, link }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img" />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="btn">Voir plus</a>
      </div>
    </div>
  );
};

export default Card;
