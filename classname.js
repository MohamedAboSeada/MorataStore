function extractClassNames(jsxCode) {
	// Regular expression to match className="..."
	const classNames = jsxCode.match(/className=["']([^"']+)["']/g);

	// Use a Set to keep class names unique
	const uniqueClassNames = new Set();

	if (classNames) {
		classNames.forEach((className) => {
			// Extract the actual class names from the matches
			const classes = className.match(/["']([^"']+)["']/)[1];
			// Split by space and add each class name to the Set
			classes.split(' ').forEach((cls) => uniqueClassNames.add(cls));
		});
	}

	// Prepare the output in the desired format
	const formattedClassNames = Array.from(uniqueClassNames)
		.map((cls) => `.${cls}{}`)
		.join('\n');

	return formattedClassNames;
}

// Example JSX code
const jsxCode = `<footer className="footer">
  {/* Section One: Social Media & Newsletter */}
  <section className="footer__section footer__section--social-newsletter">
    <div className="container">
      {/* Social Media Links */}
      <div className="footer__social">
        <h3 className="footer__title">Follow Us</h3>
        <p className="footer__text">
          We make consolidating, marketing, and tracking your social media website easy.
        </p>
        <ul className="footer__social-links">
          <li>
            <a className="footer__social-link footer__social-link--twitter" href="#">
              <Twitter />
            </a>
          </li>
          <li>
            <a className="footer__social-link footer__social-link--facebook" href="#">
              <Facebook />
            </a>
          </li>
          <li>
            <a className="footer__social-link footer__social-link--linkedin" href="#">
              <Linkedin />
            </a>
          </li>
          <li>
            <a className="footer__social-link footer__social-link--github" href="#">
              <GitHub />
            </a>
          </li>
        </ul>
      </div>

      {/* Newsletter Signup */}
      <div className="footer__newsletter">
        <h3 className="footer__title">Sign Up To Newsletter</h3>
        <p className="footer__text">
          Join 60,000+ subscribers and get a new discount coupon every Saturday.
        </p>
        <div className="footer__input-group">
          <input type="text" placeholder="Your address here" className="footer__input" />
          <button className="footer__button">Subscribe</button>
        </div>
      </div>

      {/* App Download */}
      <div className="footer__app">
        <h3 className="footer__title">Download App</h3>
        <p className="footer__text">
          Morata App is now available on App Store & Google Play. Get it now.
        </p>
        <img src="./images/footer/app_download.png" alt="apps" className="footer__app-image" />
      </div>
    </div>
  </section>

  {/* Section Two: Links & Contact */}
  <section className="footer__section footer__section--links-contact">
    <div className="container">
      {/* About the Store */}
      <div className="footer__about">
        <h3 className="footer__title">About The Store</h3>
        <p className="footer__text">
          Our mission is to provide the best customer experience in the Electronic industry.
        </p>
        <div className="footer__call">
          <Headphones />
          <p className="footer__text">Got a Question? Call us 24/7</p>
          <a href="tel:+201033536598" className="footer__number">212 654 3322</a>
        </div>
        <p className="footer__email">madoaxel287@gmail.com</p>
      </div>

      {/* My Account Links */}
      <div className="footer__account">
        <h3 className="footer__title">My Account</h3>
        <ul className="footer__links">
          <li><a href="#">Product Support</a></li>
          <li><a href="#">Checkout</a></li>
          <li><a href="#">Shopping Cart</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="#">Custom Link</a></li>
          <li><a href="#">Redeem Voucher</a></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="footer__quick-links">
        <h3 className="footer__title">Quick Links</h3>
        <ul className="footer__links">
          <li><a href="#">Store Location</a></li>
          <li><a href="#">My Account</a></li>
          <li><a href="#">Order Tracking</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>

      {/* Customer Service */}
      <div className="footer__customer-service">
        <h3 className="footer__title">Customer Service</h3>
        <ul className="footer__links">
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Report Abuse</a></li>
          <li><a href="#">Submit a Dispute</a></li>
          <li><a href="#">Policies & Rules</a></li>
          <li><a href="#">Online Returns Policy</a></li>
        </ul>
      </div>

      {/* Help & Customer Care */}
      <div className="footer__help">
        <h3 className="footer__title">Help & Customer Care</h3>
        <ul className="footer__links">
          <li><a href="#">New Customers</a></li>
          <li><a href="#">How to Use My Account</a></li>
          <li><a href="#">Placing Orders</a></li>
          <li><a href="#">Payment Methods</a></li>
          <li><a href="#">Delivery & Dispatch</a></li>
          <li><a href="#">Problems with Your Order</a></li>
        </ul>
      </div>
    </div>
  </section>

  {/* Section Three: Site Menu & Payments */}
  <section className="footer__section footer__section--menu-payments">
    <div className="container">
      {/* Site Menu */}
      <ul className="footer__site-menu">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Customer Service</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Site Map</a></li>
        <li><a href="#">Advanced Search</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      {/* Payment Methods */}
      <ul className="footer__payments">
        <li><a href="#"><img src="./images/footer/amazon.svg" alt="Amazon" /></a></li>
        <li><a href="#"><img src="./images/footer/apple.svg" alt="Apple" /></a></li>
        <li><a href="#"><img src="./images/footer/pay.svg" alt="Pay" /></a></li>
        <li><a href="#"><img src="./images/footer/visa.svg" alt="Visa" /></a></li>
        <li><a href="#"><img src="./images/footer/paypal.svg" alt="PayPal" /></a></li>
        <li><a href="#"><img src="./images/footer/mastercard.svg" alt="MasterCard" /></a></li>
      </ul>

      {/* Copyright Information */}
      <p className="footer__rights">
        Copyright © <a href="#">MohamedAboSeada</a>. All Rights Reserved.
      </p>
    </div>
  </section>
</footer>
`;

// Extract class names and copy to clipboard
console.log(extractClassNames(jsxCode));
