# Magda Rajszewski - Personal Website

A professional, visually appealing personal website showcasing education, achievements, leadership, extracurriculars, volunteer work, skills, and interests.

## 🎨 Design Features

- **Color Scheme**: Clean white background with light turquoise (#E0F7F6) accents
- **Typography**: Playfair Display for headings, Inter for body text
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Animations**: Smooth scrolling, fade-in effects, hover animations
- **Interactive Elements**: Dynamic navigation, scroll-to-top button, contact form

## 📂 Project Structure

```
MAGDA-PERSONAL/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling with responsive design
├── script.js           # Interactive features and animations
├── images/             # Folder for photos and media
│   └── profile.jpg     # Professional profile photo (to be added)
├── resume.pdf          # Downloadable resume (to be added)
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Local Development (Simple)

1. **Open the website**:
   - Simply double-click `index.html` to open in your browser
   - Or right-click and select "Open with" → your preferred browser

### Option 2: Local Development (With Server)

For better development experience with live reload:

```bash
# Using Python (if installed)
python -m http.server 8000

# Or using Node.js with http-server (if installed)
npx http-server -p 8000
```

Then open: `http://localhost:8000`

### Option 3: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📝 Customization Guide

### 1. Adding Your Profile Photo

1. Add your professional photo to the `images/` folder
2. Name it `profile.jpg` (or update the path in `index.html`)
3. Recommended size: 800x800px, square format
4. Format: JPG or PNG

**To update the photo reference in HTML:**
```html
<img src="images/your-photo-name.jpg" alt="Magda Rajszewski" class="profile-photo">
```

### 2. Adding Your Resume PDF

1. Export your resume as PDF
2. Save it as `resume.pdf` in the root folder
3. The download button will automatically work

### 3. Updating Content

All content is in `index.html`. To update:

- **Contact Information**: Search for the `<section id="contact">` tag
- **Email**: Update `magdaraj987@gmail.com` throughout the file
- **Phone**: Update `832-986-2175`
- **LinkedIn**: Update the LinkedIn URL

### 4. Customizing Colors

In `styles.css`, modify the color variables:

```css
:root {
    --primary-white: #FFFFFF;
    --light-turquoise: #E0F7F6;  /* Change this for different accent */
    --turquoise: #A7E8E6;
    --dark-turquoise: #6DD5D1;
    --text-dark: #2C3E50;
}
```

### 5. Adding More Photos

To add a photo gallery section:

1. Create photos in the `images/` folder
2. Add HTML section in `index.html`:

```html
<section id="gallery" class="section">
    <div class="container">
        <h2 class="section-title">Photo Gallery</h2>
        <div class="gallery-grid">
            <img src="images/photo1.jpg" alt="Description">
            <img src="images/photo2.jpg" alt="Description">
            <!-- Add more images -->
        </div>
    </div>
</section>
```

3. Add CSS styling in `styles.css`:

```css
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}

.gallery-grid img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 15px;
    transition: transform 0.3s ease;
}

.gallery-grid img:hover {
    transform: scale(1.05);
}
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. Create a GitHub repository named `MAGDA-PERSONAL`
2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/MAGDA-PERSONAL.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select "main" branch and "/" (root) folder
5. Click Save
6. Your site will be live at: `https://YOUR-USERNAME.github.io/MAGDA-PERSONAL/`

### Option 2: Netlify (Free & Simple)

1. Sign up at [netlify.com](https://www.netlify.com)
2. Drag and drop your entire project folder
3. Get instant deployment with custom domain support

### Option 3: Vercel (Free & Fast)

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

## 📱 Sections Included

1. **Home/Hero** - Introduction with professional photo
2. **About Me** - Detailed bio with key statistics
3. **Education** - Academic achievements, GPA, test scores
4. **Work Experience** - Jobs and internships
5. **Leadership** - Major leadership roles and nonprofit involvement
6. **Extracurricular Activities** - Student organizations
7. **Volunteer Work** - Summer experiences and service
8. **Awards & Honors** - Recognition and achievements
9. **Skills & Interests** - Languages, technical skills, hobbies
10. **Contact** - Contact information and form

## ✨ Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Animated sections on scroll
- ✅ Interactive cards with hover effects
- ✅ Contact form (mailto integration)
- ✅ Scroll-to-top button
- ✅ Modern gradient backgrounds
- ✅ Professional typography
- ✅ SEO-friendly structure
- ✅ Fast loading performance

## 🔧 Technical Details

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (Vanilla)**: No dependencies required
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Font Awesome 6.4.0
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

## 🎯 Performance Optimization

- Optimized images (recommended)
- Minimal JavaScript
- CSS animations (GPU-accelerated)
- Lazy loading for images
- Efficient CSS selectors

## 📧 Contact Form Setup

The current contact form uses a `mailto:` link. For a production website, consider:

1. **FormSpree** (Easy, free tier available)
   - Sign up at [formspree.io](https://formspree.io)
   - Replace form action with FormSpree endpoint

2. **Netlify Forms** (If hosting on Netlify)
   - Add `netlify` attribute to form tag
   - Automatic form handling

3. **Custom Backend** (Advanced)
   - Use Node.js/Express or serverless functions
   - Integrate with email services (SendGrid, Mailgun)

## 🚨 Important Notes

1. **Profile Photo**: Add your photo to `images/profile.jpg` before deploying
2. **Resume PDF**: Add your resume as `resume.pdf` in the root folder
3. **LinkedIn URL**: Update with your actual LinkedIn profile
4. **Social Media**: Add Instagram or other social links if desired
5. **Privacy**: Remove any sensitive information before making the site public

## 🔄 Updates and Maintenance

To update content:

1. Edit `index.html` for text content
2. Edit `styles.css` for styling changes
3. Add new photos to `images/` folder
4. Test locally before deploying
5. Push changes to GitHub (if using GitHub Pages)

## 📚 Resources

- [Google Fonts](https://fonts.google.com)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Color Palette Tool](https://coolors.co)
- [Image Optimization](https://tinypng.com)
- [Responsive Design Testing](https://responsivedesignchecker.com)

## 🎓 Best Practices for College Applications

When using this website for college applications:

1. ✅ Use a professional profile photo
2. ✅ Keep content concise and impactful
3. ✅ Highlight unique achievements
4. ✅ Maintain consistent tone throughout
5. ✅ Update regularly with new accomplishments
6. ✅ Proofread all content carefully
7. ✅ Test on multiple devices
8. ✅ Use a custom domain (optional but professional)

## 📞 Support

For questions or issues:
- Email: magdaraj987@gmail.com
- Create an issue on GitHub (if repository is public)

## 📄 License

This project is free to use and modify for personal purposes.

---

**Built with ❤️ for Magda Rajszewski**

*Last Updated: December 2025*
