import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import models from './models';

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: '/auth/facebook/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id } = profile;

      const user = await models.User.findOne({ where: { token: id } });
      if (user) return done(null, user);

      return done(null, null, { message: 'Not found user' });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
