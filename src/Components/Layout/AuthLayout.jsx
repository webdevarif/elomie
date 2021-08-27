import React from 'react'
import bg from '../../Pages/Authentication/authbg.png';
import Lang from '../Lang';

const AuthLayout =({children}) =>{
    return(
        <div className="auth-page" style={{ backgroundImage: `url('${bg}')` }}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-8">
                <div className="auth-page-box shadow-sm rounded-md overflow-hidden">
                  <div className="row no-gutters">
                    <div className="col-md-6 auth-page-banner bg-gradient-primary text-center">
                      <div className="d-flex h-100 align-items-center justify-content-center">
                        <div className="middle-content p-5 text-light">
                          <h1 className="text-uppercase text-white">ZI Academy</h1>
                          <div>Beyond Learning</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 order-md-first">
                      <div className="p-5 auth-page-content">
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Lang />
        </div>
    )
}

export default AuthLayout;

