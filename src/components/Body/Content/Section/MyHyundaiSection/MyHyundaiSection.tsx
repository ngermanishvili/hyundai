import { styled } from 'styled-components';
import { CommonSection } from '../CommonSection';
import { ListItem } from './ListItem/ListItem';
import { list } from './data/data';
import { AppCard } from '@/src/components/common/Card/AppCard/AppCard';
import { HorizontalSlide } from '@/src/components/common/HorizontalSlide/HorizontalSlide';

export const MyHyundaiSection = () => {
  return (
    <CommonSection
      title="ჩემი ჰიუნდაი"
      titleTailList={[
        'იხილეთ უახლესი ინფორმაცია',
        'ჩემი ჰიუნდაი აპლიკაცია',
      ]}
    >
      <Styled.SectionBody>
        <HorizontalSlide>
          {list.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </HorizontalSlide>
        <AppCard />
      </Styled.SectionBody>
    </CommonSection>
  );
};

const Styled = {
  SectionBody: styled.div`
    padding-right: 0 !important;
    padding-left: 0 !important;

    margin-top: 30px;
    padding: 0 15px;
  `,
};
