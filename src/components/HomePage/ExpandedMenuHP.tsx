import {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
  background: white;
  padding: 16px;
  border: 1px solid;
  width: 70px;
`;

export const ExpandedMenuHP: FC = () => {
    return(
        <Wrapper>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </Wrapper>
    );

};