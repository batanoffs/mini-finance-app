// import profilePicture from "../../../images/medium-shot-happy-man-smiling.jpg"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import blocks from "../../../custom-block.module.css";

export const ProfileDetails = ({
    email,
    phone,
    name,
    picture,
    adress,
    country,
}) => {
    return (
        <div className={`${blocks.customBlock} ${blocks.customBlockProfile}`}>
            <div className={blocks.customBlockProfileImageWrap}>
                <img
                    src={picture}
                    className={blocks.customBlockProfileImage}
                    alt="avatar"
                />

                <Link
                    to="/dashboard/settings"
                    className={blocks.customBlockEditIcon}
                >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
            </div>

            <p>
                <strong>Име:</strong>

                <span> {name}</span>
            </p>
            <p>
                <strong>Имейл:</strong>
                <a
                    href={`mailto:${email}`}
                    style={{
                        paddingLeft: "5px",
                        color: "var(--heading-color)",
                        hover: "white",
                    }}
                >
                    {email}
                </a>
            </p>
            <p style={{ paddingBottom: "0" }}>
                <strong>Телефон:</strong>
                <a
                    href={`tel:${phone}`}
                    style={{
                        paddingLeft: "5px",
                        color: "var(--heading-color)",
                    }}
                >
                    {phone}
                </a>
            </p>
            {country && (
                <p>
                    <strong>Държава:</strong>
                    <span> {country}</span>
                </p>
            )}
            {adress && (
                <p>
                    <strong>Адрес:</strong>
                    <span>{adress}</span>
                </p>
            )}
        </div>
    );
};
