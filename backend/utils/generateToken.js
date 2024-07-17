import jwt from 'jsonwebtoken';
import express from 'express';

export const generateToken = (res,id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}