const { Router } = require('express')
const passport = require('./passport')

const router = new Router()


router.get('/line', (req, res, next) => { console.log('l=>'); next();},
  (req, res, next) => {
    // console.log('in L=>', req.query.redirectTo, req.get('Referrer'))
    req.session.redirectTo = req.query.redirectTo || req.get('Referrer')
    next()
  },
  passport.authenticate('line')
)

router.get('/line/callback', (req, res, next) => { console.log('lc=>'); next();}, passport.authenticate('line'), (err, req, res, next) => { req.error = err; next()},async (req, res) => {
	console.log('req.session', req.session)
	console.log('req.user', req.user)
	if(req.error) {
		console.error(`Passport error: ${req.error.message}`)
	}
})

module.exports = router