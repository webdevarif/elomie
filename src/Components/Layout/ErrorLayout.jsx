import React from 'react'
import bg from '../../Pages/Authentication/authbg.png';

const ErrorLayout =({children}) =>{
    return(
        <div className="auth-page" style={{ backgroundImage: `url('${bg}')` }}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-12">
                <div className="p-5 auth-page-content">
                    {children}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ErrorLayout;

