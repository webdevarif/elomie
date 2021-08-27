import React, { Component } from 'react'
// import bg from ''
export class Headings extends Component {
    render({title, thumbs, content} = this.props) {
        return (
            <div className="card features-heading">
                {thumbs? 
                <div className="card-image">
                    <img src={thumbs} alt="" />
                </div>
                :null}
                <div className="card-body">
                {title?
                    <h2>{title}</h2>
                :null}
                {content?
                    <p className="mb-0 text-muted">{content}</p>
                :null}
                </div>
            </div>
        )
    }
}

export default Headings
