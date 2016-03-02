// <ul class="social-icons">
//   <li><a href="#"><span id="twitter_icon"></span></a></li>
//   <li><a href="#"><span id="facebook_icon"></span></a></li>
//   <li><a href="#"><span id="googleplus_icon"></span></a></li>
//   <li><a href="#"><span id="skype_icon"></span></a></li>
//   <li><a href="#"><span id="flickr_icon"></span></a></li>
//   <li><a href="#"><span id="linkedin_icon"></span></a></li>
//   <li><a href="#"><span id="vimeo_icon"></span></a></li>
//   <li><a href="#"><span id="youtube_icon"></span></a></li>
//   <li><a href="#"><span id="rss_icon"></span></a></li>
// <!-- END .social-icons -->
// </ul>

var React = require('react');

var SocialIcon = React.createClass({

  render: function() {
    return (
      <div className="social-icons">
        <li><a href="#"><span id="twitter_icon"></span></a></li>
        <li><a href="#"><span id="facebook_icon"></span></a></li>
        <li><a href="#"><span id="googleplus_icon"></span></a></li>
        <li><a href="#"><span id="skype_icon"></span></a></li>
        <li><a href="#"><span id="flickr_icon"></span></a></li>
        <li><a href="#"><span id="linkedin_icon"></span></a></li>
        <li><a href="#"><span id="vimeo_icon"></span></a></li>
        <li><a href="#"><span id="youtube_icon"></span></a></li>
        <li><a href="#"><span id="rss_icon"></span></a></li>
      </div>
    );
  }

});

module.exports = SocialIcon;
