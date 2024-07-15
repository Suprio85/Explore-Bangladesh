import express from 'express';
const Router = express.Router();
import {getTouristSpots,getTouristSpotById,getHotelsByTouristSpotId,getEventsByTouristSpotId
    ,getPackagesByTouristSpotId
    ,getReviewsByTouristSpotId,
    postReviewsByTouristSpotId,
} from '../controller/touristspotController.js';

import {protect} from '../middlewares/auth.js';

Router.get('/', getTouristSpots);
Router.get('/:id', getTouristSpotById);
Router.get('/:id/hotels', getHotelsByTouristSpotId);
Router.get('/:id/events', getEventsByTouristSpotId);
Router.get('/:id/packages', getPackagesByTouristSpotId);
Router.get('/:id/reviews', getReviewsByTouristSpotId);
Router.post('/:id/reviews',protect, postReviewsByTouristSpotId);




export default Router;