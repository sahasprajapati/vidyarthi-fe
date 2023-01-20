import React from 'react';
import * as Yup from 'yup';
// import { VidyarthiLogo } from 'assets/images';
import { Formik } from 'formik';
import TextField from 'components/text-field';
import Accordion from 'components/accordion';

interface Props {}

const PAYMENT_VALIDATION = Yup.object().shape({
  accountNumber: Yup.string().required('Account Number is required'),
  accountHolderName: Yup.string().required('Account Number is required'),
  bankName: Yup.string().required('Account Number is required'),
  khaltiPhoneNumber: Yup.string().required('Phone number is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
});

const paymentData = [
  {
    id: 0,
    title: 'credit card',
    label: 'Account Holder Name',
    name: 'accountHolderName',
    placeholder: '',
  },
  {
    id: 0,
    title: 'Payment e-sewa',
    label: 'Phone Number',
    name: 'phoneNumber',
    placeholder: '',
  },
  {
    id: 0,
    title: 'Payment Khalti',
    label: 'Khalti Phone Number',
    name: 'khaltiPhoneNumber',
    placeholder: '',
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

  // const [open, setOpen] = React.useState(false);
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
            <Accordion title={e?.title} key={i} variant="small">
              <TextField
                label={e?.label}
                name={e?.name}
                placeholder={e?.placeholder}
              />
            </Accordion>
          ))}
        </div>
      </Formik>
    </div>
  );
};

export default React.memo(PaymentMethod);
