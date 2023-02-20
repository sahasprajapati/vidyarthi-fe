import BorderBottom from 'components/border-bottom';
import Button from 'components/button';
import Heading from 'components/heading';
import React from 'react';
import CartAmountTitle from './CartAmountTitle';

interface Props {
  variant?: 'light' | 'light-dark';
  subTotal: string;
  tax?: string;
  couponDiscount?: string;
  total: string;
  onClick?: () => void;
  label: string;
}

const CartCard: React.FC<Props> = ({
  variant,
  subTotal,
  tax,
  onClick,
  couponDiscount,
  total,
  label,
}) => {
  return (
    <div
      className={
        variant === 'light-dark' ? 'bg-home border-10' : 'bg-dark-white'
      }
    >
      <div className="p-4">
        <div className="mb-4">
          <Heading title="Cart summary" />
        </div>
        <CartAmountTitle amount={subTotal} title="Subtotal" />
        {tax && <CartAmountTitle amount={tax} title="Tax" />}
        {couponDiscount && (
          <CartAmountTitle amount={couponDiscount} title="Coupon Discount" />
        )}
        <BorderBottom />
        <div className="mt-3">
          <CartAmountTitle amount={total} title="Total" />
        </div>
        <div className="flex-center">
          <Button
            variant="primary"
            type="button"
            onClick={onClick}
            isValid={true}
          >
            {label}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartCard);
