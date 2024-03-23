const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./user/model');

passport.use(new GoogleStrategy({
    clientID: '822131825740-8vk5kr2kr0140703g4ibqc11f6brja23.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: '/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        user = new User({
          googleId: profile.id,
        //   username: profile.displayName,
          email: profile.emails[0].value
        });
        await user.save();
      }

      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
module.exports = {passport}

function generateToken(user) {
    const secretKey = 'your_secret_key'; // Replace with your secret key
    return jwt.sign({ user }, "i love learning elec and comp Engineering", { expiresIn: '1h' }); 
  }
  

  exports.sendToken = (req, res, next) => {
    
    const token = generateToken(req.user);
    res.json({ token });
  };
