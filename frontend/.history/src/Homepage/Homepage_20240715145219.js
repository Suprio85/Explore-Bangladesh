import React from 'react';
import VideoIntro from './VideoIntro';
import ExploreBangladesh from './ExploreBangladesh';
import Category from './Category';
import Parts from './Parts';
const Homepage = () => {
    return ( <div>
        <div className=' overflow-hidden'><VideoIntro/></div>
        <div className=' '><ExploreBangladesh/></div>
        <div className=' overflow-hidden'><Category/></div>
        <div className=' overflow-hidden'><Parts/></div>
        
    </div> );
}
 
export default Homepage;