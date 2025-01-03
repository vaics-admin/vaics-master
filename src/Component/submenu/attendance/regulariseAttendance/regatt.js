import "./regatt.css"

const Regulariseattendance = () =>{

    return (
        <div className = "regularise-on-dates">
            <div className = "regularise-on-dates-request">
                <form className = "req-date-form">
                    <label for = "reg-date-from" className = "reg-label">From Date</label>
                    <input className = "reg-input" type = "date"/>
                    <label for = "reg-date-to" className = "reg-label">To Date</label>
                    <input className = "reg-input" type = "date"/>
                    <button className = "sub-buton reg-butt" >Go</button>
                    <button className = "reset reg-butt" >reset</button>
                </form>
            </div>

            <div className = "dates-tobe-regularised">
                
            </div>
        </div>
    )
}

export default Regulariseattendance