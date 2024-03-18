import Link from 'next/link';
import { styled } from 'styled-components';

interface TextLinkProps {
  headerType: HeaderMenuType;
}

export const TextLink = ({ headerType }: TextLinkProps) => {
  if (!['Menu', 'Web'].includes(headerType)) return null;
  return (
    <Styled.TextLink
      href="/kr/ko/e/vehicles/eco-incentive?utm_source=hyundaicom&amp;utm_medium=display&amp;utm_campaign=2023_quickwin&amp;utm_content=gnb_util"
      title="აქ დაწერეთ თქვენი ტექსტი"
      target="_blank"
      $headerType={headerType}
    >
      აქ დაწერეთ  <b>ტექსტი</b>
    </Styled.TextLink>
  );
};

const Styled = {
  TextLink: styled(Link) <{ $headerType: HeaderMenuType }>`
    position: relative;
    color: ${props => (props.$headerType === 'Menu' ? '#fff' : '#000')};

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: -17px;
      width: 1px;
      height: 88%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      background-color: #fff;
    }
  `,
};
