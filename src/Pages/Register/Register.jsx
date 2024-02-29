 
  const handleClick = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.text.value;
   const password = e.target.password.value;
   console.log(name, email, password)
 }


const Register = () => {
    
   


    return (
        <div>
            <h1>Register Form</h1>
               <div className="  bg-base-200">
  <div  >
     
    <div className=" w-full   shadow-2xl bg-base-100">
      <form onSubmit={handleClick} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name ="text"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name ="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name ="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Already have an account?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
            <p>Register Form</p>
        </div>
    );
};

export default Register;