import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../StyledHelpers/Components';
import children from 'react-children-utilities'
import materialui from '@material-ui/core'

import tauren from '../../media/icons/tauren.png';
import network from '../icons/network.png';
import publications from '../icons/publications.png';
import plus from '../icons/plus.png';
import userPlus from '../icons/user-plus.png';
import entities from '../icons/entities.png';
import ecosystem from '../icons/ecosystem.png';

import {Entities} from "../common/Entities";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const InnerWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  height: 170px;
  width: 250px;
  background: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const InnerWrapper2 = styled.div`
  margin-top: 1px;
  margin-left: 20px;
  height: 70px;
  width: 250px;
  background: white;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const Photo = styled.div`
    margin-left: 80px;
`;
const NameAndTitle = styled.div`
    margin-top: 15px;
    text-align: center;
`;
const YourNetwork = styled.div`
margin-left: 10px;
`;

const YourPublications = styled.div`
margin-left: 10px;
  margin-top: 10px;
`;

const PEE = styled.div`
  margin-left: 40px;
  margin-top: 20px;
`;


export const LeftMenu: FC = () => {

    return (
        <Router>
        <Wrapper>
            <InnerWrapper>
                <Photo>
                <img src = {tauren} alt={tauren} height="90px" style={{borderRadius:'40px'}} />
                </Photo>
                <NameAndTitle>
                    <div>
                      <button style={{background:'white', border:'none', cursor: 'pointer', overflow:'hidden', outline:'none'}}>
                          <a href="/Profile" style={{color:'blue', fontSize:'18px', textDecoration:'none'}}>High Mountain Tauren</a>
                      </button>
                    </div>
                    <div>
                        <br/> <h2 style={{color:'darkgrey',marginTop:'-5px'}}>Job title - Horde</h2>
                    </div>
                </NameAndTitle>

            </InnerWrapper>
            <InnerWrapper2>
                <YourNetwork>
                   <div style={{marginLeft:'5px'}}>
                       <button style={{background:'white', border:'none', cursor:'pointer', }}>
                           <img src = {network} alt = {network} style={{marginTop:'px'}}/>
                           <a href="/YourNetwork" style={{marginLeft:'10px', textDecoration:'none', color:'black'}}>Your Network</a>
                       </button>

                       <button style={{width:'28px', marginLeft:'71px', cursor: 'pointer', background:'white', height:'20px', borderRadius:'5px'}}>
                           <img src = {userPlus} alt = {userPlus} style={{}}/>
                       </button>
                   </div>
                </YourNetwork>
                <YourPublications>
                    <div style={{marginLeft:'5px'}}>
                        <button style={{background:'white', border:'none', cursor:'pointer', }}>
                        <img src = {publications} alt = {publications}/>
                            <a href="/YourPublications" style={{marginLeft:'10px', textDecoration:'none', color:'black'}}>Your Publications</a>
                        </button>

                      <button style={{width:'28px', marginLeft:'50px', cursor: 'pointer', background:'white', height:'20px', borderRadius:'5px'}}>
                          <img src = {plus} alt = {plus} style={{}}/>
                      </button>
                    </div>
                </YourPublications>

            </InnerWrapper2>
            <PEE>
                <div>
                    <button style={{border:'none', background:'none', marginTop:'10px',cursor:'pointer'}}>
                        <img src = {publications} alt = {publications} style={{height:'18px'}}/>
                        <a href="/Publications" style={{marginLeft:'15px', fontSize:'18px', textDecoration:'none', color:'black'}}>Publications</a>
                    </button>
                </div>
                <div>
                    <button  style={{border:'none', background:'none', marginTop:'10px',cursor:'pointer'}}>
                        <img src = {ecosystem} alt = {ecosystem} style={{height:'25px'}}/>
                        <a href="/Ecosystem" style={{marginLeft:'15px', fontSize:'18px', textDecoration:'none', color:'black'}}>Ecosystem</a>
                    </button>
                </div>
                <div>
                    <button style={{border:'none', background:'none', marginTop:'10px',cursor:'pointer'}}>
                        <img src = {entities} alt = {entities}/>
                        <a href="/Entities" style={{marginLeft:'15px', fontSize:'18px', textDecoration:'none', color:'black'}}>Entities</a>

                    </button>

                </div>

            </PEE>

        </Wrapper>
        </Router>
    )

}