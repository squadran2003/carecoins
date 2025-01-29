"use client";

export default function CoinBenefits() {
    return <div>
        <p className="text-sm md:text-md mt-8 md:mt-0 text-gray-800">
            Open an account with just <span className="font-bold">3 Carecoins*</span>
        </p>
            <p className="font-bold ml-4 mt-5"> 3 x coins = <span className="text-blue-500">£99</span></p>
            <p className="font-bold text-1g mt-10">Benefits of using Carecoins</p>
            <ul className="list-none">
            <li className="flex items-start text-[0.85rem] mt-4">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="orange" 
                className="w-5 h-5 mr-2">
                <path 
                    fillRule="evenodd" 
                    d="M20.293 5.293a1 1 0 011.414 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 15.586l9.293-9.293z" 
                    clipRule="evenodd" />
                </svg>
                <p className="font-normal"><span className="font-bold">Easy-to-use portal area</span> — Book and manage therapy or training sessions anytime, anywhere.</p>
            </li>
            <li className="flex items-start text-[0.85rem] mt-4">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="orange" 
                className="w-5 h-5 mr-2">
                <path 
                    fillRule="evenodd" 
                    d="M20.293 5.293a1 1 0 011.414 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 15.586l9.293-9.293z" 
                    clipRule="evenodd" />
                </svg>
                <p className="font-normal"><span className="font-bold">No subscriptions</span> — You decide how many coins you can afford and top up on your terms.</p>
            </li>
            <li className="flex items-start text-[0.85rem] mt-4">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="orange" 
                className="w-5 h-5 mr-2">
                <path 
                    fillRule="evenodd" 
                    d="M20.293 5.293a1 1 0 011.414 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 15.586l9.293-9.293z" 
                    clipRule="evenodd" />
                </svg>
                <p className="font-normal"><span className="font-bold">Longevity</span> — Carecoins are valid for two full years from the date of purchase.</p>
            </li>
            </ul>
            <p className="text-xs mt-10 text-gray-500">*One off payment of £99 required to open an account. This is not a subscription, top up coins can be purchased from your account area at £33 per coin.</p>
    </div>
}