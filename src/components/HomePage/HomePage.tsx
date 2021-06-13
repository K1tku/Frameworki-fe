import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../StyledHelpers/Components';
import search from "../icons/search.png";
import arrowDown from "../icons/arrow-down.png"
import useDropdown from "react-dropdown-hook";
import building from "../../media/photos/building-images.jpg"
import writing from "../../media/photos/writing.jpg"
import WorkspacesPhoto from"../../media/photos/WorkspacesPhoto.jpg"
import tauren from '../../media/icons/tauren.png';
import {ExpandedMenuHP} from "../HomePage/ExpandedMenuHP";
import ReactPaginate from 'react-paginate';
import "./HomePageStyled.css"
import "./../../App.css";
import {SMenu} from "./ScrollMenu";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {Button} from "react-native";





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
  background: none;
  width: 1500px;
  height: 200px;
  border-radius: 5px;
`;

const ResumeYourWork = styled.div`
  margin-left: 30px;
  margin-top: 100px;
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

                <a style={{color:'white',fontSize:'23px',position:'absolute', marginLeft:'20px', marginTop:'230px'}}>Lorem inpsum dolor sit amet, consecteur adipisiscing <br/> elit... and one more line for the demo</a>
                <a style={{fontSize:'14px', position:'absolute', marginLeft:'20px', marginTop:'290px', color:'white'}}>7 jan. 2020</a>
                <a style={{fontSize:'14px', position:'absolute', marginLeft:'120px', marginTop:'290px', color:'white'}}>High Mountain Tauren</a>
                <img src={tauren} alt={tauren} height="35xp" style={{borderRadius:'20px', position:'absolute', marginLeft:'87px', marginTop:'278px'}}/>
                <img src = {building} alt={building}
                     style={{height:'350px', borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px',}}/>
                     <a style={{position:'absolute', marginTop:'10px', marginLeft:'20px', fontSize:'20px', color:'darkslategrey'}}>Latest publications</a>
                     <img src={writing} alt={writing} style={{height:'80px', position:'absolute', marginLeft:'20px', marginTop:'40px'}}/>
                     <img src={writing} alt={writing} style={{height:'80px', position:'absolute', marginLeft:'20px', marginTop:'140px'}}/>
                     <img src={writing} alt={writing} style={{height:'80px', position:'absolute', marginLeft:'20px', marginTop:'240px'}}/>
                     <a style={{fontSize:'17px', position:'absolute', marginLeft:'175px', marginTop:'50px' }}>Lorem inpsum dolor sit amet, consecteur adipisiscing elit... and one more line for the demo</a>
                     <a style={{fontSize:'17px', position:'absolute', marginLeft:'175px', marginTop:'150px' }}>Lorem inpsum dolor sit amet, consecteur adipisiscing elit... and one more line for the demo</a>
                     <a style={{fontSize:'17px', position:'absolute', marginLeft:'175px', marginTop:'250px' }}>Lorem inpsum dolor sit amet, consecteur adipisiscing elit... and one more line for the demo</a>
                     <a style={{fontSize:'14px', position:'absolute', marginLeft:'175px', marginTop:'78px'}}>7 jan. 2020 <a style={{color:'white'}}>odstep</a>High Mountain Tauren</a>
                     <a style={{fontSize:'14px', position:'absolute', marginLeft:'175px', marginTop:'178px'}}>7 jan. 2020  <a style={{color:'white'}}>odstep</a>High Mountain Tauren</a>
                     <a style={{fontSize:'14px', position:'absolute', marginLeft:'175px', marginTop:'278px'}}>7 jan. 2020  <a style={{color:'white'}}>odstep</a>High Mountain Tauren</a>
                     <img src={tauren} alt={tauren} height="35xp" style={{borderRadius:'20px', position:'absolute', marginLeft:'245px', marginTop:'68px'}}/>
                     <img src={tauren} alt={tauren} height="35xp" style={{borderRadius:'20px', position:'absolute', marginLeft:'245px', marginTop:'168px'}}/>
                     <img src={tauren} alt={tauren} height="35xp" style={{borderRadius:'20px', position:'absolute', marginLeft:'245px', marginTop:'268px'}}/>
                     <a style={{fontSize:'17px', position:'absolute', marginTop:'328px', marginLeft:'22px', color:'blue'}}>See more publications</a>

            </LatestPublications>
            <br/><div style={{marginLeft:'40px'}}>
            <h1 style={{fontSize:'25px', color:'darkslategrey'}}>Workspaces</h1></div>
            <WorkSpaces>
                <SMenu/>


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
                <ReactPaginate
                    previousLabel={"PREVIOUS"}
                    nextLabel={"NEXT"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    containerClassName={"pagination"}
                    activeClassName={"active"} pageCount={15}/>

        </ResumeYourWork>
        </Wrapper>
    );
}
