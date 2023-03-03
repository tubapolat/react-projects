export const Money = ({ money }) => {
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  return <span>{formatter.format(money)}</span>;
};
