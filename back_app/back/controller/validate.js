const jwt =  require('jsonwebtoken');

const validate = async (req, res, next) => {
    const token =  await req.headers['x-access-token'];
    if (!token) {
        res.status(401).send('Token not found');
    }
    else{
    try {
        const decoded = jwt.verify(token, 'secretkey');
        if(decoded){
        next();
    }
    } catch (error) {
        res.status(401).send('Invalid Token');
    }
    }  
}

module.exports = validate;
