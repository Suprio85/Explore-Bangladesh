import pool from '../config/connectDB.js';
import asyncHandler from 'express-async-handler';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';



// @desc    place an order
// @route   POST /api/order
// @access  Private
export const placeOrder = asyncHandler(async(req,res)=>{
    const {cart_id} = req.body;
    const name = req.user.name;
    console.log(req.user)
    if(!cart_id){
        res.status(400);
        throw new Error('Did not receive cart id');
    }
    console.log(cart_id);
    const price_query = await pool.query('SELECT price FROM "Cart" WHERE id = $1',[cart_id])
    const price = price_query.rows[0].price;
    if(price_query.rows.length === 0){
        res.status(404);
        throw new Error('Cart not found');
    }
    console.log(price);
    console.log(price_query.rows);
    


    const user_id = req.user.user_id;
    const email = req.user.email;
    const details = `SELECT tp.*,cp.quantity,cp.price FROM
                     "Tour_Packages" tp
                     left join "Cart_Package" cp
                     on tp.id = cp.tour_package_id
                     left join "Cart" c
                     on c.id = cp.cart_id
                     WHERE c.id = $1`;
    const cart = await pool.query(details,[cart_id]);
    if(cart.rows.length === 0){
        res.status(404);
        throw new Error('Cart not found');
    }
    
   
   const query = `INSERT INTO "Order"(user_id,cart_id,amount) VALUES($1,$2,$3) RETURNING *`;
    const order = await pool.query(query,[user_id,cart_id,price]);
    if(order.rows.length === 0){
        res.status(404);
        throw new Error('Order not placed');
    }


    
    //Generate PDF of  order details
    const pdfdir = path.join(path.resolve(), 'backend/order_pdf');
    if (!fs.existsSync(pdfdir)) {
        fs.mkdirSync(pdfdir);
    }



    const pdfpath = path.join(pdfdir, `order_${cart_id}.pdf`);
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(pdfpath));
    doc.font('Helvetica-Bold');
    doc.fontSize(24);

    doc.fontSize(25).text('Order Details',{align:'center'});
    doc.fontSize(10).text(new Date().toLocaleString());
    doc.fontSize(20).text(`Name: ${name}`)
    doc.moveDown();

    cart.rows.forEach((tour_package,index)=>{
        doc.fontSize(18).text(`Package ${index + 1}`, { underline: true });
        doc.fontSize(14).text(`Name: ${tour_package.name}`);
        doc.text(`Price: $${tour_package.price}`);
        doc.text(`Quantity: ${tour_package.quantity}`);
        doc.moveDown();
        doc.lineWidth(1).moveTo(50, doc.y + 15).lineTo(550, doc.y + 15).stroke();
    })
    doc.fontSize(15).text(`total: ${price}`)

    doc.end();
    res.download(pdfpath);
   
})