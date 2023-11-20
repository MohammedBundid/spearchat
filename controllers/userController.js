const index = (req, res) => {
    // res.send('hello world')
    res.render('pages/index.ejs', {name: 'john'})
}

module.exports = {
    index
}