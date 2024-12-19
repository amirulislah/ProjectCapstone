const pool = require('../config/db')

module.exports = {
    create: async (req, res) => {
        const { title, content, description, category, keywords, image, author } = req.body
        try{
            const response = await pool.query('INSERT INTO article (title, content, description, category, keywords, image, author) VALUES (?, ?, ?, ?, ?, ?, ?)', [title, content, description, category, keywords, image, author]);
            res.status(201).json({ message: 'Article created successfully', id: response.insertId });
        } catch (err){
            res.status(500).json({message: err})
        }
    },
    get: async (req, res) => {
        try {
            const [results] = await pool.query(
              'SELECT * FROM article'
            );
            res.status(201).json({ message: 'success', data: results });
          } catch (err) {
            res.status(500).json({message: err})
          }
    },
}