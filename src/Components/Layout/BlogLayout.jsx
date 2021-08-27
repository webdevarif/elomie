import React from 'react'
import BlogSidebar from '../Sidebar/Blog';

const ErrorLayout =({children}) =>{
    return(
        <div className="blog-page-area my-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb-4">
                        <BlogSidebar />
                    </div>
                    <div className="col-lg-9 order-lg-first">
                        <div className="blog-main">
                            { children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorLayout;

