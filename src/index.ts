import { PrismaClient } from "@prisma/client";
import express, { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import bodyParser from 'body-parser';
import { json } from 'body-parser';
import Stripe from 'stripe';
import { env } from "node:process";
const jwt = require("jsonwebtoken");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const port = 3000;

const prisma = new PrismaClient();
const app = express();
const stripe = new Stripe('sk_test_51ODvYwDEtVoGXwUaSYKqzFhtt9WYjxTh3D3kJtxMGkWvZGeEni0VDmgAXkiG28VRCcMlqEnCRwB9CqcgbDE2bURW00JW1Wkp5g', {
  apiVersion: '2023-10-16', // Use the latest API version
});

app.use(express.json());
app.use(json());
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

interface AuthenticatedRequest extends Request {
  user: { username: string; password: string }; 
}


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


app.post("/api/register", async (req, res) => {
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




  app.post("/api/login", async (req: Request, res: Response) => {
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