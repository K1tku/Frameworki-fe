import {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
  background: white;
  padding: 16px;
  border: 1px solid;
  width: 215px;
`;

export const ExpandedMenu: FC = () => {
    return(
        <Wrapper>
            <ul>
                <li>Pozycja 1</li>
                <li>Pozycja 2</li>
                <li>Pozycja 3</li>
                <li>Pozycja 4</li>
            </ul>
        </Wrapper>
    );

};