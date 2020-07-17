const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Branching
router.post('/answer-to-routes', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    const over18 = req.session.data['over-18']

    if (over18 === 'false') {
      res.redirect('https://google.com')
    } else {
      res.redirect('https://bing.com')
    }
  })

// router.post('/branching/establishment-type-answer', function(req, res) {
//     const estType = req.session.data['establishment-conditional']
// })

router.post('/branching/application-type-answer', function(req, res) {
  const aprType = req.session.data['type-of-approval']


  switch(aprType) {
    case 'new-approval':
      res.redirect('/business-name')
      break
    case 'change-of-fbo':
        res.redirect('/change-of-fbo')
        break
    case 'new-fsa-approval':
      res.redirect('/new-fsa-approval')
      break
    
  }
})

router.post('/branching/business-type-answer', function(req, res) {
  const aprType = req.session.data['business-structure-type']


  switch(aprType) {
    case 'incorporation':
      res.redirect('/business-company-information')
      break
    case 'partnership':
        res.redirect('/business-structure-operator-name')
        break
    case 'sole-trader':
      res.redirect('/business-structure-operator-name')
      break
    case 'other':
      res.redirect('/business-structure-operator-name')
      break
    
  }
})



module.exports = router

