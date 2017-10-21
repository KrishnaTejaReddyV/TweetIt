import { Template } from 'meteor/templating';

import './body.html';
import './login.js';
import './home.js';


Session.setDefault('login', 'loggedout');
Session.setDefault('id', '');
Session.setDefault('error', '');
Session.setDefault('lerror', '');