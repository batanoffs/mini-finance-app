import { Link } from "react-router-dom";
import { Radio } from "antd";
import { useState } from "react";

export const ConfirmForm = ({
    email,
    password,
    firstName,
    lastName,
    gender,
    country,
    phoneNumber,
    cardId,
    adress,
    town,
    currentStepsHandler,
    onSubmitRegister,
    changeHandler,
}) => {
    const [isHidden, setHidden] = useState(false);
    const cardIdGenerator = () => {
        const id = Math.floor(Math.random() * 100) + 1;
        return id;
    };
    const onConfirmHandler = (e) => {
        e.preventDefault();
        e.target.hidden = true;
        setHidden(true);
        changeHandler({ target: { name: "cardId", value: cardIdGenerator() } });
    };
    return (
        <div className="form-container">
            <div className="form-content">
                <form
                    style={{ display: `inline-flex`, flexDirection: `column` }}
                    action="#"
                    method="post"
                >
                    <header>
                        <h3>Проверка на данните</h3>
                    </header>
                    <label htmlFor="email">Е-майл</label>
                    <input
                        type="email"
                        name="email"
                        readOnly
                        autoComplete="off"
                        placeholder="липсва информация"
                        className="form-control"
                        value={email}
                        id="email"
                    />
                    <input
                        type="id"
                        name="cardId"
                        readOnly
                        hidden
                        autoComplete="off"
                        placeholder="липсва информация"
                        className="form-control"
                        value={cardId}
                        id="cardId"
                    />
                    <input
                        type="password"
                        name="password"
                        readOnly
                        hidden
                        autoComplete="off"
                        placeholder="липсва информация"
                        className="form-control"
                        value={password}
                        id="password"
                    />

                    <label htmlFor="firstName">Име</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="липсва информация"
                        value={firstName}
                        disabled
                    />

                    <label htmlFor="lastName">Фамилия</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        placeholder="липсва информация"
                        value={lastName}
                        disabled
                    />

                    <label>Пол</label>
                    <Radio.Group
                        name="gender"
                        value={gender}
                        disabled
                        style={{ marginBottom: "0.5rem" }}
                    >
                        <Radio value="male"> Мъж </Radio>
                        <Radio value="female"> Жена </Radio>
                    </Radio.Group>

                    <label htmlFor="phoneNumber">Телефон</label>
                    <input
                        type="tel"
                        className="form-control"
                        name="phoneNumber"
                        placeholder="липсва информация"
                        value={phoneNumber}
                        disabled
                    />

                    <label htmlFor="adress">Адрес</label>
                    <input
                        type="text"
                        className="form-control"
                        name="adress"
                        placeholder="липсва информация"
                        value={adress}
                        disabled
                    />

                    <label htmlFor="town">Град</label>
                    <input
                        type="text"
                        className="form-control"
                        name="town"
                        placeholder="липсва информация"
                        value={town}
                        disabled
                    />

                    <label htmlFor="country">Държава</label>
                    <input
                        type="text"
                        className="form-control"
                        name="country"
                        id="country"
                        placeholder="липсва информация"
                        value={country}
                        disabled
                    />
                </form>
                <footer>
                    <Link
                        type="button"
                        name="prev"
                        to={"/register/terms"}
                        className="button-secondary"
                        onClick={currentStepsHandler}
                    >
                        Назад
                    </Link>

                    <input
                        name="register"
                        type="submit"
                        className="button-primary"
                        value={"Потвърди данните"}
                        onClick={onConfirmHandler}
                    />
                    {isHidden && (
                        <input
                            name="register"
                            type="submit"
                            className="button-primary"
                            value={"Регистрация"}
                            onClick={onSubmitRegister}
                        />
                    )}
                </footer>
            </div>
        </div>
    );
};