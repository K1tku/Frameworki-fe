import React, { FC } from 'react';
import styled from 'styled-components'


import {Wrapper} from "../StyledHelpers/Components";
import {Colors} from "../StyledHelpers/Colors";
import { ExpandedMenu } from './ExpandedMenu';
import { fontSize } from '../StyledHelpers/FontSizes'

import logo from '../../media/icons/logo1.png';
import house from '../icons/house.png';
import search from '../icons/search.png';
import comments from '../icons/comments.png';
import bell from '../icons/bell.png';
import useDropdown from "react-dropdown-hook";
import arrowDown from "../icons/arrow-down.png"
import { Badge } from '@material-ui/core';

const InnerWrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSize["18"]}
  
  
`;

const RightIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(5,auto);
  grid-gap: 20px;
  
`;

const InputWrapper = styled.div`
  align-content: center;
  display:flex;
`;

const LeftLogo = styled.div`
  justify-self: start;
  margin-left: 10px;
  cursor: pointer;
    
`;

const SearchField = styled.div`
  width: 250px;
  padding: 8px;
  margin-left: -350px;
  
`;

const SearchButton = styled.div`
  height: 30px;
  color: white;
  padding: 3px;
  font-size: 30px;
  cursor: pointer;
  margin-top: 2px;
  margin-left: 140px;
  position: absolute;
  
  `;
const MenuWrapper = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  width: 250px;
  justify-content: space-between;
  margin-left: -650px;
  
`;
const LeftSide = styled.div`

`;



export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropDown] = useDropdown();

    const menuHandler = () => {
        toggleDropDown();
    }
    return (
        <Wrapper>
            <InnerWrapper>

                <LeftLogo>
                    <a href="/HomePage"><img src={logo} alt="logo" height="40px" /> </a>
                </LeftLogo>

                <MenuWrapper ref={wrapperRef}>
                    <LeftSide onClick={menuHandler}>
                        <img src ={house} alt = "" />
                        <span>Home</span>
                    </LeftSide >
                    <img onClick={menuHandler} src ={arrowDown} alt = ""/>
                    {dropdownOpen &&
                    <ExpandedMenu/>
                    }
                </MenuWrapper>

                <InputWrapper>i
                    <SearchField>
                        <input type="text" placeholder="Search Legalcluster" style={{width:'500px', height:'20px'}}/>
                    </SearchField>

                    <SearchButton>
                        <img src={search} alt="search" />
                    </SearchButton>
                </InputWrapper>

                <RightIcons>
                    <a href="/HomePage"><img style={{cursor:'pointer'}} src={house} alt="house"/></a>
                    <Badge color="secondary" badgeContent={9} showZero><img style={{cursor:'pointer'}} src={comments} alt="comments"/></Badge>
                        <Badge color="secondary" badgeContent={3} showZero><img style={{cursor:'pointer'}} src={bell} alt="bell"/></Badge>
                </RightIcons>
            </InnerWrapper>
        </Wrapper>
    );
};
export default TopBar

