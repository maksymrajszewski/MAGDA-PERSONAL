# 🚀 Quick Start Guide - Magda Rajszewski Personal Website

## ⚡ 3-Minute Setup

### Step 1: Add Your Profile Photo (2 minutes)

1. **Take or choose a professional photo**:
   - Good lighting, clean background
   - Professional attire
   - Smiling, confident expression

2. **Prepare the image**:
   - Crop to square format (1:1 ratio)
   - Resize to 800x800 pixels
   - Save as `profile.jpg`

3. **Add to website**:
   - Place `profile.jpg` in the `images/` folder
   - Done! The website will automatically display it

### Step 2: Add Your Resume (1 minute)

1. **Export your resume**:
   - Open your resume in Word/Google Docs
   - Export as PDF
   - Save as `resume.pdf`

2. **Add to website**:
   - Place `resume.pdf` in the main folder (same level as index.html)
   - The download button will work automatically!

### Step 3: View Your Website

**Option A: Double-click Method** (Easiest)
- Simply double-click `index.html`
- It will open in your default browser

**Option B: Live Server Method** (Best for editing)
1. Open VS Code
2. Install "Live Server" extension
3. Right-click `index.html`
4. Select "Open with Live Server"
5. Website opens with auto-refresh on changes!

---

## 📱 Testing Checklist

Before sharing your website, test these:

- [ ] Profile photo displays correctly
- [ ] Resume downloads when clicking button
- [ ] All sections scroll smoothly
- [ ] Contact information is correct
- [ ] LinkedIn link works
- [ ] Mobile view looks good (resize browser window)
- [ ] All text is spelled correctly

---

## 🌐 How to Deploy (Share Online)

### Easiest Method: GitHub Pages (Free)

1. **Create GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up for free

2. **Upload your website**:
   ```bash
   # In VS Code terminal:
   git init
   git add .
   git commit -m "Initial commit - My personal website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/MAGDA-PERSONAL.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site is live at: `https://YOUR-USERNAME.github.io/MAGDA-PERSONAL/`

### Alternative: Netlify (Even Easier!)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your entire folder
3. Get instant live website!
4. You can add a custom domain later

---

## ✏️ Common Edits

### Update Contact Information

**File**: `index.html`

**Search for** and replace:
```html
magdaraj987@gmail.com  →  your-email@example.com
832-986-2175           →  your-phone-number
```

### Change Colors

**File**: `styles.css` (top of file)

```css
--light-turquoise: #E0F7F6;  /* Change this hex code */
--dark-turquoise: #6DD5D1;   /* Change this hex code */
```

Try these color schemes:
- **Purple**: `#F3E5F5` and `#AB47BC`
- **Blue**: `#E3F2FD` and `#42A5F5`
- **Green**: `#E8F5E9` and `#66BB6A`
- **Pink**: `#FCE4EC` and `#EC407A`

### Add Social Media Links

**File**: `index.html`

Find the contact section and add:

```html
<div class="social-links">
    <a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank" class="social-icon">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://instagram.com/YOUR-PROFILE" target="_blank" class="social-icon">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://github.com/YOUR-USERNAME" target="_blank" class="social-icon">
        <i class="fab fa-github"></i>
    </a>
</div>
```

---

## 🆘 Troubleshooting

### Profile photo not showing?

✅ Check:
1. Photo is in `images/` folder
2. Photo is named `profile.jpg`
3. Or update the path in `index.html`: `<img src="images/YOUR-NAME.jpg">`

### Resume won't download?

✅ Check:
1. PDF is in the main folder (not in a subfolder)
2. PDF is named `resume.pdf`
3. Or update link in `index.html`: `<a href="your-resume-name.pdf">`

### Website looks broken on phone?

✅ This is responsive! Try:
1. Clear browser cache
2. Hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. Test in different browser

### Colors look wrong?

✅ Browser might be caching old styles:
1. Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. This forces a fresh reload

---

## 💡 Pro Tips

### For College Applications

1. **Custom Domain** (optional but impressive):
   - Buy domain: `www.magdarajszewski.com` (~$12/year)
   - Connect to GitHub Pages or Netlify
   - More professional for college apps!

2. **QR Code** for easy sharing:
   - Go to [qr-code-generator.com](https://www.qr-code-generator.com/)
   - Enter your website URL
   - Download QR code
   - Add to resume or business cards!

3. **Analytics** to track visitors:
   - Add Google Analytics (free)
   - See how many people visit
   - Know which sections are most viewed

### Performance Tips

1. **Optimize images** before adding:
   - Use [TinyPNG.com](https://tinypng.com)
   - Reduces file size by 70%
   - Website loads faster!

2. **Regular updates**:
   - Add new achievements monthly
   - Keep content fresh
   - Shows active engagement

3. **Backup your work**:
   - Save to GitHub (version control)
   - Keep local copies
   - Never lose your work!

---

## 📞 Need Help?

- **Questions**: Email magdaraj987@gmail.com
- **Bug found**: Create an issue on GitHub
- **Want to customize more**: Check main README.md for detailed instructions

---

## ✅ Next Steps

After setup, consider:

1. [ ] Share website link on LinkedIn
2. [ ] Add QR code to resume
3. [ ] Include link in college applications
4. [ ] Update regularly with achievements
5. [ ] Get feedback from teachers/counselors
6. [ ] Test on multiple devices
7. [ ] Consider custom domain

---

**You're all set! Your professional website is ready to impress colleges, employers, and collaborators.** 🎉

Good luck with your applications!

*Remember: Keep it updated, keep it professional, and let your achievements shine!*
