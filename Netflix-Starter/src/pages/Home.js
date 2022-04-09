import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { Logo } from '../images/Netflix';
import { ConnectButton, Icon, TabList, Tab } from 'web3uikit';
import { Movies } from '../helpers/library';


const Home = () => {

return (
    <>
  <div className="logo">
    <Logo />
  </div>
  <div className="connect">
    <Icon fill='#ffffff' size={24} svg="bell" />
    <ConnectButton />
  </div>
  <div className="topBanner">
    <TabList defaultActiveKey={1} tabStyle="bar">
      <Tab tabkey={1} tabName={"Movies"}></Tab>
        <div className="scene">
          <img className="sceneImg" src={Movies[0].Scene}></img>
          <img className="sceneLogo" src={Movies[0].Logo}></img>
          <p className="SceneDesc">{Movies[0].Description}</p>
        </div>
      <Tab tabkey={2} tabName={"Series"} isDisabled={true}></Tab>
      <Tab tabkey={3} tabName={"MyList"}></Tab>
    </TabList>
     
  </div>
   
    </>
  );
};

export default Home;