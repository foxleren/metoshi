import React from 'react'

import './Contacts.css'

function Contacts() {
    return (
        <div className="section contacts">
            <div className="contacts_head">
                <h2>Contacts</h2>
            </div>
            <div className="social flex">
                <a target="_blank" href="https://www.instagram.com/metoshi_redpanda/">
                    <img src="/images/soc_Instagram.svg" alt="Instagram"/>
                </a>

                <a target="_blank" href="https://www.facebook.com/profile.php?id=100054355667286">
                    <img src="/images/soc_Facebook.svg" alt="Facebook"/>
                </a>

                <a target="_blank" href="https://twitter.com/MetoshiRedpanda">
                    <img src="/images/soc_Twitter.svg" alt="Twitter"/>
                </a>

                <a target="_blank" href="https://www.linkedin.com/company/metoshi-redpanda">
                    <img src="/images/soc_LinkedIN.svg" alt="LinkedIN"/>
                </a>

                <span className="a parent" href="https://t.me/metoshi_redpanda">
         <img src="/images/soc_Telegram.svg" alt="Telegram"/>
         <span className="socialpp_list">
          <span className="socialpp_listIn">
            <a href="https://t.me/metoshi_redpanda" target="_blank">
              <img src="/images/soc_Telegram.svg" alt="Telegram"/>
              English
            </a>
            <a href="https://t.me/m" target="_blank">
              <img src="/images/soc_Telegram.svg" alt="Telegram"/>
              Русский
            </a>
            <a href="https://t.me/metoshi_ch" target="_blank">
              <img src="/images/soc_Telegram.svg" alt="Telegram"/>
              中文
            </a>
            <a href="https://t.me/metoshi_official" target="_blank">
              <img src="/images/soc_Telegram.svg" alt="Telegram"/>
              Announcement
            </a>
          </span>
         </span>
         </span>
                <a target="_blank" href="https://discord.com/invite/NmV9zx2xed">
                    <img src="/images/soc_Discord.svg" alt="Discord"/>
                </a>
            </div>
        </div>
    )
}

export default Contacts