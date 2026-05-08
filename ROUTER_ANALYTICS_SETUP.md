# Router & Analytics Setup Guide

## 📍 What's Been Set Up

### 1. **React Router - Complete Route Setup**
All pages in your application are now properly routed with React Router DOM.

#### Available Routes:
```
/ or /home          → Home Page
/mens               → Mens Collection
/womens             → Womens Collection  
/kids               → Kids Collection
/festive-wear       → Festive Wear
/product/:id        → Product Details (dynamic)
/cart               → Shopping Cart
/wishlist           → Wishlist
/order              → Order & Track Order
/order/track        → Track Order
/other              → Other Page
/other/about        → About Us
/other/contact      → Contact Us
/other/tailoring    → Tailoring Services
```

### 2. **Navigation Links**
All navigation links are connected:
- **Desktop Navigation**: Wishlist & Cart icons in top bar
- **Mobile Navigation**: Wishlist & Cart in mobile menu
- **All category links** properly route to their pages

### 3. **Analytics System**
Google Analytics is integrated and ready to track:

#### Automatically Tracked:
- **Page Views**: Every route change is logged

#### Available Tracking Functions:
```javascript
import { 
  trackPageView,
  trackProductView,
  trackAddToCart,
  trackAddToWishlist,
  trackPurchase,
  trackSearch,
  trackCategoryView,
  trackClick,
  trackEvent
} from './utils/analytics';

// Examples:
trackProductView('shirt-001', 'Classic Shirt', 'Mens', 899);
trackAddToCart('shirt-001', 'Classic Shirt', 1, 899);
trackAddToWishlist('shirt-001', 'Classic Shirt');
trackPurchase('ORDER-123', 2500, 'INR', [...items]);
trackSearch('blue shirt');
trackCategoryView('Mens');
trackClick('buy-now-button', 'button');
```

## 🔧 Configuration

### Google Analytics Setup:
1. **Get Your Analytics ID**:
   - Go to [Google Analytics](https://analytics.google.com)
   - Create a property for your website
   - Get your measurement ID (looks like: `G-XXXXXXXXXX`)

2. **Update Analytics ID**:
   - Open: `src/utils/analytics.js`
   - Find line: `export const GOOGLE_ANALYTICS_ID = 'G-XXXXXXXXXX'`
   - Replace `G-XXXXXXXXXX` with your actual ID

### After Configuration:
- Analytics will automatically track page views
- Custom events will be logged when you use the tracking functions
- All data will appear in your Google Analytics dashboard within 24 hours

## 📁 New Files Created

```
src/
├── config/
│   └── routes.jsx          # Route configuration
├── utils/
│   └── analytics.js        # Analytics functions
└── hooks/
    └── usePageTracking.js  # Custom hook for page tracking
```

## 🚀 How to Use Tracking in Components

### Example 1: Track Product View
```javascript
import { trackProductView } from '../utils/analytics';

export function ProductCard({ product }) {
  const handleViewDetails = () => {
    trackProductView(product.id, product.name, product.category, product.price);
    navigate(`/product/${product.id}`);
  };

  return (
    <button onClick={handleViewDetails}>View Details</button>
  );
}
```

### Example 2: Track Add to Cart
```javascript
import { trackAddToCart } from '../utils/analytics';

export function ProductDetails() {
  const handleAddToCart = (product) => {
    trackAddToCart(product.id, product.name, 1, product.price);
    // Add to cart logic...
  };

  return (
    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
  );
}
```

### Example 3: Track Search
```javascript
import { trackSearch } from '../utils/analytics';

export function SearchBar() {
  const handleSearch = (query) => {
    trackSearch(query);
    // Search logic...
  };

  return (
    <input onChange={(e) => handleSearch(e.target.value)} />
  );
}
```

## ✅ Testing

### Test Router:
1. Click on navigation links
2. Verify each page loads correctly
3. Check URL changes match route paths

### Test Analytics:
1. Open Developer Tools (F12)
2. Go to Console tab
3. Perform actions on your site
4. Check Google Analytics (Real Time view)
5. Data should appear within seconds

## 🔗 Image Path Guidelines

All image imports should use relative paths from the file location:
- From `src/other/cart/Cart.jsx`: Use `../../assets/Images/...`
- From `src/product-details/Product.jsx`: Use `../assets/Images/...`
- From `src/home/Home.jsx`: Use `../assets/Images/...`

## 📊 Analytics Dashboard

After setup, view your data at:
- [Google Analytics Dashboard](https://analytics.google.com)
- Look for:
  - **Real Time**: Live visitor activity
  - **Acquisition**: How users find you
  - **Behavior**: What users do on your site
  - **Conversions**: Purchases and goals

## ⚡ Next Steps

1. ✅ Replace `G-XXXXXXXXXX` with your Google Analytics ID
2. ✅ Test all router links work correctly
3. ✅ Add tracking to product, cart, and purchase actions
4. ✅ Monitor analytics dashboard daily
5. ✅ Optimize based on user behavior data

## 🆘 Troubleshooting

### Analytics not showing data?
- Check if ID is correct in `src/utils/analytics.js`
- Wait 24 hours for first data to appear
- Check Real Time view in Google Analytics

### Routes not working?
- Ensure BrowserRouter is in `src/main.jsx` ✓
- Check import paths are correct
- Test in browser console: `console.log(window.location.pathname)`

### Images not loading?
- Check relative paths in import statements
- Verify file exists in `src/assets/Images/`
- Use correct case: `Womens/` not `womens/`

## 📱 Mobile Responsive

All routes and analytics work on:
- ✅ Desktop
- ✅ Tablet  
- ✅ Mobile

---

**Setup Complete! Your app is fully routed and ready for analytics tracking.** 🎉
