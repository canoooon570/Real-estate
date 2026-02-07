import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  // If there is no token, they aren't logged in
  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is not Valid!" });
    
    // Save the user ID from the token into the request (req) 
    // so the next function (the controller) knows who is making the request
    req.userId = payload.id;

    next(); // Everything is good, move to the controller
  });
};