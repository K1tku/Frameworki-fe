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

const InnerWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
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


export const LeftMenu: FC = () => {

    return (
        <Wrapper>
            <InnerWrapper>
                <Photo>
                <img src = {tauren} alt={tauren} height="90px" />
                </Photo>
                <NameAndTitle>
                    <div>
                        High Mountain Tauren
                    </div>
                    <div>
                        <br/> Job title - Horde
                    </div>
                </NameAndTitle>

            </InnerWrapper>
            <InnerWrapper2>
                <YourNetwork>
                   <div style={{marginLeft:'5px'}}>
                       <button style={{background:'white', border:'none', cursor:'pointer', }}>
                           <img src = {network} alt = {network} style={{marginTop:'px'}}/>
                       </button>
                   Your Network
                       <button style={{width:'28px', marginLeft:'71px', cursor: 'pointer', background:'white', height:'20px', borderRadius:'5px'}}>
                           <img src = {userPlus} alt = {userPlus} style={{}}/>
                       </button>
                   </div>
                </YourNetwork>
                <YourPublications>
                    <div style={{marginLeft:'5px'}}>
                        <button style={{background:'white', border:'none', cursor:'pointer', }}>
                        <img src = {publications} alt = {publications}/>
                        </button>
                    Your Publications
                      <button style={{width:'28px', marginLeft:'50px', cursor: 'pointer', background:'white', height:'20px', borderRadius:'5px'}}>
                          <img src = {plus} alt = {plus} style={{}}/>
                      </button>
                    </div>
                </YourPublications>

            </InnerWrapper2>

        </Wrapper>
    )

}