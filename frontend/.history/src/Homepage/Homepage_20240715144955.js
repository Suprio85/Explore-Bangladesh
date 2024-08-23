import React from 'react';
import VideoIntro from './VideoIntro';
import ExploreBangladesh from './ExploreBangladesh';
import Category from './Category';
import Parts from './Parts';
const Homepage = () => {
    return ( <div>
        <VideoIntro/>
        <div className='bg-black'><ExploreBangladesh/></div>
        <div className='bg-black'><Category/></div>
        <Parts/>
    </div> );
}
 
export default Homepage;