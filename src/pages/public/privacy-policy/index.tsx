import React from 'react';
import { NavBar } from 'components';
import Heading from 'components/heading';
import { Footer } from 'containers';

interface IProps {}

const termsData = [
  {
    id: 0,
    title: 'Terms of Use',
    subTitle: [
      {
        id: 'dhf33333',
        title: `These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and NIC ASIA LAGHUBITTA BITTIYA SANSTHA LTD  ("Company," “we," “us," or “our”), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.`,
      },
      {
        id: 'dhf322333',
        title: `These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and NIC ASIA LAGHUBITTA BITTIYA SANSTHA LTD  ("Company," “we," “us," or “our”), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.`,
      },
      {
        id: 'dhf33322333',
        title: `These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and NIC ASIA LAGHUBITTA BITTIYA SANSTHA LTD  ("Company," “we," “us," or “our”), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.`,
      },
    ],
  },
  {
    id: 1,
    title: 'INTELLECTUA',
    subTitle: [
      {
        id: 'dhf3335533',
        title: `Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.`,
      },
      {
        id: 'dhf3kk22333',
        title: `Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.`,
      },
    ],
  },
  {
    id: 2,
    title: 'USER REPRESENTATIONS',
    subTitle: [
      {
        id: 'dhf333ju5533',
        title: `Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.`,
      },
      {
        id: 'dhf3kkkik22333',
        title: `Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.`,
      },
    ],
  },
  {
    id: 3,
    title: 'USER REPRESENTATIONS',
    subTitle: [
      {
        id: 'dhf333ju5jjj533',
        title: `Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.`,
      },
      {
        id: 'dhf3kkkik228j333',
        title: `Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.`,
      },
    ],
  },
];

const PrivacyPolicy: React.FC<IProps> = ({}) => {
  const [tabActive, setTabActive] = React.useState(0);

  return (
    <React.Fragment>
      <div className="banner-container">
        <NavBar variant="white" />
        <h5 className="banner-container-text">Privacy Policy</h5>
      </div>
      <div className="container mx-auto">
        <div className="d-flex my-5 pt-5">
          <div className="term-wrapper">
            {termsData?.map((items) => (
              <div
                className={`${
                  tabActive === items?.id
                    ? 'term-container-active'
                    : 'term-container-inactive'
                }`}
                key={items?.id}
              >
                <button
                  className={`${
                    tabActive === items?.id
                      ? 'term-btn-active'
                      : 'term-btn-inactive'
                  } text-center`}
                  onClick={() => setTabActive(items?.id)}
                >
                  {items?.title}
                </button>
              </div>
            ))}
          </div>
          <div className="px-5">
            {termsData?.map(
              (items) =>
                items?.id === tabActive &&
                items?.subTitle.map((item) => (
                  <div className="" key={item.id}>
                    <p> {item?.title} </p>
                  </div>
                ))
            )}
          </div>
        </div>
        {/* <p className="f-14">
         
        </p> */}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(PrivacyPolicy);
