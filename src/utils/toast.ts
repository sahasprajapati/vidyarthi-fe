import { toast } from 'react-toastify';

const toastAlert = (variant: string, message: string) => {
  if (variant === 'success') {
    return toast.success(message);
  } else if (variant === 'error') {
    return toast.error(message);
  } else {
    return null;
  }
};
export default toastAlert;
