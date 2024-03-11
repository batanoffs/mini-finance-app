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

export const BankingActionButtons = ({friendClick, setFriendClick, showModal, setShowModal}) => {
    

    const handleShowModal = (type) => () => {
        setShowModal({
            ...showModal,
            [type]: true,
        });
    };

    return (
        <div
            className={`${blocks.customBlock} ${blocks.customBlockBottom}`}
            style={{ maxHeight: "85px" }}
        >
            <FontAwesomeIcon
                className={blocks.customBlockIcon}
                icon={faVault}
                onClick={handleShowModal("topUp")}
            />
            <FontAwesomeIcon
                className={blocks.customBlockIcon}
                icon={faMoneyBillTransfer}
                onClick={handleShowModal("send")}
            />
            <FontAwesomeIcon
                className={blocks.customBlockIcon}
                icon={faHandHoldingDollar}
                onClick={handleShowModal("receive")}
            />
            {showModal.topUp && <TopUp showModal={showModal} setShowModal={setShowModal} />}
            {showModal.send && <SendMoney friendClick={friendClick} setFriendClick={setFriendClick} showModal={showModal} setShowModal={setShowModal} />}
            {showModal.receive && <ReceiveMoney showModal={showModal} setShowModal={setShowModal} />}
        </div>
    );
};

