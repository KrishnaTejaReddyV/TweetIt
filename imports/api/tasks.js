import { Mongo } from 'meteor/mongo';
 
export const Tweet = new Mongo.Collection('tweet');
export const Friend = new Mongo.Collection('friend');
export const User = new Mongo.Collection('user');

Meteor.methods({
  'tweet.remove'(id, title) {
    Tweet.remove({uid:id, t_title: title});
  },
  'friend.remove'(uid, fid) {
    Friend.remove({id:uid, u_friend: fid});
  },
});