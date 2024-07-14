import jwt from 'jsonwebtoken';
import express from 'express';

export const generateToken = (res,id) => {
    return jwt.sign({id}, process.env.JWT_SECRET||120, {
        expiresIn: '30d'
    })
}