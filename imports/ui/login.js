import { Template } from 'meteor/templating';

import './login.html';

import { User } from '../api/tasks.js';

Template.login.helpers({
  loggedout() {
	return Session.get("login") == 'loggedout';
  }, 
  error() {
	return Session.get("error");
  },
  lerror() {
	return Session.get("lerror");
  },
});

Template.login.events({
  'submit .reg'(event){
  
  event.preventDefault();
  
  const target = event.target;
  const uname = target.uname.value;
  const pass = target.pass.value;
  var error="";

  var exist = User.find({id : uname}).count();
  if(exist!=0)
  {
  error= "Username Already Exists. Try another Name!!";
  Session.set('error', error);
  }
  else{
	Session.set('error', '');
	User.insert({
      id: uname,
	  password: pass, 
    });

	target.uname.value = '';
	target.pass.value = '';
	}
  },
  
  'submit .login'(event) {
  
  event.preventDefault();
  
  const target = event.target;
  const uid = target.id.value;
  const pwd = target.pwd.value;
 
  var exist = User.find({id : uid, password : pwd}).count();
  if(exist==1)
  {
	Session.set('lerror', '');
	Session.set('id', uid);
	Session.set('login', 'loggedin');
	target.id.value = '';
	target.pwd.value = '';
	}
	else{
	var lerror = "Invalid Login. Try Again."
	Session.set('lerror', lerror);
	}
  },
});
