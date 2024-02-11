const passport = require("passport")
const User = require("../models/user")

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        let user = await User.findOne({ googleId: profile.id })
        if (user) return cb(null, user)
        user = await User.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
        })
        return cb(null, user)
      } catch (err) {
        return cb(err)
      }
    }
  )
)

passport.serializeUser(function (user, cb) {
  try {
    if (!user._id) {
      throw new Error("User object is missing _id property")
    }
    cb(null, user._id)
  } catch (err) {
    cb(err)
  }
})

passport.deserializeUser(async function (id, cb) {
  try {
    const user = await User.findById(id)
    cb(null, user)
  } catch (err) {
    cb(err)
  }
})