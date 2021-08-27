import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

export class Earnings extends Component {
    render() {
        const { t } = this.props;
        const Income = [
            {
                id: 1,
                title: "View Ads",
                content: "Content"
            },
            {
                id: 1,
                title: "View Ads",
                content: "Content"
            },
            {
                id: 1,
                title: "View Ads",
                content: "Content"
            },
            {
                id: 1,
                title: "View Ads",
                content: "Content"
            },
            {
                id: 1,
                title: "View Ads",
                content: "Content"
            },
            {
                id: 1,
                title: "View Ads",
                content: "Content"
            },
            {
                id: 1,
                title: "View Ads",
                content: "Content"
            },
            {
                id: 1,
                title: "View Ads",
                content: "Content"
            },
            {
                id: 1,
                title: "View Ads",
                content: "Content"
            },
            {
                id: 1,
                title: "View Ads",
                content: "Content"
            },
        ]
        return (
            <div>
                <h2 className="text-primary section-title">{t('menu.earnings')}</h2>
                
                <div className="row">
                    {Income.map((item, idx) => (
                        <div key={idx} class="col-xl-4 col-md-6">
                            <div class="card mb-3">
                                <div class="row no-gutters">
                                    <div class="col-md-3 align-self-center text-center">
                                        <img class="my-3" height="80" src="https://mannatthemes.com/dastone/default/assets/images/widgets/btc.png" alt="Card image" />
                                    </div>
                                    <div class="col-md-9">
                                        <div class="card-header">
                                            <div class="row align-items-center">
                                                <div class="col">                      
                                                    <h4 class="card-title">{item.title}</h4>               
                                                </div>  
                                                <div class="col-auto">    
                                                    <img class="rounded-circle me-2" src="https://mannatthemes.com/dastone/default/assets/images/users/user-7.jpg" alt="" height="24" />                  
                                                    <span class="badge badge-light">30 May 2020</span>              
                                                </div>                                            
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in
                                                er card with supporting text below as a natural lead-in to additional content.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                        <p class="card-footer bg-light m-0">Footer - 2020 Metrica</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="col-lg-4">

                    </div>

                </div>
            </div>
        )
    }
}

export default withTranslation()(Earnings)