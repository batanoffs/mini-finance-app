import { Link } from 'react-router-dom'
import {
    faGear,
    faHandshakeAngle,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'

import styles from '../site-header.module.css'

export const ProfileDropdown = ({ avatar, onLogoutHandler, fullName }) => {
    return (
        <div className={styles.dropdownNotifications}>
            <div
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className={styles.dropdownToggle}
            >
                <img src={avatar} className={styles.profileImage} alt={'avatar'} />

                <ul className={styles.dropdownMenu}>
                    <li>
                        <div className={styles.dropdownMenuProfileThumb}>
                            <img
                                src={avatar}
                                className={styles.profileImage}
                                alt={'avatar'}
                            />
                            <small>{fullName}</small>
                        </div>
                    </li>

                    <li>
                        <Link className={styles.dropdownItem} to="/dashboard/profile">
                            <FontAwesomeIcon className={styles.sidebarIcons} icon={faAddressCard} />
                            Profile
                        </Link>
                    </li>

                    <li>
                        <Link className={styles.dropdownItem} to="/dashboard/settings">
                            <FontAwesomeIcon className={styles.sidebarIcons} icon={faGear} />
                            Settings
                        </Link>
                    </li>

                    <li>
                        <Link className={styles.dropdownItem} to="/dashboard/help-center">
                            <FontAwesomeIcon
                                className={styles.sidebarIcons}
                                icon={faHandshakeAngle}
                            />
                            Help Center
                        </Link>
                    </li>

                    <li className="border-top">
                        <Link className={styles.dropdownItem} onClick={onLogoutHandler}>
                            <FontAwesomeIcon
                                className={styles.sidebarIcons}
                                icon={faArrowRightFromBracket}
                            />
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
