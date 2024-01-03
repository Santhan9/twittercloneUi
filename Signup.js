
import './signUp.css'

const Signup = ()=>{
    return(
        <div className="container">
        <div className="signUp">
            <h2>Sign Up</h2>
            <form onSubmit="">
            <label>User Email</label>
            <input type="text" name="userEmail" value=""></input>
            
            <br />
            <label>User Name</label>
            <input type="text" name="userName" value=""></input>
            
            <br />
            <label>User Age      </label>
            <input type="text" name="userAge" value=""></input>
            
            <br />
            <label>User Password</label>
            <input type="text" name="userPassword" value=""></input>

            <button type='submit'>Sign Up</button>
            
            </form>
        </div>
        </div>
    )
}

export default Signup;