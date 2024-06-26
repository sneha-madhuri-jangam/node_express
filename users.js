import express from "express";

const router=express.Router();

const users=[
    {
    firstname:"sneha",
    Lastname:"Jangam",
    city: "Newyork",
},
{
    firstname:"mani",
    Lastname:"Jangam",
    city: "Newyork",
},
];

router.post("/",(req,res)=>{
    const user=req.body;
    users.push(user);
res.send(`User with name ${user.firstname} added !`);
});

router.get("/",(req,res)=>{
    res.send(users);
});

export default router;