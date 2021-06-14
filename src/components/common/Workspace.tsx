import React, { FC } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../StyledHelpers/Components';

import WCSAS from "../../media/icons/WCSAS.jpg"
import followed from "../../media/icons/followed2.jpg";
import search from "../icons/search.png";
import allWorks from "../../media/icons/allWorks.jpg";
import sas from "../../media/icons/sasWorks.jpg";
import sarl from "../../media/icons/sarlWorks.jpg";
import communities from "../../media/icons/communitiesWorks.jpg";
import poa from "../../media/icons/poaWorks.jpg";
import survey from "../../media/icons/surveyWorks.jpg";
import kropeczki from "../../media/icons/kropeczki.jpg";
import secondary from "../../media/icons/secWorks.jpg";
import ReactPaginate from "react-paginate";
import "./CommonStyled.css"




const LatestUpdates = styled.div`
    background-color: #282c34;
  margin-left: 200px;
  width: 1000px;
 

`;

const StartWorking = styled.div`
  background-color: #282c34;
  margin-left: 15px;
  width: 1000px;
  
`;

const Top = styled.div`
  background-color: #282c34;
  margin-left: 15px;
  width: 1000px;
  
`;
const LatestUpdatesTop = styled.div`
  background-color: #282c34;
  

`;
const LatestUpdatesMedia = styled.div`
  background-color: #282c34;
  margin-top: 15px;
  
`;
const LatestUpdatesContent = styled.div`
  background-color: #282c34;
  margin-top: 15px;
`;
const SearchField = styled.div`
  width: 250px;
  padding: 10px;
  margin-left: 600px;
  margin-top: 75px;
  
`;

const SearchButton = styled.div`
  height: 35px;
  color: white;
  padding: 3px;
  font-size: 30px;
  cursor: pointer;
  margin-left: 780px;
  position: absolute;
  margin-top: -43px;
  `;



export const Workspace: FC = () => {
    return (
        <Wrapper>
            <Top>

            </Top>

            <StartWorking>

            </StartWorking>

            <LatestUpdates>
                <LatestUpdatesTop>
                    <div style={{position:"absolute", fontSize:'30px', marginLeft:'10px', marginTop:'10px', color:'lightblue'}}>Latest Updates</div>
                    <img style={{height:'30px' ,position:'absolute', marginLeft:'830px', marginTop:'10px',cursor:'pointer', }} src ={followed} alt={followed}/>

                    <SearchField>
                        <input type="text" placeholder="Filter by title..." style={{width:'200px', height:'25px', fontSize:'20px'}}/>
                    </SearchField>

                    <SearchButton>
                        <img style ={{height:'21px'}} src={search} alt="search" />
                    </SearchButton>


                </LatestUpdatesTop>

                <LatestUpdatesMedia>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={allWorks} alt={allWorks}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={sas} alt={sas}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={sarl} alt={sarl}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={secondary} alt={secondary}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={communities} alt={communities}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={poa} alt={poa}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={survey} alt={survey}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={kropeczki} alt={kropeczki}/>

                </LatestUpdatesMedia>

                <LatestUpdatesContent>
                    <img style={{height:'130px', marginTop:'10px',marginLeft:'10px', borderRadius:'5px'}} src={WCSAS} alt={WCSAS}/>
                    <img style={{height:'130px', marginTop:'10px',marginLeft:'10px', borderRadius:'5px'}} src={WCSAS} alt={WCSAS}/>
                    <img style={{height:'130px', marginTop:'10px',marginLeft:'10px', borderRadius:'5px'}} src={WCSAS} alt={WCSAS}/>
                    <img style={{height:'130px', marginTop:'10px',marginLeft:'10px', borderRadius:'5px'}} src={WCSAS} alt={WCSAS}/>
                    <img style={{height:'130px', marginTop:'10px',marginLeft:'10px', borderRadius:'5px'}} src={WCSAS} alt={WCSAS}/>
                    <img style={{height:'130px', marginTop:'10px',marginLeft:'10px', borderRadius:'5px'}} src={WCSAS} alt={WCSAS}/>
                    <img style={{height:'130px', marginTop:'10px',marginLeft:'10px', borderRadius:'5px'}} src={WCSAS} alt={WCSAS}/>
                    <img style={{height:'130px', marginTop:'10px',marginLeft:'10px', borderRadius:'5px'}} src={WCSAS} alt={WCSAS}/>
                    <img style={{height:'130px', marginTop:'10px',marginLeft:'10px', borderRadius:'5px'}} src={WCSAS} alt={WCSAS}/>
                    <img style={{height:'130px', marginTop:'10px',marginLeft:'10px', borderRadius:'5px'}} src={WCSAS} alt={WCSAS}/>
                    <img style={{height:'130px', marginTop:'10px',marginLeft:'10px', borderRadius:'5px'}} src={WCSAS} alt={WCSAS}/>

                    <ReactPaginate
                        previousLabel={"PREVIOUS"}
                        nextLabel={"NEXT"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        containerClassName={"pagination"}
                        activeClassName={"active"} pageCount={15}/>

                </LatestUpdatesContent>


            </LatestUpdates>


        </Wrapper>


    );
}