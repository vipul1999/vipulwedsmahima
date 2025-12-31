# Rajasthani Wedding Card

A beautiful digital wedding invitation with traditional Rajasthani design elements.

## Features

- 🎨 Authentic Rajasthani design with traditional colors
- 📱 Fully responsive design
- 🖨️ Print-ready layout
- ✨ Elegant animations and floating elements
- 🌐 Multi-language support (Hindi/Devanagari)

## Deployment on Render

### Step 1: Prepare Your Repository
1. Create a new repository on GitHub
2. Upload all files from the `wedding-cards` folder:
   - `wedding-card.html`
   - `package.json`
   - `server.js`
   - `README.md`

### Step 2: Deploy on Render
1. Go to [render.com](https://render.com)
2. Sign up/Login with your GitHub account
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure the deployment:
   - **Name**: `rajasthani-wedding-card`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

### Step 3: Environment Variables (Optional)
- `PORT`: Will be automatically set by Render

### Step 4: Deploy
- Click "Create Web Service"
- Wait for deployment to complete
- Your wedding card will be live at: `https://your-app-name.onrender.com`

## Local Development

```bash
# Install dependencies
npm install

# Start the server
npm start

# Visit http://localhost:3000
```

## File Structure

```
wedding-cards/
├── wedding-card.html    # Main wedding invitation
├── package.json         # Node.js dependencies
├── server.js           # Express server
└── README.md           # This file
```

## Customization

To customize the wedding card:
1. Edit `wedding-card.html`
2. Modify the Hindi text content
3. Adjust colors in the CSS section
4. Add/remove family member details

## Technologies Used

- HTML5
- CSS3 (with animations)
- Node.js
- Express.js
- Google Fonts (Noto Sans Devanagari, Cinzel, Kalam)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

---

Made with ❤️ for celebrating beautiful Indian weddings
# vipulwedsmahima
