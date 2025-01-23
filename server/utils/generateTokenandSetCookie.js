import jwt from "jsonwebtoken";

export const generateTokenandSetCookie = (userId, res) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });

    res.cookie('access_token', token, {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: process.env.NODE_ENV === 'production' ? 'Strict' : 'Lax', // Adjust for development
        path: '/', // Make it available across all routes
    });
};
