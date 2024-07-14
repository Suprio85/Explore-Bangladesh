import express from 'express';
const Router = express.Router();
import {getTouristSpots,getTouristSpotById,getHotelsByTouristSpotId,getEventsByTouristSpotId
    ,getPackagesByTouristSpotId
} from '../controller/touristspotController.js';

Router.get('/', getTouristSpots);
Router.get('/:id', getTouristSpotById);
Router.get('/:id/hotels', getHotelsByTouristSpotId);
Router.get('/:id/events', getEventsByTouristSpotId);
Router.get('/:id/packages', getPackagesByTouristSpotId);




export default Router;