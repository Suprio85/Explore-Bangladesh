import React from 'react';
import VideoIntro from './VideoIntro';
import ExploreBangladesh from './ExploreBangladesh';
import Category from './Category';
import Parts from './Parts';
const Homepage = () => {
    return ( <div>
        <div className='bg-black overflow-hidden'><VideoIntro/></div>
        <div className='bg-black overflow-hidden'><ExploreBangladesh/></div>
        <div className='bg-black overflow-hidden'><Category/></div>
        <div className='bg-black overflow-hidden'><Parts/></div>
        
    </div> );
}
 
export default Homepage;