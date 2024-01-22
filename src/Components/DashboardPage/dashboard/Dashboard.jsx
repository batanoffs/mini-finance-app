import { CreditCard } from "../OverviewTab/CreditCard.jsx";
import { History } from "../OverviewTab/History.jsx";
import { ExchangeRate } from "../OverviewTab/ExchangeRate.jsx";
import { ProfileDetails } from "../OverviewTab/ProfileDetails.jsx";
import { BankingActionButtons } from "../OverviewTab/BankingActionButtons.jsx";
import { Transactions } from "../OverviewTab/Transactions.jsx";
import { SendMoney } from "../OverviewTab/SendMoney.jsx";
import { Greetings } from "../OverviewTab/Greetings.jsx";
import { useContext } from "react";
import { UserDataContext } from "../../../contexts/UserDataContext.jsx";
import "./dashboard.css";

export const Dashboard = () => {
    const {name, creditCard, balance, picture, phone, email} = useContext(UserDataContext);
    return (
        <div className="content-container">
            <div className="column">
                <Greetings name={name}/>
                <CreditCard creditCard={creditCard} name={name} balance={balance}/>
                <History />
                <ExchangeRate />
            </div>

            {/* user profile */}
            <div className="column">
                <ProfileDetails picture={picture} name={name} phone={phone} email={email}/>
                <BankingActionButtons />
                <Transactions />
                <SendMoney />
            </div>
        </div>
    );
};