# Image Setup Instructions

## Where to Add Your Images

Place all your images in the **`public/images/`** directory.

### Current Setup (Dark Theme Images)

Add your **8 dark theme images** to `public/images/`:

1. **7 Android format images** - Name them:
   - `app-dark-1.png`
   - `app-dark-2.png`
   - `app-dark-3.png`
   - `app-dark-4.png`
   - `app-dark-5.png`
   - `app-dark-6.png`
   - `app-dark-7.png`

2. **1 big image with 3 sections** - Name it:
   - `app-hero-dark.png`

### Future Setup (Light Theme Images)

When you're ready to add light theme images, place them in the same `public/images/` directory with these names:

1. **7 Android format images**:
   - `app-light-1.png`
   - `app-light-2.png`
   - `app-light-3.png`
   - `app-light-4.png`
   - `app-light-5.png`
   - `app-light-6.png`
   - `app-light-7.png`

2. **1 big image with 3 sections**:
   - `app-hero-light.png`

## Using Your Own Image Names

If you want to use your own image names instead of the suggested ones:

1. Open `app/app/page.tsx`
2. Update the `darkImages` array (lines 18-26) with your actual image paths
3. Update `darkHeroImage` (line 28) with your hero image path
4. When you add light theme images, update `lightImages` and `lightHeroImage` similarly

Example:
```typescript
const darkImages = [
  "/images/your-image-1.png",
  "/images/your-image-2.png",
  // ... etc
];
```

## How It Works

- The app page automatically detects dark/light mode
- Dark theme images are shown when the website is in dark mode
- Light theme images will be shown when you add them and the site is in light mode
- There's a toggle button on the app page to test both themes
- Images are displayed in a responsive gallery with click-to-zoom functionality

## File Structure

```
public/
└── images/
    ├── app-dark-1.png      ← Your 7 Android images
    ├── app-dark-2.png
    ├── app-dark-3.png
    ├── app-dark-4.png
    ├── app-dark-5.png
    ├── app-dark-6.png
    ├── app-dark-7.png
    ├── app-hero-dark.png    ← Your big 3-section image
    ├── app-light-1.png      ← Future light theme images
    ├── app-light-2.png
    └── ... (etc)
```

## Accessing the App Page

Once you've added your images, visit:
- **Local**: http://localhost:3000/app
- The "App" link is also in the navigation menu

