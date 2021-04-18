import React, { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../StyledHelpers/Components';
import search from "../icons/search.png";
import arrowDown from "../icons/arrow-down.png"
import useDropdown from "react-dropdown-hook";
import {ExpandedMenuHP} from "../HomePage/ExpandedMenuHP";




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
  background: none;
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
  margin-top: -26px;
`;
const MenuWrapper = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  width: 90px;
  justify-content: space-between;
  margin-left: 1330px;
  margin-top: -20px;
  
`;
const LeftSide = styled.div`

`;

export const HomePage: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropDown] = useDropdown();

    const menuHandler = () => {
        toggleDropDown();
    }
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
                    <input type="text" placeholder="Filter by title..." style={{height:'20px'}}/>
                </SearchField>

                <SearchButton>
                    <img src={search} alt="search" />
                </SearchButton>

                <MenuWrapper ref={wrapperRef}>
                    <LeftSide onClick={menuHandler}>
                        <span style={{fontSize:'19px', color:'blue'}}>Followed</span>
                    </LeftSide >
                    <img onClick={menuHandler} src ={arrowDown} alt = ""/>
                    {dropdownOpen &&
                    <ExpandedMenuHP/>
                    }
                </MenuWrapper>
            </ResumeYourWork>
        </Wrapper>
    );
}