import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Wrapper } from '../StyledHelpers/Components';
import { Colors } from '../StyledHelpers/Colors';
import {HomePage} from "../HomePage/HomePage";

import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Entities} from "../common/Entities";
import {Ecosystem} from "../common/Ecosystem";
import {Publications} from "../common/Publications";
import {YourNetwork} from "../common/YourNetwork";
import {YourPublications} from "../common/YourPublications";
import {Profile} from "../Profile/Profile";


const Content = styled.div`
  height: 1000px;
  display: flex;
  background: lightgrey;
  
`;


const MainPage: FC = () => {
    return (
        <Router>
        <Wrapper>
            <TopBar/>
            <Content>
                <LeftMenu/>
                <Switch>

                    <Route path="/entities" exact>
                        <Entities/>
                    </Route>
                    <Route path="/ecosystem" exact>
                        <Ecosystem/>
                    </Route>
                    <Route path="/publications" exact>
                        <Publications/>
                    </Route>
                    <Route path="/yourpublications" exact>
                        <YourPublications/>
                    </Route>
                    <Route path="/yournetwork" exact>
                        <YourNetwork/>
                    </Route>
                    <Route path="/profile" exact>
                        <Profile/>
                    </Route>

                    <HomePage/>
                </Switch>
            </Content>

        </Wrapper>
        </Router>
    );
};

export default MainPage;
// DODAC PAGINACJE CZYLI PRZEWIJANIE STRON