import React from 'react';
import Heading from 'components/heading';

interface Props {
  image: string;
  text: string;
  title: string;
}

const HomeCard: React.FC<Props> = ({ image, text, title }) => {
  return (
    <div className="my-5 mx-3">
      <img src={image} alt="fire" />
      <Heading title={title} />
      <p className="descriptions__text">{text}</p>
    </div>
  );
};

export default HomeCard;
