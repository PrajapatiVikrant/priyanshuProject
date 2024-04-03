const allpage = {
    home: (req, res) => {
        res.sendFile('D:/Programming/project-start/public/Home.html')
    },
    mypost: (req, res) => {
        res.sendFile('D:/Programming/project-start/public/MyPost.html')
    }
}
module.exports = allpage;