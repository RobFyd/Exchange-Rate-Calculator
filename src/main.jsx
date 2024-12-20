import { ArrowDownCircle } from "lucide-react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const handleConvert = () => {
    const rates = {
      USD: 1.0,
      EUR: 0.85,
      GBP: 0.73,
      JPY: 110.0,
      AUD: 1.35,
      CAD: 1.25,
      CHF: 0.92,
      CNY: 6.45,
    };
    const converted =
      (parseFloat(amount) * rates[toCurrency]) / rates[fromCurrency];
    setResult(converted.toFixed(2));
  };
  return (
    <main className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-purple-900 via-black to-indigo-900">
      <div className="w-full max-w-md rounded-lg border border-purple-500/30 bg-white bg-opacity-20 backdrop-blur-lg p-6 shadow-lg">
        <h2 className="mb-6 text-center text-xl font-semibold text-cyan-100">
          Exchange Rate Calculator
        </h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="amount"
              className="mb-2 block text-sm font-medium text-cyan-100"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-md border border-purple-500/30 bg-black/30 p-2.5 text-cyan-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 placeholder-cyan-300/50"
              placeholder="Enter amount"
              aria-label="Amount to convert"
            />
          </div>

          <div>
            <label
              htmlFor="fromCurrency"
              className="mb-2 block text-sm font-medium text-cyan-100"
            >
              From Currency
            </label>
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full rounded-md border border-purple-500/30 bg-black/30 p-2.5 text-cyan-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              aria-label="Source currency"
            >
              <option value="USD">US Dollar (USD)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="GBP">British Pound (GBP)</option>
              <option value="JPY">Japanese Yen (JPY)</option>
              <option value="AUD">Australian Dollar (AUD)</option>
              <option value="CAD">Canadian Dollar (CAD)</option>
              <option value="CHF">Swiss Franc (CHF)</option>
              <option value="CNY">Chinese Yuan (CNY)</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="toCurrency"
              className="mb-2 block text-sm font-medium text-cyan-100"
            >
              To Currency
            </label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full rounded-md border border-purple-500/30 bg-black/30 p-2.5 text-cyan-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              aria-label="Target currency"
            >
              <option value="USD">US Dollar (USD)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="GBP">British Pound (GBP)</option>
              <option value="JPY">Japanese Yen (JPY)</option>
              <option value="AUD">Australian Dollar (AUD)</option>
              <option value="CAD">Canadian Dollar (CAD)</option>
              <option value="CHF">Swiss Franc (CHF)</option>
              <option value="CNY">Chinese Yuan (CNY)</option>
            </select>
          </div>

          <button
            onClick={handleConvert}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
            aria-label="Convert currency"
          >
            <ArrowDownCircle className="h-5 w-5" />
            Convert
          </button>

          {result && (
            <div className="mt-6 rounded-lg bg-black/20 p-4 text-center">
              <p className="text-lg font-medium text-cyan-100">
                {amount} {fromCurrency} = {result} {toCurrency}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // root creation
root.render(<CurrencyConverter />); // render the app
