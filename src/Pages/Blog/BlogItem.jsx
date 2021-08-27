import React from 'react'
import { FiX } from "react-icons/fi";

function BlogItem({item, removeBlog, key} = this.props) {
    return (
        <div class="col-md-6 blog-list-item">
            <div class="card mb-3">
                <div class="card-header">
                    <h4 class="card-title">
                        <a href={`blog/${item.url}`}>{item.title}</a>

                        <div onClick={removeBlog.bind(undefined, key)} className="card-close">
                            <FiX />
                        </div>
                    </h4>
                </div>
                <div class="card-body blog-list-body d-flex">
                    <div className="blog-list-thumb me-3" style={{backgroundImage: `url(${item.thumb})`}}></div>
                    <div className="blog-list-details">
                        <p className="text-muted fs-sm">{item.content}</p>
                        <a className="fs-sm" href={item.url}>View More...</a>
                    </div>
                </div>
                <div className="card-footer bg-light">
                    <div class="row align-items-center">
                        <div class="col">                      
                            <img class="rounded-circle me-2" src="https://mannatthemes.com/dastone/default/assets/images/users/user-7.jpg" alt="" height="24" />                  
                            <span class="badge badge-light">{item.author}</span>       
                        </div>  
                        <div class="col-auto">
                            <h4 class="card-title">{item.date}</h4>                 
                        </div>      
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default BlogItem
