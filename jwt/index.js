import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();


const posts = [
  {username:'John', title:'senior'},
  {username:'Henry', title:'junior'}
]

app.get('/posts', authenticateToken, (req,res)=>{
  res.json(posts.filter(post => post.username === req.user.name))
})

app.post('/login',(req,res)=>{
  // authenticate user
  const username = req.body.username
  const user = {name:username}

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({accessToken:accessToken})

})

function authenticateToken(req, res, next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
