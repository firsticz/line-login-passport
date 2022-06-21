const passport = require('passport')

const LineStrategy = require('passport-line-auth').Strategy

passport.serializeUser((user, done) => {
    // set jwt token
    console.log('serialize', user)
    done(null, user.id)
})
  
passport.deserializeUser((id, done) => {
    console.log('deserialize', id)
    // User.findById(id)
    //     .then(user => done(null, user))
    //     .catch(err => done(err))
})

passport.use(new LineStrategy({
    channelID: '1656812534',
    channelSecret: '60092004316ade89eb5af1a2e64b4a81',
    callbackURL: "http://localhost:5000/test-line-login-6c03d/us-central1/api/auth/line/callback",
    botPrompt: 'aggressive',
  },
  function(accessToken, refreshToken, profile, done) {
      console.log(profile.id);
    // User.findOrCreate({ id: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
));

module.exports = passport