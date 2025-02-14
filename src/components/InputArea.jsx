export default function InputArea({ handleInputChange, inputs }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>
                        Initial investment
                        <input
                            type="number"
                            placeholder="Initial investment"
                            value={inputs.initialInvestment}
                            name='initialInvestment'
                            min="0"
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>
                        Annual Investment
                        <input
                            type="number"
                            placeholder="Annual Investment"
                            value={inputs.annualInvestment}
                            name='annualInvestment'
                            min="0"
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)} />
                    </label>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>
                        Expected Return
                        <input
                            type="number"
                            placeholder="Expected Return"
                            value={inputs.expectedReturn}
                            name='expectedReturn'
                            min="0"
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>
                        Duration
                        <input
                            type="number"
                            placeholder="Duration"
                            min="0"
                            value={inputs.duration}
                            name='duration'
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)} />
                    </label>
                </p>
            </div>
        </section>
    );
};