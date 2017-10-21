import { Template } from 'meteor/templating';

import { Tweet } from '../api/tasks.js';
import { Friend } from '../api/tasks.js';

import './ftcard.html';
import './utcard.js';

Template.ftcard.helpers({
  friend_post() {
  var fid = _.uniq(Friend.find({id:Session.get("id")}, {
						sort: {u_friend: 1}, fields: {u_friend: true}
						}).fetch().map(function(x) {
							return x.u_friend;
						}), true);
    return Tweet.find({uid : {$in : fid} });
  },
});