import React from 'react'
import {useIntl} from 'react-intl'
import './Faq.css'
import ToggleItem from './ToggleItem'

function GetFaqItems() {
    const intl = useIntl()
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
    }, {
        title: intl.formatMessage({id: 'faq_item_title8'}), content: intl.formatMessage({id: 'faq_item_content8'})
    }, {
        title: intl.formatMessage({id: 'faq_item_title9'}), content: intl.formatMessage({id: 'faq_item_content9'})
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
            <div className="accordion">
                {faqItems.map((faqItem, index) => (
                    <ToggleItem key={index} title={faqItem.title} content={faqItem.content}/>))}
            </div>
        </div>
    </section>)
}

export default Faq