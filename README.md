# React Portfolio Website

A modern, responsive portfolio website built with React.js showcasing professional experience, skills, projects, and contact information.

**Live Site:** [https://kusalthiwanka.com](https://kusalthiwanka.com)

## Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **3D Animations** - Interactive 3D models using Three.js and React Three Fiber
- **Contact Form** - Integrated EmailJS for direct email communication
- **Skills Showcase** - Visual presentation of technical skills
- **Portfolio Section** - Display of projects and work samples
- **Testimonials** - Client and colleague feedback section
- **Experience Timeline** - Professional experience displayed chronologically
- **Toast Notifications** - User feedback for form submissions
- **SEO Optimized** - Meta tags and descriptions for better search visibility

## Technologies Used

### Core
- **React** 18.0.0 - JavaScript library for building user interfaces
- **React DOM** 18.0.0 - React package for DOM rendering

### UI & Animations
- **Three.js** 0.140.0 - 3D graphics library
- **@react-three/fiber** 8.0.12 - React renderer for Three.js
- **@react-three/drei** 9.6.0 - Helpers and abstractions for React Three Fiber
- **Swiper** 8.1.4 - Modern touch slider
- **React Vertical Timeline** 3.6.0 - Vertical timeline component

### Form & Notifications
- **EmailJS** 3.2.0 - Email service integration
- **React Toastify** 9.0.8 - Toast notifications
- **React Notifications** 1.7.4 - Notification system

### Progress Indicators
- **@ramonak/react-progress-bar** 5.0.3 - Progress bar component
- **Progressbar.js** 1.1.0 - Animated progress bars
- **React Progressbar.js** 0.2.0 - React wrapper for Progressbar.js

### Icons & Assets
- **React Icons** 4.3.1 - Popular icon library

### Build Tools
- **React Scripts** 5.0.1 - Create React App build scripts

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-portfolio.git
cd react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following:
```env
PUBLIC_URL=https://yourdomain.com
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important:** Never commit your `.env` file to version control. It's already included in `.gitignore`.

### Getting EmailJS Credentials

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key to the `.env` file

## Usage

### Development Mode

Run the app in development mode:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### Production Build

Build the app for production:
```bash
npm run build
```
Creates an optimized production build in the `build` folder. The build is minified and filenames include hashes.

### Run Tests

Launch the test runner:
```bash
npm test
```

## Project Structure

```
react-portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── portfolio/          # Project images
│   │   └── skills_logo/        # Skill icons
│   ├── components/
│   │   ├── about/              # About section
│   │   ├── contact/            # Contact form with EmailJS
│   │   ├── experience/         # Experience timeline
│   │   ├── footer/             # Footer component
│   │   ├── header/             # Header with 3D model
│   │   ├── menubar/            # Navigation menu
│   │   ├── portfolio/          # Projects showcase
│   │   ├── progress/           # Progress indicators
│   │   ├── skills/             # Skills display
│   │   └── testimonials/       # Testimonials section
│   ├── App.js                  # Main app component
│   ├── App.css                 # Global styles
│   └── index.js                # Entry point
├── .env                        # Environment variables (not in repo)
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## Customization

### Update Personal Information

1. **Contact Details**: Edit [src/components/contact/Contact.jsx](src/components/contact/Contact.jsx)
2. **Skills**: Edit [src/components/skills/Skills.jsx](src/components/skills/Skills.jsx)
3. **Portfolio Projects**: Edit [src/components/portfolio/Portfolio.jsx](src/components/portfolio/Portfolio.jsx)
4. **Experience**: Edit [src/components/experience/Experience.jsx](src/components/experience/Experience.jsx)
5. **About Section**: Edit [src/components/about/About.jsx](src/components/about/About.jsx)

### Update Meta Tags

Edit [public/index.html](public/index.html) to update SEO meta tags:
- Title
- Description
- Keywords

### Change Domain

Update the `homepage` field in [package.json](package.json) and `PUBLIC_URL` in [.env](/.env).

## Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://www.netlify.com/)
3. Configure environment variables in Netlify dashboard

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages

1. Update `homepage` in [package.json](package.json)
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PUBLIC_URL` | Your website domain | Yes |
| `REACT_APP_EMAILJS_SERVICE_ID` | EmailJS service ID | Yes |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | EmailJS template ID | Yes |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | EmailJS public key | Yes |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance

- **Gzip Size**: ~350 KB (JS) + ~9 KB (CSS)
- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Lazy Loading**: Images and components loaded on demand

## Troubleshooting

### Port 3000 already in use
```bash
# Kill the process using port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill
```

### EmailJS not sending emails
- Verify environment variables are correctly set
- Check EmailJS dashboard for service status
- Ensure template ID matches your EmailJS template

### Build warnings about outdated packages
```bash
npm audit fix
npx browserslist@latest --update-db
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Kusal Thiwanka** - Software Engineer

- Email: mhkusalthiwanka@gmail.com
- Website: [kusalthiwanka.com](https://kusalthiwanka.com)
- WhatsApp: +1 647 677 2260

## Acknowledgments

- [Create React App](https://create-react-app.dev/) - React boilerplate
- [Three.js](https://threejs.org/) - 3D graphics library
- [EmailJS](https://www.emailjs.com/) - Email service
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Swiper](https://swiperjs.com/) - Touch slider

---

Made with ❤️ by Kusal Thiwanka
