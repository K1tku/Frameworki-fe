import {FC, useState, ChangeEvent} from 'react';
import styled from 'styled-components';

import house from '../icons/house.png';
import network from '../icons/network.png';
import publications from '../icons/publications.png';
import entities from '../icons/entities.png';
import ecosystem from '../icons/ecosystem.png';
import people from"../icons/people.png";
import tauren from '../../media/icons/tauren.png';
import privacy from '../icons/privacy.png';
import administration from '../icons/administration.png';
import settings from '../icons/settings.png';
import logout from '../icons/logout.png';

const Wrapper = styled.div`
  position: absolute;
  top: 43px;
  left: 0;
  background: white;
  padding: 0px;
  border: 1px solid #caccd3;
  width: 300px;
  z-index: 1;
`;

const Account = styled.div`
  display: inline-flex;
`;



export const ExpandedMenu: FC = () => {
    const [inputText, setInputText] = useState<string>(``);
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
    return(
        <Wrapper>
            <ul>
                <input style={{marginLeft:'10px', marginTop:'10px'}} type="text" value={inputText} onChange={inputHandler} placeholder="Search..."/>
                <br/><label style={{color:'#969A9F', fontSize:'13px', fontWeight:'bold', padding:'14px'}}>Platform</label>

                {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><a href="/HomePage" style={{textDecoration:'none'}}><img src={house} alt={house} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Home</a></li>}

                {'Publication'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><a href="/Publications" style={{textDecoration:'none'}}><img src={publications} alt={publications} style={{paddingLeft:'14px', paddingRight:'18px',verticalAlign: 'text-bottom'}}/>Publications</a></li>}

                {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><a href="/" style={{textDecoration:'none'}}><img src={people} alt={people} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>People</a></li>}

                {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><a href="/Entities" style={{textDecoration:'none'}}><img src={entities} alt={entities} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Entities</a></li>}

                {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><a href="/" style={{textDecoration:'none'}}><img src={administration} alt={administration} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Administration</a></li>}

                <label style={{color:'#969A9F', fontSize:'13px', fontWeight:'bold', padding:'14px'}}>Workspaces</label>

                {'Client conract'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <li  style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><a href="/WorkspaceClientconract" style={{textDecoration:'none'}}><img src={entities} alt={entities} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Client conract</a></li>}

                {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><a href="/Workspace" style={{textDecoration:'none'}}><img src={entities} alt={entities} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Supplier contract</a></li>}

                {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><a href="/Workspacecorporate" style={{textDecoration:'none'}}><img src={entities} alt={entities} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Corporate</a></li>}

                {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><a href="/Workspacegroupnorms" style={{textDecoration:'none'}}><img src={entities} alt={entities} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Group Norms</a></li>}

                {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><a href="/Workspacerealestatecontracts" style={{textDecoration:'none'}}><img src={entities} alt={entities} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Real estate contracts</a></li>}

                <hr style={{height: '1px', width: '100%',borderWidth:'0', color:'#caccd3d', backgroundColor:'#caccd3'}}></hr>
                <label style={{color:'#969A9F', fontSize:'13px', fontWeight:'bold', padding:'14px'}}>Account</label>
                <li style={{paddingBottom: '0px',paddingTop: '4px'}}>
                    <img src={tauren} alt={tauren} height="30xp" style={{marginLeft:'15px',borderRadius: '20px', position: 'absolute'}}/>
                    <Account>
                        <a style={{color:'darkslategrey', fontSize:'14px', fontWeight:'bold', marginLeft:'60px'}}>High Mountain Tauren</a>
                        <a href="/Profile" style={{color:'darkblue', fontSize:'11px', marginLeft:'-55px', marginTop:'17px', textDecoration:'none'  }}>See Profile</a>
                    </Account>
                </li>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={privacy} alt={privacy} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Privacy</li>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={settings} alt={settings} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Settings</li>
                <hr style={{height: '1px', width: '100%',borderWidth:'0', color:'#caccd3d', backgroundColor:'#caccd3'}}></hr>
                <li style={{color:'#969A9F', paddingTop:'5px', paddingBottom:'15px'}}><img src={logout} alt={logout} style={{paddingLeft:'55px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Logout</li>
            </ul>
        </Wrapper>
    );

};