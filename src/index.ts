import { PrismaClient } from "@prisma/client";
import express, { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import bodyParser from 'body-parser';
import axios from "axios";
const stripe = require('stripe')('sk_test_51ODvYwDEtVoGXwUaSYKqzFhtt9WYjxTh3D3kJtxMGkWvZGeEni0VDmgAXkiG28VRCcMlqEnCRwB9CqcgbDE2bURW00JW1Wkp5g');
const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = 3000;

const prisma = new PrismaClient();
const app = express();
const STRIPE_SECRET_KEY = 'sk_test_51ODvYwDEtVoGXwUaSYKqzFhtt9WYjxTh3D3kJtxMGkWvZGeEni0VDmgAXkiG28VRCcMlqEnCRwB9CqcgbDE2bURW00JW1Wkp5g';

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

interface AuthenticatedRequest extends Request {
  user: { username: string; password: string }; 
}

app.post("/charge", async (req, res) => {
  try {
      const { amount, token } = req.body;
      const charge = await stripe.charges.create({
          amount,
          currency: 'usd',
          source: token,
        });
    
        // Handle successful payment (e.g., update database, send confirmation email)
        // Send a success response to the client
        res.status(200).json({ success: true });
      } catch (error) {
        console.error(error.message);
        // Handle errors and send a failure response to the client
        res.status(500).json({ error: 'Payment failed' });
      }
    });

    app.get('/api/orders', async (req, res) => {
      try {
        const response = await axios.get('https://api.stripe.com/v1/orders', {
          headers: {
            Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
    
        const orders = response.data.data;
        res.json({ orders });
      } catch (error) {
        console.error('Error retrieving orders:', error.response.data.error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });


app.post("/signup", async (req, res) => {
    try {
      const username = req.body.username;
      console.log("Username Recieved");
      const hashedPass = await bcrypt.hash(req.body.password, 10);
      console.log("Password created");
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

  app.post("/checkToken", (req, res) => {
    const { token } = req.body;
    if (token === 'valid_token') {
      res.status(200).json({ valid: true, message: 'Token is valid' });
    } else {
      res.status(401).json({ valid: false, message: 'Token is invalid' });
    }
  });


app.post("/contactform", async (req, res) => {
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




  app.post("/login", async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await prisma.admin.findFirst({
      where: { username: username },
    });
    if (!user) {
      return res.status(400).send("Cannot find user");
    }
    if (await bcrypt.compare(user.password, password)) {
      res.status(403).send("Incorrect Password");
    } else {
      const token: string = jwt.sign(user, process.env.JWT_KEY, {
        expiresIn: "1h",
      });
      res.status(201).send();
    }
  });

  function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1] || "";
  
    jwt.verify(
      token,
      process.env.JWT_KEY,
      (err: Error, user: { username: string; password: string }) => {
        if (err) {
          return res.sendStatus(401);
        }
  
        (req as AuthenticatedRequest).user = user as {
          username: string;
          password: string;
        }; 
  
        next();
      }
    );
  }




app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

module.exports = app;