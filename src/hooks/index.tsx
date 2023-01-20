import React from 'react';
import Service from 'setup/network';

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<any>([]);
  const [errorText, setErrorText] = React.useState('');

  const fetchData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await Service.get(url);
      setIsLoading(false);
      setData(response?.data);
    } catch (error: any) {
      setIsLoading(false);
      setErrorText(error?.response?.data);
    }
  }, [url]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData, url]);
  return { isLoading, data, errorText, fetchData };
};

export default useFetch;
