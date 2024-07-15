import React from 'react';
import VideoIntro from './VideoIntro';
import ExploreBangladesh from './ExploreBangladesh';
import Category from './Category';
import Parts from './Parts';
import Dashboard from '../Random/Dashboard';
const Homepage = () => {
    return ( <div>
        <VideoIntro/>
        <ExploreBangladesh/>
        <Category/>
        <Parts/>
        <Dashboard/>
    </div> );
}
 
export default Homepage;