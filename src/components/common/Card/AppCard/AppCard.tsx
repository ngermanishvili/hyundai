import { styled } from 'styled-components';
import { Card } from '../Card';

export const AppCard = () => {
  return (
    <Styled.AppWrap>
      <Card
        title="ჩვეენი აპლიკაცია"
        linkText="ჩამოტვირთეთ აპლიკაცია"
        linkUrl="https://myhyundai.page.link/app_home"
        descriptionList={[
          'გადმოწერე',
          'როგორც IOS/Android აპლიკაცია',
          'ჩვენი აპლიკაცია გთავაზობთ საუკეთესო ხარისხის ავტო-ნაწილებს და სერვისებს.',
        ]}
      />
    </Styled.AppWrap>
  );
};

const Styled = {
  AppWrap: styled.div`
    position: relative;
    width: 288px;
    height: 440px;
    padding: 33px 0 0 40px;
    text-align: left;
    background-color: #f6f3f2;

    width: calc(100% - 56px);
    height: auto;
    margin: 40px auto 0;
    padding-bottom: 31px px;

    width: calc(100% - 30px);
    margin: 30px 15px 0;
    padding: 30px 15px 25px;

    &:before {
      position: absolute;
      right: 40px;
      bottom: 36px;
      display: block;
      content: '';
      width: 120px;
      height: 120px;
      background: url(/images/re_hyundaishop_app.png) no-repeat;

      width: 60px;
      height: 60px;
      right: 40px px;
      bottom: 30px;
      background-size: 100%;

      right: 16px;
      bottom: 30px;
    }
  `,
};
