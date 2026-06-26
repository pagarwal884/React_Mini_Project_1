import { useState } from "react";
import InputBox from "./components/inputBox";
import UseCurrencyInfo from "./hooks/UseCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertAmount, setConvertAmount] = useState(0)

  const currencyInfo = UseCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(convertAmount)
  }

  const convert = () => {
    setConvertAmount(amount * currencyInfo[to])
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/35251427/pexels-photo-35251427.jpeg')",
      }}
    >
      <InputBox />
    </div>
  );
}

export default App;