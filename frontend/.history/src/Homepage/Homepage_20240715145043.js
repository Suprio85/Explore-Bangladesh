import React from 'react';
import VideoIntro from './VideoIntro';
import ExploreBangladesh from './ExploreBangladesh';
import Category from './Category';
import Parts from './Parts';
const Homepage = () => {
    return ( <div>
        <div className='bg-black overflow-hidden'><VideoIntro/></div>
        <div className='bg-black'><ExploreBangladesh/></div>
        <div className='bg-black'><Category/></div>
        <Parts/>
    </div> );
}
 
export default Homepage;