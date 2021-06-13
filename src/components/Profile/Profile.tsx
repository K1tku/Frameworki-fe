import React, { FC } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../StyledHelpers/Components';
import tauren from "../../media/icons/tauren.png";
import message from "../../media/icons/message.jpg"
import user from "../../media/icons/user.png"
import attach from "../../media/icons/attach.png"

const Panel = styled.div`
background-color: white;
  width: 800px;
  margin-left: 350px;
  margin-top: 25px;
`;

const Panel2 = styled.div`
  background-color: white;
  width: 800px;
  margin-left: 350px;
  margin-top: 1px;
`;

const PanelInformations = styled.div`
  background-color: white;
  width: 800px;
  margin-left: 350px;
  margin-top: 1px;
`;

const SIP = styled.div`
  background-color: white;
  width: 800px;
  margin-left: 350px;
`;

const Proposals = styled.div`
  background-color: white;
  width: 800px;
  margin-left: 350px;
  margin-top: 1px;
`;

const InternalReviews = styled.div`
  background-color: white;
  width: 800px;
  margin-left: 350px;
  margin-top: 1px;
`;

const AOF = styled.div`
  background-color: white;
  width: 800px;
  margin-left: 350px;
  margin-top: 1px;
`;
const Table1 = styled.div`
border-spacing: 20px 2px;
  padding: 10px;
  text-align: left;
`;
const Table2 = styled.div`
border-spacing: 50px 2px;
  padding: 10px;
  text-align: left;
`;
const Table3 = styled.div`
border-spacing: 50px 2px;
  padding: 10px;
  text-align: left;
`;
const Box1 = styled.div`
background-color: lightgrey;
  width: 760px;
  margin-left: 20px;
  height: 45px;
`;
const Box2 = styled.div`
  background-color: lightgrey;
  width: 760px;
  margin-left: 20px;
  height: 45px;
  margin-top: 5px;
`;
const Box3 = styled.div`
  background-color: lightgrey;
  width: 760px;
  margin-left: 20px;
  height: 45px;
  margin-top: 5px;
`;



