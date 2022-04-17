import React, { useEffect } from "react";
import Layout from "./Layout";
import styled from "styled-components";
import skillSet from "./../utils/skillSet";

const StyledUl = styled.ul`
  line-height: 1.5rem;

  & li {
    margin-bottom: 0.3rem;
    overflow-wrap: break-word;
  }
`;

const Skill = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  const skillSetLi = skillSet.map((skill, i) => <li key={i}>{skill}</li>);

  return (
    <Layout h1="Skills &amp; Experience">
      <h2>TECHNICAL SKILLS</h2>
      <StyledUl>{skillSetLi}</StyledUl>

      <h2>EXPERIENCE</h2>
      <h3>
        Times Internet (Economic Times), Noida - <i>Front-End Web Developer</i>
      </h3>
      <em>Nov 2019 - Present</em>

      <h4>Key Qualifications &amp; Responsibilities</h4>
      <StyledUl>
        <li>
          Built and managed Canldestick Screener -
          https://economictimes.indiatimes.com/markets/candlestick-screener
        </li>
        <li>
          Built and Managed Mutual Fund screener for both Desktop and Mobile -
          https://economictimes.indiatimes.com/mutual-fund-screener/better-than-fixed-deposits
        </li>
        <li>
          Built Income Tax Calculator for both Desktop and Mobile -
          https://economictimes.indiatimes.com/wealth/calculators/income-tax-calculator
        </li>
        <li>
          Made multiple contributions in the technical charts -
          https://economictimes.indiatimes.com/markets/technical-charts?symbol=RELIANCEEQ&exchange=NSE&entity=company
        </li>
        <li>
          Bug fixing and technology updates like replacing Regular/Long polling
          based stock updates with Server Sent Events, etc.
        </li>
        <li>Mail Templates building</li>
        <li>Widgets Building</li>
        <li>
          Made Node.js node-canvas based services for company Sparkline graphs,
          Bar graphs and their multiple variants. -
          https://economictimes.indiatimes.com/acc-ltd/stocks/companyid-6.cms
        </li>
      </StyledUl>

      <h3>
        Intelligent Computer, Kolkata - <em>Full Stack Web Developer</em>
      </h3>
      <em>Dec 2017 - Nov 2019</em>

      <h4>Key Qualifications &amp; Responsibilities</h4>
      <StyledUl>
        <li>
          Built and managed rolandbal.com, developed plugins for tasks like -
          payment gateways integration, member portal, third-party integration
          and support
        </li>
        <li>Made Tally Integration Server on eapindia.net and private IP</li>
        <li>Made Tally Connector in Electron</li>
        <li>Developed member portal</li>
        <li>PayPal, Paymill, Checkout and Stripe integration</li>
        <li>Amazon SES integration and Mautic management</li>
        <li>Managed matomo for Analytics</li>
        <li>Built lacasamarta.com</li>
      </StyledUl>

      <h3>
        IL &amp; FS Skills, Delhi - <em>Full Stack Web Developer</em>
      </h3>
      <em>Oct 2015 - Dec 2017</em>

      <h4>Key Qualifications &amp; Responsibilities</h4>
      <StyledUl>
        <li>Worked on Intel XDK for apps</li>
        <li>Developed Rest APIs for apps</li>
        <li>Customized Vtiger CRM</li>
        <li>Worked on company websites development and maintenance</li>
        <li>
          Developed and customized modules for student portal of IL&amp;FS
          Skills
        </li>
      </StyledUl>

      <h3>
        PcPatchers Technology, Delhi - <em>Web Developer</em>
      </h3>
      <em>Mar 2014 - Oct 2015</em>

      <h4>Key Qualifications &amp; Responsibilities</h4>
      <StyledUl>
        <li>Developed Piggybank like application moneyrunner</li>
        <li>Used ActionScript and CodeIgniter for Web Show</li>
        <li>Developed Model Directory in WordPress and Core PHP</li>
        <li>Developed many CMS based websites</li>
      </StyledUl>
    </Layout>
  );
};

export default Skill;
