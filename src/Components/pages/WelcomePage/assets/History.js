import { transactionService } from "../../../../services/transactionService";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { Empty } from 'antd';
import blocks from "../custom-block.module.css";
import styles from "./LastTransactions.module.css"

export const History = ({formatDate}) => {
    const [transactionsList, setTransactionsList] = useState([]);
    const { userDataId } = useContext(AuthContext);

    useEffect(() => {
        transactionService
            .getAllSender(userDataId)
            .then(setTransactionsList)
            .catch(console.error);
    }, [userDataId]);

    return (
        <div className={blocks.customBlock}>
            <h5>История на плащания</h5>
            <ul>
                {transactionsList.length > 0 ? transactionsList
                    .slice()
                    .sort((a, b) => new Date(b.created) - new Date(a.created))
                    .slice(0, 4)
                    .map((transaction) => (
                        <li key={transaction.objectId} data-key={transaction.objectId} className={styles.transactionsBoxWrapper}>
                            <img
                                src={transaction.receiver[0].avatar}
                                className={blocks.profileImage}
                                alt="avatar"
                            />
                            <div className={styles.historyDetailsWrapper}>
                                <div className={styles.detailsBox}>
                                    <strong>
                                        Платихте
                                    </strong>
                                    <strong style={{ display: "block", textAlign: "right", color: "darkred" }}>
                                       - {transaction.amount}лв
                                    </strong>
                                </div>
                                <div className={styles.detailsBox}>
                                    <small> на {transaction.receiver[0].fullName}</small>
                                   
                                    <small>
                                        {formatDate(transaction.created)}
                                    </small>
                                </div>
                            </div>
                        </li>
                    )) : <Empty description="Липсва история" />}
            </ul>
        </div>
    );
};

