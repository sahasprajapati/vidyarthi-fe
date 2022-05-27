import React from 'react';

interface Props {
  onClick?: () => void;
  logo: string;
  title: string;
}

const SocialMediaLoginOptions: React.FC<Props> = ({ onClick, logo, title }) => {
  return (
    <div className="login__with__container flex me-5" onClick={onClick}>
      <div className="login__with__image__box">
        <img src={logo} alt="google-logo" />
      </div>
      <h6 className="login__with__text pt-3">{title}</h6>
    </div>
  );
};

export default React.memo(SocialMediaLoginOptions);
