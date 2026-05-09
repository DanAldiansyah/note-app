import express from 'express';
import authControllers from '../controllers/authControllers.js';

const router = express.Router()
const { signUp, signIn } = authControllers

router.post('/signup', signUp)
router.post('/signin', signIn)

export default router