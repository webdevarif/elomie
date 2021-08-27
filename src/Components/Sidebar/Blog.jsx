import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import Config from '../../Utils/Config';

export class BlogSidebar extends Component {
    render() {
        const { t } = this.props;

        const Author = {
            name: "Alexander Pierce",
            bio: "Founder & CEO",
            pic: "https://via.placeholder.com/100x250",
            sales: {
                title: "sales",
                count: 134643,
            },
            followers: {
                title: "Followers",
                count: 46819,
            },
            products: {
                title: "Products",
                count: 167841,
            }
        }


        const Categories = [
            {
                id: 1,
                title: 'Airtel free net',
                count: 243,
                url: "/discover"
            },
            {
                id: 1,
                title: 'Android Custom Rom',
                count: 261,
                url: "/discover"
            },
            {
                id: 1,
                title: 'Android phone review',
                count: 409,
                url: "/discover"
            },
            {
                id: 1,
                title: 'Android root',
                count: 634,
                url: "/discover"
            },
            {
                id: 1,
                title: 'Android Tips',
                count: 3917,
                url: "/discover"
            },
            {
                id: 1,
                title: 'Android Xposed Framework',
                count: 122,
                url: "/discover"
            },
            {
                id: 1,
                title: 'Apps review',
                count: 6379,
                url: "/discover"
            },
            {
                id: 1,
                title: 'Banglalink free net',
                count: 6349,
                url: "/discover"
            },
            {
                id: 1,
                title: 'Blogger',
                count: 389,
                url: "/discover"
            },
            {
                id: 1,
                title: 'Broadband Tricks',
                count: 36,
                url: "/discover"
            },
            {
                id: 1,
                title: 'C programming',
                count: 74,
                url: "/discover"
            },
            {
                id: 1,
                title: 'Corona Virus Update Bangladesh',
                count: 32,
                url: "/discover"
            },
            {
                id: 1,
                title: 'Education Guideline',
                count: 205,
                url: "/discover"
            },
            {
                id: 1,
                title: 'Facebook tricks',
                count: 1997,
                url: "/discover"
            },
        ]

        const CardUser =() => (
            <div class="card mb-4 sidebar-widget widget-user"> 
                <div class="widget-user-header bg-primary"> 
                    <h3 class="widget-user-username mb-0 text-light">{Author.name}</h3>
                    {Author.bio.length > 0 ?<h5 class="widget-user-desc mb-0 text-light">{Author.bio}</h5>: null}
                </div>
                <div class="widget-user-image "> 
                    <img src={Author.pic} class="s-90 rounded-circle" alt={Author.name} />
                </div>
                <div class="user-wideget-footer card-body">
                    <div class="row">
                        <div class="col-sm-4 border-right"> 
                            <div class="text-center"> 
                                <h3 class="mb-0">{Config.numFormatter(Author.sales.count)}</h3> 
                                <span class="fs-sm text-uppercase text-muted">{Author.sales.title}</span> 
                            </div>
                        </div>
                        <div class="col-sm-4 border-right"> 
                            <div class="text-center"> 
                                <h3 class="mb-0">{Config.numFormatter(Author.followers.count)}</h3> 
                                <span class="fs-sm text-uppercase text-muted">{Author.followers.title}</span> 
                            </div> 
                        </div> 
                        <div class="col-sm-4"> 
                            <div class="text-center"> 
                                <h3 class="mb-0">{Config.numFormatter(Author.products.count)}</h3> 
                                <span class="fs-sm text-uppercase text-muted">{Author.products.title}</span> 
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="card-footer">
                    <div className="d-flex button-group">
                        <a href={Config.createBlogPostUrl} className="btn btn-block rounded-xs btn-outline-dashed btn-primary">{t('page.blog.create_post')}</a>
                    </div>
                </div> 
            </div>
        )

        return (
            <div className="blog-sidebar">
                {/* Author */}
                <CardUser />
                {/* CATEGORIES */}
                <div className="card card-categories">
                    <h5 className="card-header">Categories</h5>
                    <div className="card-body">
                        <ul className="list-unstyled">
                            {Categories.map((cat, idx) => (
                                <li key={idx}><a href={cat.url}>{cat.title} <span className="badge badge-primary">{Config.numFormatter(cat.count)}</span> </a></li>
                            ))}
                        </ul>
                    </div>
                </div>                
            </div>
        )
    }
}
export default withTranslation()(BlogSidebar)