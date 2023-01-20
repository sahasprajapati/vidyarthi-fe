const formatMoney = (text: string | number) => {
  return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default formatMoney;
