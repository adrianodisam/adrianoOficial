import React from 'react';
import styles from './Footer.module.css';
import facebook from '../img/facebook_icon-icons.com_66092.svg';
import email from '../img/mail_email_message_electronic_online_web_icon-icons.com_59986.svg';
import linkedin from '../img/linkedin_icon-icons.com_65929.svg';
import github from '../img/github_icon-icons.com_65450.svg';

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <span>Desenvolvido por Adriano Sampaio</span>
        <div className={styles.Footersvgsdiv}>
          <img src={facebook} alt={facebook} />
          <img src={github} alt={github} />
          <img src={linkedin} alt={linkedin} />
          <img src={email} alt={email} />
        </div>
      </div>
    </>
  );
};

export default Footer;
