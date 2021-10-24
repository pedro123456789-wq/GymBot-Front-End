import { verifyEmailFunc } from "./verify_email_func"


function CodeInput({ toggleError, api_url, history}){
    return (
        <>
            <div className = 'text-center code-div'>
                <input name = 'code' className = 'code-input' maxLength = '1'></input>
                <input name = 'code' className = 'code-input' maxLength = '1'></input>
                <input name = 'code' className = 'code-input' maxLength = '1'></input>
                <input name = 'code' className = 'code-input' maxLength = '1'></input>
                <input name = 'code' className = 'code-input' maxLength = '1'></input>
                <input name = 'code' className = 'code-input' maxLength = '1'></input>
            </div>

            <div className = 'text-center mt-5'>
                <button className = 'verify-button btn btn-solid' onClick = {() => verifyEmailFunc(toggleError, api_url, history)}>Verify</button>
            </div>
        </>
    )
}

export default CodeInput
