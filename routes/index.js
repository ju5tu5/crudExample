import express from 'express'

export default express
  .Router()

  .get('/', (req, res) => {
    res.render('home', { veld1: '', veld2: '' })
  })

  .post('/', (req, res) => {
    res.render('home', {
      veld1: req.body.veld1,
      veld2: req.body.veld2,
    })
  })

  .post('/put', (req, res) => {
    console.log('you want to put something...')
    // res.render... req.body..
  })

  .post('/delete', (req, res) => {
    console.log('you want to delete something...')
    // res.render... req.body..
  })
