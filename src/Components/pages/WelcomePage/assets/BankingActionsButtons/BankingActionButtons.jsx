import { useState } from "react";
import { TopUp } from "./TopUpModal";
import { SendMoney } from "./SendModal";
import { ReceiveMoney } from "./ReceiveModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVault,
    faMoneyBillTransfer,
    faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import blocks from "../../custom-block.module.css";

export const BankingActionButtons = () => {
    const [showTopUp, setShowTopUp] = useState(false);
    // const [showScan, setShowScan] = useState(false);
    const [showSend, setShowSend] = useState(false);
    const [showReceive, setShowReceive] = useState(false);

    return (
        <div
            className={`${blocks.customBlock} ${blocks.customBlockBottom}`}
            style={{ maxHeight: "110px" }}
        >
            <div className={blocks.customBlockBottomItem}>
                <a href="#" onClick={() => setShowTopUp(true)}>
                    <FontAwesomeIcon
                        className={blocks.customBlockIcon}
                        icon={faVault}
                    />
                </a>
            </div>

            <div className={blocks.customBlockBottomItem}>
                <a href="#" onClick={() => setShowSend(true)}>
                    <FontAwesomeIcon
                        className={blocks.customBlockIcon}
                        icon={faMoneyBillTransfer}
                    />
                </a>
            </div>

            <div className={blocks.customBlockBottomItem}>
                <a href="#" onClick={() => setShowReceive(true)}>
                    <FontAwesomeIcon
                        className={blocks.customBlockIcon}
                        icon={faHandHoldingDollar}
                    />
                </a>
            </div>
            {showTopUp && <TopUp setShowTopUp={setShowTopUp} />}
            {showSend && <SendMoney setShowSend={setShowSend} />}
            {showReceive && <ReceiveMoney setShowReceive={setShowReceive} />}
        </div>
    );
};
