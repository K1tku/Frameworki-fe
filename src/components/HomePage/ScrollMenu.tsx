import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './HomePageStyled.css';

import Workspace from"../../media/photos/WorkspacesPhoto.jpg"
import styled from "styled-components";
import Workspacecorporate from"../../media/photos/corporate.jpg";
import Workspacerealestatecontracts from "../../media/photos/wrealestatecontracts.jpg";
import Workspaceclientcontract from "../../media/photos/wclientcontract.jpg";
import Workspacegroupnorms from "../../media/photos/wgroupnorms.jpg";

const Content = styled.div`
  height: 230px;
  margin-left: 10px;
  img {
    height: 230px;
    border-radius:10px;
  }
`

const list: any[] = [

    { name: Workspace, link:'Workspace' },
    { name: Workspacecorporate, link:'Workspacecorporate'},
    { name: Workspacerealestatecontracts, link: 'Workspacerealestatecontracts'},
    { name: Workspaceclientcontract, link: 'WorkspaceClientconract' },
    { name: Workspacegroupnorms, link: 'Workspacegroupnorms' },

];

const MenuItem = ({text, selected, link}: {text: any, selected: any, link:any}) => {
    return <div className={`menu-item ${selected ? 'active' : ''}`}>
        <a href={'/'+ link}><img style={{ boxShadow: "0px 2px #d8dbe1", borderLeft: "1px solid #d8dbe1", borderRight: "1px solid #d8dbe1"}} src={text}></img></a>
    </div>;

};


export const Menu = (list: any[], selected: any) =>
    list.map((el) => {
        const {name} = el;

        return <MenuItem text={name} selected={selected} link={el.link}/>;
    });


const Arrow = ({ text, className }: {text: any, className: any}) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';

export class SMenu extends Component {
    private menuItems: any;
    constructor(props: any) {
        super(props);

        this.menuItems = Menu(list, selected);
    }

    state = {
        selected
    };

    onSelect = (key: any) => {
        this.setState({ selected: key });
    }


    render() {
        const { selected } = this.state;

        const menu = this.menuItems;

        return (
            <div className="workspaces">
                <Content>
                    <ScrollMenu
                        data={menu}
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
                        selected={selected}
                        onSelect={this.onSelect}
                    />
                </Content>

            </div>
        );
    }
}
