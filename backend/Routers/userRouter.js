import express from 'express';
import {registerUser,loginUser,getUserProfile,updateUserProfile,logoutUser} from '../controller/userController.js';
import {protect} from '../middlewares/auth.js';
const router = express.Router();



router.post('/', registerUser);


router.post('/login', loginUser);

router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

router.post('/logout',protect, logoutUser);


export default router;