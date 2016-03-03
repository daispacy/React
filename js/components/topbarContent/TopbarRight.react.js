/*<div class="topbar-right clearfix">

  <ul class="clearfix">
    <li class="checkout-icon"><a href="checkout.html">Checkout</a></li>
    <li class="myaccount-icon"><a href="my-account.html">My Account</a></li>
  </ul>

  <div class="cart-top">
    <p><a href="cart.html">9 Items</a></p>
  </div>

<!-- END .topbar-right -->
</div>*/

var React = require('react');

var ClearFix = React.createClass({
  render: function(){
    <ul class="clearfix">
      <li class="checkout-icon"><a href="checkout.html">Checkout</a></li>
      <li class="myaccount-icon"><a href="my-account.html">My Account</a></li>
    </ul>
  }
});

var CartTop = React.createClass({
  render: function(){
    <div class="cart-top">
      <p><a href="cart.html">9 Items</a></p>
    </div>
  }
});

//combine to 
var TopbarRight = React.createClass({
  render: function() {
    return (
      <div class="topbar-right clearfix">
        <ClearFix />
        <CartTop />

      </div>
    );
  }

});

module.exports = TopbarRight;
