import React, { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../StyledHelpers/Components';
import search from "../icons/search.png";



const LatestPublications = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  background: white;
  height: 350px;
  width: 1500px;
  border-radius: 5px;
  
`;

const WorkSpaces = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  background: white;
  width: 1500px;
  height: 200px;
  border-radius: 5px;
`;

const ResumeYourWork = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  background: white;
`;
const SearchField = styled.div`
  width: 250px;
  margin-left: 1100px;
  margin-top: -20px;
  position: absolute;
`;

const SearchButton = styled.div`
  padding: 3px;
  font-size: 30px;
  cursor: pointer;
  margin-left: 1250px;
  position: absolute;
  margin-top: -29px;
`;

export const HomePage: FC = () => {
    return (
        <Wrapper>
            <LatestPublications>

            </LatestPublications>
            <br/><div style={{marginLeft:'40px'}}>
            <h1 style={{fontSize:'25px', color:'darkslategrey'}}>Workspaces</h1></div>
            <WorkSpaces>

            </WorkSpaces>
            <ResumeYourWork>
                <h1 style={{fontSize:'20px', color:'darkslategrey' }}>Resume Your Work</h1>

                <SearchField>
                    <input type="text" placeholder="Search" />
                </SearchField>

                <SearchButton>
                    <img src={search} alt="search" />
                </SearchButton>
            </ResumeYourWork>
        </Wrapper>
    );
}