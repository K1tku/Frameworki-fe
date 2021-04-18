import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Wrapper } from '../StyledHelpers/Components';
import { Colors } from '../StyledHelpers/Colors';
import {HomePage} from "../HomePage/HomePage";


const Content = styled.div`
  height: 1000px;
  display: flex;
  background: lightgrey;
  
`;


const MainPage: FC = () => {
    return (
        <Wrapper>
            <TopBar/>
            <Content>
                <LeftMenu/>
                <HomePage/>
            </Content>

        </Wrapper>
    );
};

export default MainPage;
