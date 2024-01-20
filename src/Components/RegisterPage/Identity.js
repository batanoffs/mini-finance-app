import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Identity = (props) => {
    let faceio;
    useEffect(() => {
        faceio = new faceIO("fioacd5c");
    }, []);

    const handleSignIn = async () => {
        try {
            let response = await faceio.enroll({
                locale: "auto",
                payload: {
                    email: "example@gmail.com",
                    pin: "12345",
                },
            });

            console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="form-container">
            <div className="form-content">
                <button className="button-primary" onClick={handleSignIn}>
                    Проверка на идентичност
                </button>
                <footer>
                    <Link
                        to={"/register/userinfo"}
                        type="submit"
                        name="prev"
                        className="button-secondary"
                        onClick={props.currentStepsHendler}
                    >
                        Назад
                    </Link>
                    <Link
                        to={"/register/terms"}
                        type="submit"
                        name="next"
                        className="button-primary"
                        onClick={props.currentStepsHendler}
                    >
                        Напред
                    </Link>
                </footer>
            </div>
        </div>
    );
};
