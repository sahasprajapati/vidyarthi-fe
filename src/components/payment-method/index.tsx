import React, { useState } from 'react';
import * as Yup from 'yup';
// import { VidyarthiLogo } from 'assets/images';
import { Formik } from 'formik';
import TextField from 'components/text-field';
import Accordion from 'components/accordion';

interface Props {}

const PAYMENT_VALIDATION = Yup.object().shape({
  accountNumber: Yup.string(),
  accountHolderName: Yup.string(),
  bankName: Yup.string(),
  khaltiPhoneNumber: Yup.string(),
  phoneNumber: Yup.string(),
});

const paymentData = [
  {
    id: 0,
    title: 'Credit Card',
    values: [
      {
        label: 'Account Holder Name',
        name: 'accountHolderName',
        placeholder: '',
      },
      {
        label: 'CVV',
        name: 'cvv',
        placeholder: '',
      },
      {
        label: 'Expiry Date',
        name: 'expiryDate',
        placeholder: '',
      },
    ],
  },
  {
    id: 0,
    title: 'Payment E-Sewa',
    label: 'Phone Number',
    name: 'phoneNumber',
    placeholder: '',
    url: 'https://esewa.com.np/#/home',
    logo: 'https://e7.pngegg.com/pngimages/18/669/png-clipart-esewa-fonepay-pvt-ltd-logo-brand-cash-on-delivery-logo-text-logo.png ',
  },
  {
    id: 0,
    title: 'Payment Khalti',
    label: 'Khalti Phone Number',
    name: 'khaltiPhoneNumber',
    placeholder: '',
    url: 'https://khalti.com/',
    logo: 'https://khalti-static.s3.ap-south-1.amazonaws.com/cloudfront-cdn/jamara/web19/images/khalti-logo.svg',
  },
];

const PaymentMethod: React.FC<Props> = ({}) => {
  const initValues = {
    accountNumber: '',
    accountHolderName: '',
    bankName: '',
    phoneNumber: '',
    khaltiPhoneNumber: '',
  };

  const [activeMethod, setActiveMethod] = useState('');

  // const [open, setOpen] = React.useState(false);
  console.log(activeMethod);
  return (
    <div className="mx-2">
      <Formik
        initialValues={initValues}
        validateOnMount
        validationSchema={PAYMENT_VALIDATION}
        onSubmit={(val) => console.log('this is value', val)}
      >
        <div className="">
          {paymentData.map((e, i) => (
            <Accordion
              title={e?.title}
              key={i}
              variant="small"
              isOpen={activeMethod === e?.title}
              handleOpen={() => {
                setActiveMethod(e?.title);
              }}
            >
              {e?.url && (
                <a href={e?.url}>
                  <img src={e.logo} height="auto" width="100px" />
                </a>
              )}

              {e?.values?.map((value) => {
                return (
                  <TextField
                    key={value.label}
                    label={value.label}
                    name={value.name}
                    placeholder={value.placeholder}
                  />
                );
              })}
            </Accordion>
          ))}
        </div>
      </Formik>
    </div>
  );
};

export default PaymentMethod;
