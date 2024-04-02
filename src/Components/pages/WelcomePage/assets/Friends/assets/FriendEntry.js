import { faMoneyBill, faPiggyBank, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Empty } from "antd";

import { notificationService } from "../../../../../../services/notificationService";
import { dataService } from "../../../../../../services/userDataService";

import styles from "../friends.module.css";

export const Friend = ({ showMessage, key, token, userDataId, auth, setAuth }) => {

    const onRemoveFriend = async (e) => {
        const friendId =
            e.currentTarget.parentElement.parentElement.getAttribute(
                "data-key"
            );

        try {
            const allFriendRequestNotifications =
                await notificationService.getAllFriendRequests(token);
            if (!allFriendRequestNotifications) {
                throw new Error("Failed to fetch friend request notifications");
            }

            const checkFriendNotification =
                allFriendRequestNotifications.filter((request) => {
                    return (
                        (request.receiver?.length &&
                            request.receiver[0].objectId === friendId &&
                            request.sender[0].objectId === userDataId) ||
                        (request.receiver?.length &&
                            request.receiver[0].objectId === userDataId &&
                            request.sender[0].objectId === friendId)
                    );
                });

            await notificationService.deleteNotification(
                checkFriendNotification[0].objectId
            );
            await dataService.removeRelation(
                userDataId,
                "friends",
                friendId,
                token
            );
            await dataService.removeRelation(
                friendId,
                "friends",
                userDataId,
                token
            );

            const filterFriends = auth.friends.filter(
                (friend) => friend.objectId !== friendId
            );

            setAuth({ ...auth, friends: filterFriends || [] });
            sessionStorage.setItem(
                "auth",
                JSON.stringify({ ...auth, friends: filterFriends })
            );
            showMessage("success", "Успешно премахнат приятел");
        } catch (error) {
            showMessage("error", error.message);
            console.error(error);
        }
    };
    return auth.friends.map((friend) => {
        if (!friend) {
            return (
                <Empty
                    style={{
                        margin: "1em auto",
                        fontFamily: "var(--body-font-family)",
                    }}
                    description="Все още нямате приятели, може да добавите от началото меню"
                />
            );
        }
        return (
            <li className={styles.entryWrapper} key={key} data-key={key}>
                <img
                    src={friend.avatar}
                    className={styles.profileImage}
                    alt={"avatar"}
                />
                <div className={styles.friendInfo}>
                    <strong>{friend.fullName}</strong>
                    <small>{friend.country}</small>
                    <a href={`tel:${friend.phoneNumber}`}>
                        {friend.phoneNumber}
                    </a>
                </div>
                <div className={styles.friendButtons}>
                    <button
                        className={styles.friendButton}
                        data-text="Поискай пари"
                    >
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faMoneyBill}
                        />
                    </button>
                    <button
                        className={styles.friendButton}
                        data-text="Изпрати пари"
                    >
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faPiggyBank}
                        />
                    </button>
                    <button
                        className={styles.friendButton}
                        data-text="Премахни приятел"
                        onClick={onRemoveFriend}
                    >
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faTrashAlt}
                        />
                    </button>
                </div>
            </li>
        );
    });
};
