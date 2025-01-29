import { Geist, Geist_Mono } from "next/font/google";
import CoinBenefits from "./components/coin-benefits";
import LoginForm from "./components/login-form";
import TabType from "./components/tab-type";


export default function Home() {
  return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-12 mt-[20] md:mt-[100] ml-5 mr-5 md:ml-10 md:mr-10">
              <div className="sm:col-span-2 md:col-span-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-wrap">
                      Start your journey with Carecoins today
                    </h2>
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 mt-[20] md:mt-[100] ml-5 mr-5 md:ml-10 md:mr-10">
              <div className="col-span-6 md:block hidden">
                  <CoinBenefits />
                  <TabType />
              </div>
              <div className="col-span-6">
                <h2 className="text-lg md:text-center md:text-4xl font-bold text-gray-800 mt-4">Sign in</h2>
                <LoginForm />
              </div>
              <div className="col-span-6 md:hidden">

                    <CoinBenefits />
                    <TabType />
              </div>
          </div>
      </div>
      );
  }
