export const UserSettingsNotificationTab = () => {
    return (
        <div className="form-container">
            <div className="form-content">
                <form className="custom-form" method="post">
                    <div className="form-group">
                        <label htmlFor="form-check-input">Last activity</label>

                        <input
                            className="form-control"
                            type="checkbox"
                            onChange={() => {}}
                            name="form-check-input"
                            role="switch"
                            id="flexSwitchCheckCheckedOne"
                            checked=""
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-check-label" htmlFor="flexSwitchCheckCheckedTwo">
                            Updated payment
                        </label>

                        <input
                            className="form-control"
                            type="checkbox"
                            onChange={() => {}}
                            name="form-check-input"
                            role="switch"
                            id="flexSwitchCheckCheckedTwo"
                            checked=""
                        />
                    </div>

                    <footer>
                        <input type="button" value="Clear" className="button-secondary" />

                        <input type="submit" value="Save changes" className="button-primary" />
                    </footer>
                </form>
            </div>
        </div>
    )
}