export const Profile: FC = () => {
    return (
        <Wrapper>
            <Panel>
P1
            </Panel>

            <Panel2>
P2
            </Panel2>

            <PanelInformations>
                <div style={{fontSize:'25px', marginLeft:'20px', fontWeight:'bold'}}>Panel infomations</div>
                <br/><div style={{fontSize:'23px', marginLeft:'20px', color:'gray'}}>Hourly fee</div>
                <div style={{fontSize:'25px', marginLeft:'20px', marginTop:'10px'}} >610$/hour (Negociated)</div>
                <br/><div style={{fontSize:'23px', marginLeft:'20px', color:'gray'}}>Terms & condition</div>
                <div style={{fontSize:'25px', marginLeft:'20px', marginTop:'10px'}} >Monthly 10k$ retainer - see with Jeanny Smith</div>
               <Box3>
                   <img src={attach} alt={attach} height="35xp" style={{borderRadius:'20px',marginLeft:'10px', cursor: 'pointer', marginTop:'5px'}}/>
                    <div style={{marginLeft:'50px', marginTop:'-35px'}}><a style={{fontSize:'25px', marginLeft:'10px', cursor: 'pointer'}}>Attachment-lorem-ipsum25425.jpg</a></div>
                </Box3>
                <a style={{color:'white'}}>....</a>
            </PanelInformations>

            <SIP>
                <a style={{fontSize:'25px', marginLeft:'20px', fontWeight:'bold'}}>Services & pojects</a>
               <br/><br/><a style={{marginLeft:'20px'}}>Corporate M&A and international acquisitions</a>
                <br/><br/><a style={{fontSize:'20px', marginLeft:'20px', fontWeight:'bold'}}>Internal correspondants</a>
                <Box1>
                    <img src={tauren} alt={tauren} height="45xp" style={{borderRadius:'20px',marginLeft:'8px', cursor: 'pointer',}}/>
                    <div style={{marginTop:'-38px', marginLeft:'50px'}}><a style={{fontSize:'25px', marginLeft:'10px', cursor: 'pointer'}}>High Mountain Tauren</a></div>
                    <img style={{height:'25px', marginLeft:'350px', marginTop:'-23px', position:'absolute', cursor: 'pointer'}} src={message} alt={message}/>
                    <div style={{marginTop:'-22px', marginLeft:'370px'}}><a style={{fontSize:'22px', marginLeft:'10px', cursor: 'pointer'}}>Message</a></div>
                    <img style={{height:'25px', marginLeft:'550px', marginTop:'-23px', position:'absolute', cursor: 'pointer'}} src={user} alt={user}/>
                    <div style={{marginTop:'-22px', marginLeft:'570px'}}><a style={{fontSize:'22px', marginLeft:'10px', cursor: 'pointer'}}>Profile</a></div>
                </Box1>
                <Box2>
                    <img src={tauren} alt={tauren} height="45xp" style={{borderRadius:'20px',marginLeft:'8px', cursor: 'pointer',}}/>
                    <div style={{marginTop:'-38px', marginLeft:'50px'}}><a style={{fontSize:'25px', marginLeft:'10px', cursor: 'pointer'}}>High Mountain Tauren</a></div>
                    <img style={{height:'25px', marginLeft:'350px', marginTop:'-23px', position:'absolute', cursor: 'pointer'}} src={message} alt={message}/>
                    <div style={{marginTop:'-22px', marginLeft:'370px'}}><a style={{fontSize:'22px', marginLeft:'10px', cursor: 'pointer'}}>Message</a></div>
                    <img style={{height:'25px', marginLeft:'550px', marginTop:'-23px', position:'absolute', cursor: 'pointer'}} src={user} alt={user}/>
                    <div style={{marginTop:'-22px', marginLeft:'570px'}}><a style={{fontSize:'22px', marginLeft:'10px', cursor: 'pointer'}}>Profile</a></div>
                </Box2>
                <a style={{color:'white'}}>....</a>
            </SIP>

            <Proposals>

                <Table1 style={{fontSize:'20px'}}>
                    <a style={{fontSize:'25px', marginLeft:'20px', fontWeight:'bold'}}>Proposals</a>
                    <br/><br/><tr style={{height:'2em', fontWeight:'bold'}}><th>Name</th><th>Entity</th><th>Location</th><th>Expertise</th><th>Date</th><th>Firm</th></tr>
                    <tr><td>Operation Ti...</td><td>Renault Co...</td><td>France</td><td>#Tax</td><td>20/01/2018</td><td>Racine</td></tr>
                    <tr><td>OP. Prometh...</td><td>Renault HQ</td><td>USA</td><td>#M&A</td><td>18/02/2019</td><td>Clifford chance</td></tr>
                    <tr><td>OP. Latandre</td><td>Renault Br...</td><td>Italia</td><td>#Social</td><td>18/02/2019</td><td>SVZ</td></tr>

                    <a style={{color:'lightblue', marginLeft:'600px', fontWeight:'bold', cursor: 'pointer'}}>See more proposals</a>
                </Table1>
            </Proposals>



            <InternalReviews>

                <Table2 style={{fontSize:'20px'}}>
                    <a style={{fontSize:'25px', marginLeft:'20px', fontWeight:'bold'}}>Internal reviews</a>
                    <br/><br/><tr style={{height:'2em', fontWeight:'bold'}}><th>Name</th><th>Entity</th><th>Location</th><th>Expertise</th><th>Date</th></tr>
                    <tr><td>Operation Ti...</td><td>Renault Co...</td><td>France</td><th>#Tax</th><th>20/01/2018</th></tr>
                    <tr><td>OP. Prometh...</td><td>Renault HQ</td><td>USA</td><th>#M&A</th><th>18/02/2019</th></tr>
                    <tr><td>OP. Latandre</td><td>Renault Br...</td><td>Italia</td><th>#Social</th><th>18/02/2019</th></tr>

                   <br/><a style={{fontSize:'25px', marginLeft:'20px', fontWeight:'bold', cursor: 'pointer'}}>See more Reviews</a>

                </Table2>


            </InternalReviews>

            <AOF>

                <Table3 style={{fontSize:'20px'}}>
                    <a style={{fontSize:'25px', marginLeft:'20px', fontWeight:'bold'}}>Amount od fees</a>
                    <br/><br/><tr style={{fontWeight:'bold'}}><th>Year</th><th>Cost center</th><th>Total amount</th><th>Law firm</th></tr>
                    <tr><td>2019</td><td>CS 153</td><td>3 500$</td><th>Clifford chance</th></tr>
                    <tr><td>2018</td><td>CS 153</td><td>9 500$</td><th>Linklaters</th></tr>
                    <tr><td>2017</td><td>CS 47</td><td>10 500$</td><th>Linklaters</th></tr>
                    <tr><td> </td><td>CS 153</td><td>19 500$</td><th>Linklaters</th></tr>
                    <tr><td> </td><td>CS 32</td><td>15 500$</td><th>Linklaters</th></tr>
                </Table3>
            </AOF>



        </Wrapper>
    );
}