import { useEffect, useState } from "react";

interface CurrencyData {
  [key: string]: number;
}

function useCurrencyInfo(currency: string) {
  const [data, setData] = useState<CurrencyData>({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
