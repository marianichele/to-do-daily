import React from 'react';

import {
  Address,
  Container,
  Content,
  FirstSection,
  Footer,
  FooterIcon,
  FooterLinks,
  Header,
  HeaderLinks,
  Icons,
  SecondSection,
  ThirdSection,
} from './styles';

export const LandingPage: React.FC = () => {
  const iconstData = [
    {
      image: '/svg/icon2ndSection_1.svg',
      title: 'Small task',
    },
    {
      image: '/svg/icon2ndSection_2.svg',
      title: 'Write it',
    },
    {
      image: '/svg/icon2ndSection_3.svg',
      title: 'Do it',
    },
    {
      image: '/svg/icon2ndSection_4.svg',
      title: 'Repeat',
    },
  ];

  const footerData = [
    {
      title: 'Features',
      text1: 'Lorem',
      text2: 'Ipsum',
      text3: 'Sit',
      text4: 'Dolor',
    },
    {
      title: 'Pricing',
      text1: 'Lorem',
      text2: 'Ipsum',
      text3: 'Sit',
      text4: 'Dolor',
    },
  ];

  return (
    <Container>
      <Header>
        <div>
          <img src="/svg/icon.svg" alt="to do daily icon" />
          <h1>Todo Daily</h1>
        </div>

        <HeaderLinks>
          <a>Login</a>
          <a>Signup</a>
        </HeaderLinks>
      </Header>

      <Content>
        <FirstSection>
          <h1>Organizing your day activity with Todo Daily</h1>
          <button type="button">Get started</button>
          <img src="/svg/content.svg" alt="content" />
        </FirstSection>

        <SecondSection>
          <h1>Don’t let your day doing nothing</h1>

          <Icons>
            {iconstData.map(content => (
              <div>
                <img src={content.image} alt="icon" />

                <h1>{content.title}</h1>
              </div>
            ))}
          </Icons>
        </SecondSection>

        <ThirdSection>
          <img src="/svg/3rdSection.svg" alt="content" />

          <div>
            <h1>Achieve your target and won your life</h1>
            <button type="button">Get started</button>
          </div>
        </ThirdSection>

        <hr />

        <Footer>
          <div>
            <FooterIcon>
              <img src="/svg/icon.svg" alt="to do daily icon" />

              <p>Lets change your habit join with million people</p>
            </FooterIcon>

            <Address>
              <p>DK Tech Company</p>
              <p>Uma Street, Lost City, Aincard </p>
            </Address>
          </div>

          <FooterLinks>
            {footerData.map(content => (
              <div>
                <h1>{content.title}</h1>
                <a>{content.text1}</a>
                <a>{content.text2}</a>
                <a>{content.text3}</a>
                <a>{content.text4}</a>
              </div>
            ))}
          </FooterLinks>
        </Footer>
      </Content>
    </Container>
  );
};
