import React from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';

interface EmptyCard_Info {
  title: string;
  description: string;
}

const EmptyCard = (props: EmptyCard_Info) => {
  const { title, description } = props;

  return (
    <li className="characters-list__empty-card">
      <div className="characters-list__empty-card__inner empty-card__inner">
        <h2 className="empty-card__inner__title">{title}</h2>
        <FaRegQuestionCircle className="empty-card__inner__label" />
        <p className="empty-card__inner__decription">{description}</p>
      </div>
    </li>
  );
};

export default EmptyCard;
