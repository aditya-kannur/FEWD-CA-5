// Import the necessary modules and CSS file
import { useForm } from "react-hook-form";
import './Forms.css'

function Forms() {
    const { register, handleSubmit, getValues, formState: { errors, isSubmitSuccessful } } = useForm()

    //Submit function
    function submit(data) {
        console.log(data)
    }

    return (
        <>
          <div>
            <form onSubmit={handleSubmit(submit)}  className="form-container">
            {isSubmitSuccessful && <h3 className="success-message">Registration Successful</h3>}

                <label htmlFor='name' className="label" >Name</label>
                <input 
                    type='text' 
                    placeholder='Your name' 
                    id='name'
                    {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 3,
                            message: "Name should be longer than 3 letters"
                        },
                        maxLength: {
                            value: 30,
                            message: "Name should be less than 30 letters"
                        }
                    })}
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}

                <label htmlFor='email' className="label">Email</label>
                <input 
                    type='email' 
                    placeholder='Your email' 
                    id='email'
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /[a-z0-9_.]+@[a-z]+\.[a-z]/,
                            message: "Invalid email format"
                        }
                    })}
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}

                <label htmlFor='password' className="label">password</label>
                <input 
                    type='password' 
                    placeholder='Password' 
                    id='password'
                    {...register("password", {
                        required: "Password is required",
                        pattern: {
                            value: /^(?=.*[!@#$%^&*])/,
                            message: "Password must contain at least one special character"
                        }
                    })}
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}

                {/* Repeat Password input field */}
                <label htmlFor='repeatPassword' className="label">Comfirm password</label>
                <input 
                    type='password' 
                    placeholder='Repeat your password' 
                    id='repeatPassword'
                    {...register("repeatPassword", {
                        required: "Please confirm the password",
                        validate: (value) => value === getValues("password") || "Passwords do not match"
                    })}
                />
                {errors.repeatPassword && <p className="error-message">{errors.repeatPassword.message}</p>}

                {/* Submit button */}
                <input type='submit' value={"Register"} className="submit-btn"></input>
            </form>
          </div>  
        </>
    );
}

// Export the Forms component
export default Forms;
