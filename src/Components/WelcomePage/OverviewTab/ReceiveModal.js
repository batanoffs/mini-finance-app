import "./modal.css"

export const ReceiveMoney = ({ setShowReceive }) => {
    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="close-button">
                    <button onClick={() => setShowReceive(false)}> x</button>{" "}
                </div>

                <div className="modal-title">
                    <h5 className="modal-title">Получаване на пари</h5>
                </div>
                <div className="modal-body">
                    <form>
                        <label htmlFor="amount">Въведи сума</label>
                        <input
                            type="text"
                            name="amount"
                            id="amount"
                            className="form-control"
                            placeholder="Enter amount"
                        />
                        <label htmlFor="card">Избери карта</label>
                        <input
                            type="text"
                            name="card"
                            id="card"
                            className="form-control"
                            placeholder="Add credit card"
                        />
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="modal-title">Поискай</button>
                </div>
            </div>
        </div>
    );
};
