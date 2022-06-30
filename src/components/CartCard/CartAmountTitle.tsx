import React from 'react';
import formatMoney from 'utils/formatMoney';

interface Props {
  title: string;
  amount: string;
}
const CartAmountTitle: React.FC<Props> = ({ title, amount }) => {
  return (
    <div className="flex-between">
      <p>{title}</p> <p> {formatMoney(amount)} </p>
    </div>
  );
};

export default React.memo(CartAmountTitle);
