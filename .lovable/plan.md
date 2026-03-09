

## Plan: Add Video and Link Watch Demo Buttons

The uploaded video (Samuk.mp4) will be copied into the project and used for the "Watch Demo" buttons. There are two Watch Demo buttons:

1. **Hero section** - Play button in `HeroSection.tsx` (line 236-245)
2. **CTA banner** - "Watch Demo" button in `CtaBanner.tsx` (line 17)

### Approach

Since this is a video file, I'll place it in the `public` folder (better for large media files that shouldn't be bundled by Vite), then make both buttons open the video. Two options for how users see the video:

**Option A - Video popup modal**: Clicking "Watch Demo" opens a modal/dialog on the page with the video playing. This keeps users on the site and feels polished.

**Option B - Open in new tab**: Simply link to the video file in a new tab. Quick but less elegant.

### Implementation (Option A - Modal)

1. **Copy video** to `public/videos/Samuk.mp4`
2. **Create a `VideoModal` component** using the existing Dialog/AlertDialog UI components - embeds an HTML5 `<video>` player with controls
3. **Update `HeroSection.tsx`** - wrap the play button with the VideoModal trigger
4. **Update `CtaBanner.tsx`** - wrap the Watch Demo button with the VideoModal trigger

This keeps users on-site and provides a clean viewing experience.

