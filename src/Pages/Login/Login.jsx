 
  const handleClick = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
     
   const password = e.target.password.value;
   console.log( email, password)
 }


const Login = () => {
    return (
    <div>
    <h1>Login Form</h1>
    <div className=" bg-base-200">
    <div>
     
    <div className=" w-full   shadow-2xl bg-base-100">
      <form onSubmit={handleClick} className="card-body">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Register Here</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;