import React from 'react'

import './Faq.css'

import {toggleFaqItem} from '../../js/script.js'

function Faq() {
    return (
        <section className="faq">
            <div className="faq_in flex">
                <div className="title">
                    <h2>
                        <span className="bigger">FAQ</span>
                        FAQ
                    </h2>
                </div>
                <div className="accordeon">
                    {faqItems.map((faqItem, index) => (
                        <div className="item" key={index}>
                            <p className="ttl" onClick={(e) => toggleFaqItem(e)}>{faqItem.title}</p>
                            <div className="item_in">{faqItem.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq

let faqItems = [
    {
        title: "Who is Metoshi?",
        content: "The critically endangered small red panda. Lives in the\n " +
            "southeastern part of the Himalayas. The panda is found in the\n " +
            "forests of China and India. Several hundred animals have been\n " +
            "recorded in Nepal. This cute creature is listed on the Endangered\n " +
            "Species Act. Let's help all together these cute, funny red pandas\n " +
            "!!!"
    },
    {
        title: "Who is Metoshi?",
        content: "The critically endangered small red panda. Lives in the\n " +
            "southeastern part of the Himalayas. The panda is found in the\n " +
            "forests of China and India. Several hundred animals have been\n " +
            "recorded in Nepal. This cute creature is listed on the Endangered\n " +
            "Species Act. Let's help all together these cute, funny red pandas\n " +
            "!!!"
    },
    {
        title: "Who is Metoshi?",
        content: "The critically endangered small red panda. Lives in the\n " +
            "southeastern part of the Himalayas. The panda is found in the\n " +
            "forests of China and India. Several hundred animals have been\n " +
            "recorded in Nepal. This cute creature is listed on the Endangered\n " +
            "Species Act. Let's help all together these cute, funny red pandas\n " +
            "!!!"
    }
]