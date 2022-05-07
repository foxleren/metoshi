import React from 'react'

import './Faq.css'

import {toggleFaqItem} from '../../js/script.js'

import {useIntl} from 'react-intl'

function GetFaqItems() {
    let intl = useIntl()
    return [{
        title: intl.formatMessage({id: 'faq_item_title1'}), content: intl.formatMessage({id: 'faq_item_content1'})
    }, {
        title: intl.formatMessage({id: 'faq_item_title2'}), content: intl.formatMessage({id: 'faq_item_content2'})
    }, {
        title: intl.formatMessage({id: 'faq_item_title3'}), content: intl.formatMessage({id: 'faq_item_content3'})
    }, {
        title: intl.formatMessage({id: 'faq_item_title4'}), content: intl.formatMessage({id: 'faq_item_content4'})
    }, {
        title: intl.formatMessage({id: 'faq_item_title5'}), content: intl.formatMessage({id: 'faq_item_content5'})
    }, {
        title: intl.formatMessage({id: 'faq_item_title6'}), content: intl.formatMessage({id: 'faq_item_content6'})
    }, {
        title: intl.formatMessage({id: 'faq_item_title7'}), content: intl.formatMessage({id: 'faq_item_content7'})
    }]
}

function Faq() {
    let faqItems = GetFaqItems()
    return (<section className="faq">
            <div className="faq_in flex">
                <div className="title">
                    <h2>
                        <span className="bigger">FAQ</span>
                        FAQ
                    </h2>
                </div>
                <div className="accordeon">
                    {faqItems.map((faqItem, index) => (<div className="item" key={index}>
                            <p className="ttl" onClick={(e) => toggleFaqItem(e)}>{faqItem.title}</p>
                            <div className="item_in">{faqItem.content}</div>
                        </div>))}
                </div>
            </div>
        </section>)
}

export default Faq