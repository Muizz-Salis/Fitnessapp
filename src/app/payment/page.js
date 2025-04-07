import Image from "next/image";

export default function PaymentForm() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      {/* Centered Payment Form */}
      <div className="bg-[#1a1a1a] p-6 rounded-xl w-full max-w-md border border-orange-500">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-orange-500">Join us Now!</h2>
          <button className="text-orange-500 font-bold">×</button>
        </div>

        <h3 className="text-md mb-4 font-semibold">Payment</h3>

        <div className="flex gap-4 mb-4">
          <Image src="/visa.png" alt="Visa" width={50} height={30} />
          <Image src="/mastercard.png" alt="MasterCard" width={50} height={30} />
          <span className="text-sm text-blue-400">BANK TRANSFER</span>
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name on Card"
            className="p-3 rounded bg-black border border-gray-700 text-sm"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="p-3 rounded bg-black border border-gray-700 text-sm"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="p-3 rounded bg-black border border-gray-700 text-sm w-1/2"
            />
            <input
              type="text"
              placeholder="CVC"
              className="p-3 rounded bg-black border border-gray-700 text-sm w-1/2"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="save-card" className="accent-orange-500" />
            <label htmlFor="save-card" className="text-sm">
              Save card & remember me
            </label>
          </div>

          <p className="text-xs text-gray-400">
            By checking, you agree to the Terms of service
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 transition text-black font-semibold py-3 rounded">
            <a href="/profile">Make a payment</a>
          </button>
        </form>
      </div>
    </div>
  );
}
