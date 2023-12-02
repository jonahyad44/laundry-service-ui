import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import cors from 'cors';
import { json } from 'body-parser';
import Stripe from 'stripe';
import { env } from "node:process";
import { PrismaClient } from "@prisma/client";
const jwt = require("jsonwebtoken");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');


const prisma = new PrismaClient();
const port = 3001;
const app = express();
const stripe = new Stripe('sk_test_51ODvYwDEtVoGXwUaSYKqzFhtt9WYjxTh3D3kJtxMGkWvZGeEni0VDmgAXkiG28VRCcMlqEnCRwB9CqcgbDE2bURW00JW1Wkp5g', {
    apiVersion: '2023-10-16', // Use the latest API version
  });
  

app.use(json());
app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.post("/api/register", async (req, res) => {
  try {
    const username = req.body.username;
    console.log("Req Recieved");
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    console.log("Pass hashed");
    await prisma.admin.create({
      data: {
        username: username,
        password: hashedPass,
      },
    });
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
  });

  app.post("/api/login", async (req: Request, res: Response) => {
    const { username, password } = req.body;
  const user = await prisma.admin.findFirst({
    where: { username: username },
  });
  if (!user) {
    return res.status(400).send("User not found");
  }

  const correct = await bcrypt.compare(password, user.password);
  if (!correct) {
    res.sendStatus(403);
  } else {
    const token: string = jwt.sign(username, env.JWT_SECRET_KEY);
    res.status(201).json(token);
  }
  });

  app.post("/api/checkToken", (req: Request, res: Response) => {
    const token = req.body.token;
    if (token) {
      jwt.verify(token, env.JWT_SECRET_KEY, (err: Error, user: string) => {
        if (err) {
          res.sendStatus(403);
        } else {
          res.status(200).json(user);
        }
      });
    } else {
      res.sendStatus(401);
    }
  });

      app.post("/api/submitorder", async (req: Request, res: Response) => {
        try {   
          const formData = req.body.formValues;
          console.log(formData);
      res.status(200).json({ message: "Form submission successful" });
    } catch (error) {
      console.error("Error during form submission:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

      app.post("/api/contactform", async (req, res) => {
        const {name, email, message} = req.body;
        if(!name) {
          return res.status(400).send("name required");
        }
        if(!email) {
          return res.status(400).send('email required');
        }
      
        if(!message) {
          return res.status(400).send('message required');
        }
        else {
          res.status(200).send("Email sent");
        }
      
       });


       app.get("/api/orders", async (req, res) => {
        try {
          const orders = await stripe.issuing.transactions.list();
          res.json(orders.data);
          console.log(req.body);
        } catch (error) {
          console.error("Error retriveing orders:", error);
          res.status(500).json({ error: 'Server error' });
        }
      });
         

       
    
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

module.exports = app;

