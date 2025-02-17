module.exports = (req, res) => {
    res.json({
        message: process.env.CUSTOM_MESSAGE || "Hello from Vercel!"
    });
};
