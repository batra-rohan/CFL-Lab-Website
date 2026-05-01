# CFL Website — Maintenance Guide

Please only use text editors like VS Code, Notepad++ (Windows Only), TextEdit (Mac, built-in — in "Plain Text" mode) to open and make changes to the website code

### New Website File Structure
```
New Website/                        ← the main website folder
│
├── index.html                  ← Home page
├── publications.html           ← Publications page
├── projects.html               ← Projects page
├── people.html                 ← People page
├── people.js                   ← All member data (current + alumni)
├── about.html                  ← About PI page
│
├── abstract arts/              ← Slideshow images for Home page
├── cover arts/                 ← Slideshow images for Publications page
├── images/                     ← General images (logo, PI photo, etc.)
│
└── people/
    ├── Group Photo2018.jpg     ← Big Group Photo on People Page
    ├── current/
    │   ├── PhD/                ← Profile photos of current PhD students
    │   ├── Masters/            ← Profile photos of current Masters students
    │   └── Post Doc/           ← Profile photos of current PostDocs
    ├── alumni/
    │   ├── PhD/                ← Profile photos of PhD alumni
    │   ├── MTech/              ← Profile photos of MTech alumni
    │   └── PostDoc/            ← Profile photos of PostDoc alumni
    └── group gallery/          ← Gallery photos shown at the bottom of People page
```

## Table of Contents

1. [Home Page — Abstract Art Slideshow (images & captions)](#1-home-page--abstract-art-slideshow)
2. [Home Page — Group News](#2-home-page--group-news)
3. [Publications Page — Cover Art Slideshow (images & captions)](#3-publications-page--cover-art-slideshow)
4. [Publications Page — Papers List](#4-publications-page--papers-list-google-sheet)
5. [Projects Page — Funding Agencies & Consultancy](#5-projects-page--funding-agencies--consultancy)
6. [Projects Page — Presentations / Chairing](#6-projects-page--presentations--chairing-google-sheet)
7. [People Page — Group Photo (hero banner)](#7-people-page--group-photo)
8. [People Page — Add a New Current Member](#8-people-page--add-a-new-current-member)
9. [People Page — Add a New Alumni Member](#9-people-page--add-a-new-alumni-member)
10. [People Page — Group Gallery](#10-people-page--group-gallery)
11. [About PI Page — Update the CV](#11-about-pi-page--update-the-cv)
12. [About PI Page — Recognitions, Honours & Professional Roles](#12-about-pi-page--recognitions-honours--professional-roles)

---

## 1. Home Page — Abstract Art Slideshow

**File to edit:** `index.html`
**Image folder:** `abstract arts/`

The slideshow at the top of the home page displays abstract research images that cycle automatically. Each image needs:
1. The image file itself (placed in the `abstract arts/` folder)
2. A title and a short description

### Step 1 — Add the image file
Copy your new image into the **`abstract arts/`** folder inside the website folder.  
Use a clear, descriptive filename, e.g. `sharma-2027-polymer.jpg`.

### Step 2 — Add a new slide in `index.html`
Open `index.html`. Find the section that looks like this (around line 41):

```html
<section class="hero-slideshow">
  <div class="slide-container">

    <div class="slide fade active">
      <img src="abstract arts/kawale-2026-microgel.jpg" alt="Microgel">
      <div class="slide-caption">
        <h3>Microgel Suspensions</h3>
        <p>Exploring the unique yielding and structural recovery of soft microgels.</p>
      </div>
    </div>

    <div class="slide fade">
      ...
    </div>

    <!-- more slides -->
    <a class="prev" ...
```

Copy the block between `<div class="slide fade">` and `</div>` (not the one with `active` — just a plain one) and **paste it just before the line that says `<a class="prev"`**.

Then edit the three parts:
- `src="abstract arts/YOUR_IMAGE_NAME.jpg"` → put your actual filename
- `<h3>Your Title Here</h3>` → the title shown on hover
- `<p>Your description sentence.</p>` → one sentence referencing the publication

### To remove a slide
Simply delete the entire `<div class="slide fade"> ... </div>` block (and the image file from the folder if it is no longer needed).

> ⚠️ **Important:** DO NOT MODIFY the slide that has `class="slide fade active"` — it is just the first slide and will be replaced automatically.

---

## 2. Home Page — Group News

**File to edit:** `index.html`

The "📢 Group News" box is on the bottom of the Home page. Find this section (around line 125):

```html
<div class="news-flash-box">
  <h3>📢 Group News</h3>
  <ul class="news-list">
    <!-- Update news here-->
    <li><strong>[New]</strong> Welcome to our newly revamped group website! ...</li>
  </ul>
</div>
```

### To add a new news item
Paste a new line **inside** the `<ul class="news-list">` block, following this format:

```html
<li><strong>[New]</strong> Your news text goes here.</li>
```

**Note :** Keep the most recent news at the **top** of the list (i.e., add new items above the existing ones). Readers see the top item first.

### To remove an old news item
Delete the entire `<li>...</li>` line for that item.


---

## 3. Publications Page — Cover Art Slideshow

**File to edit:** `publications.html`
**Image folder:** `cover arts/`

The horizontal scrolling carousel at the top of the Publications page shows journal cover art images.

### Step 1 — Add the image file
Copy the cover art image into the **`cover arts/`** folder.

### Step 2 — Add a new slide in `publications.html`
Open `publications.html`. Find this section (around line 47):

```html
<section class="cover-slideshow">
  <div class="cover-slide">
    <img src="cover arts/Langmuir-1.jpg" alt="Langmuir Cover Art">
    <div class="cover-caption">Langmuir Cover Art</div>
  </div>
  <!-- more slides ... -->
  <a class="prev" ...
```

Paste a new block **just before the line `<a class="prev"`**:

```html
<div class="cover-slide">
  <img src="cover arts/YOUR_IMAGE_NAME.jpg" alt="Brief description">
  <div class="cover-caption">Caption text shown below image</div>
</div>
```

### To remove a cover slide
Delete the entire `<div class="cover-slide"> ... </div>` block for that image.

---

## 4. Publications Page — Papers List (Google Sheet)

> ✅ **This section updates automatically from the Google Sheet — you do NOT need to edit any website file.**

The website automatically groups papers by year and shows the 5 most recent years as separate tabs. Older papers go into an "Older" tab.

---

## 5. Projects Page — Funding Agencies & Consultancy

**File to edit:** `projects.html`

These two sections are plain lists written directly in the HTML file. Open `projects.html`.

### Government Funding Agencies (around line 52)
**To add a new grant**, paste a new `<li>` line inside the `<ul>` block:
```html
<h2 class="section-title" ...>Government Funding Agencies</h2>
<ul class="records-list-minimal">
  <li><strong>Project Title</strong>, Funding Agency [Start Year - End Year].</li>
  <!-- more entries ... -->
</ul>
```
**To remove a completed grant**, delete its `<li>...</li>` line.

---

### Industrial Consultancy (around line 68)

**To add a new consultancy**, paste:
```html
<h2 class="section-title" ...>Industrial Consultancy</h2>
<ul class="records-list-minimal">
  <li><strong>Company Name, Year(s):</strong> Description of collaboration.</li>
  <!-- more entries ... -->
</ul>
```
---

## 6. Projects Page — Presentations / Chairing (Google Sheet)

> ✅ **This section updates automatically from the Google Sheet— you do NOT need to edit any website file.**

💡 New rows added at the bottom of the sheet will automatically appear **first** on the website (Newest entries show at the top).

---

## 7. People Page — Group Photo

**File to edit:** `people.html`  
**Image folder:** `people/`

### To replace the group photo
1. Copy the new group photo into the **`people/`** folder.
2. Open `people.html` and find this line (around line 42):

```html
<img src="people/Group Photo2018.jpg" alt="Complex Fluids Laboratory Group Photo">
```

3. Change `Group Photo2018.jpg` to the **exact filename** of your new photo.

---

## 8. People Page — Add a New Current Member

**File to edit:** `people.js`
**Image folder:** `people/current`

All current member data is stored in `people.js`. Open this file.

At the top of the file you will see a large block starting with:

```javascript
const peopleData = {
  current: {
    Masters: [ ... ],
    PhD: [ ... ],
    PostDoc: [ ... ],
  },
```

Find the section matching the new member's category (PhD, Masters, or PostDoc).

### Step 1 — Add the profile photo
Copy the person's photo into the correct sub-folder:
- PhD students → `people/current/PhD/`
- PostDoc → `people/current/Post Doc/`
- Masters students → `people/current/Masters/`

### Step 2 — Add a line in `people.js`

Inside the correct category array (e.g., `PhD: [...]`), add a new line **before the closing `]`**. Make sure the line above it ends with a comma (`,`).

**Format:**
```javascript
{ name: "Full Name", image: "people/current/PhD/Filename.jpg", year: "2027", email: "rollno27@iitk.ac.in", focus: "center" },
```

**Fields explained:**

| Field | What to put | Required? |
|-------|-------------|-----------|
| `name` | Full name | ✅ Yes |
| `image` | Path to photo (see folders above) | ✅ Yes |
| `year` | Year of joining, e.g. `"2027"` | ✅ Yes |
| `email` | IITK email address | ✅ Yes |
| `focus` | Where to centre the face in the photo thumbnail: `"top"`, `"center"`, or `"bottom"` | ✅ Yes |
| `zoom` | Optional zoom level if face is small, e.g. `"1.3"` | ❌ Optional |

*(The `\n` creates a line break between the name and the title on the card.)* This can be used to add title such as "FARE Fellow" below the person's name.

---

## 9. People Page — Add a New Alumni Member

**File to edit:** `people.js`

In the same file, find the `alumni` section:

```javascript
alumni: {
  Masters: [ ... ],
  PhD: [ ... ],
  PostDoc: [ ... ],
},
```

### Step 1 — Add the profile photo
Copy the photo to the correct alumni folder:
- PhD alumni → `people/alumni/PhD/`
- MTech alumni → `people/alumni/MTech/`
- PostDoc alumni → `people/alumni/PostDoc/`

### Step 2 — Add a line in `people.js`

Add a new entry inside the correct array. The format for alumni is slightly different — it uses `linkedin` instead of `email`, and `year` is the **graduation year**.

**Format for PhD & MTech alumni:**
```javascript
{ name: "Full Name", image: "people/alumni/PhD/Filename.jpg", linkedin: "https://www.linkedin.com/in/...", year: "2027", focus: "center" },
```

**Format for PhD alumni who now have a faculty/research website** (adds a clickable link to their name):
```javascript
{ name: "Full Name", image: "people/alumni/PhD/Filename.jpg", linkedin: "https://www.linkedin.com/in/...", website: "https://their-university.edu/profile", year: "2027", focus: "center" },
```

**Format for PostDoc alumni**:
```javascript
{ name: "Dr. Full Name", image: "people/alumni/PostDoc/Filename.jpg", linkedin: "https://www.linkedin.com/in/...", year: "", focus: "center" },
```

---

## 10. People Page — Group Gallery

**File to edit:** `people.html`  
**Image folder:** `people/group gallery/`

The scrolling gallery at the bottom of the People page shows informal group photos.

### To add a new photo
1. Copy the photo into the **`people/group gallery/`** folder.
2. Open `people.html` and find the gallery section (around line 73):

```html
<div class="gallery-track" id="galleryTrack">
  <img src="people/group gallery/GP1.jpg" alt="Group Photo 1">
  <img src="people/group gallery/GP2.jpg" alt="Group Photo 2">
  <!-- ... more images ... -->
  <!--Insert new group image here to show in gallery-->
</div>
```

3. Add a new `<img>` line **just before the comment `<!--Insert new group image here...-->`**:

```html
<img src="people/group gallery/YOUR_FILENAME.jpg" alt="Brief description of the photo">
```

### To remove a photo
Delete the `<img ...>` line for that photo (and optionally delete the image file from the folder).

---

## 11. About PI Page — Update the CV

**File:** The CV is a PDF file stored directly in the main website folder.

### To update the CV
1. Prepare the new CV as a PDF file.
2. Name it `YMJ_CV.pdf` (exactly this name, with this capitalisation).
3. Copy it into the **main website folder** replacing the old file.

That is all. The "CV" button on the About PI page will automatically link to the new file because the filename has not changed.

---

## 12. About PI Page — Recognitions, Honours & Professional Roles

**File to edit:** `about.html`

The About PI page has two tabs:
- **"Recognitions and Honours"** — contains sub-sections for Awards, Fellowship/Associateship, and Award Lectures.
- **"Professional Roles"** — contains sub-sections for Professional Services, Chair Professorships, and Visiting Professorships.

Each sub-section is a heading (`<h2>`) followed by a bullet list (`<ul>`).

---

### How to add a new item to an existing section

Open `about.html` and find the relevant section. Every bullet point looks like this:

```html
<li><strong>Award/Role Name</strong> (Year). Additional details.</li>
```

To add a new item, paste a new `<li>...</li>` line inside the `<ul class="records-list-minimal">` block of the appropriate section.


**Example — adding a new editorial role to "Professional Services":**
```html
<li><strong>Member of the Editorial Board</strong>, <em>Journal of Colloid and Interface Science</em>, Elsevier (2027-...).</li>
```
*(The `<em>` tags make the journal name italic. The `<strong>` tags make the role name bold.)*

---

### How to add a completely new section (sub-heading) to a tab

If you need to add a brand-new category (e.g., "Board of Governor Committee") under either tab, follow these steps.

**Step 1:** Find the correct tab block in `about.html`. The two main tab blocks are:

- **Recognitions and Honours tab** starts with:
  ```html
  <div id="recognition" class="tab-content active">
  ```
  and ends just before the line:
  ```html
  <!-- Professional Roles Tab -->
  ```

- **Professional Roles tab** starts with:
  ```html
  <div id="professional" class="tab-content">
  ```
  and ends at the closing `</div>` just before `</section>`.

**Step 2:** Paste the following block **inside** the chosen tab's `<div>`, just before its closing `</div>`:

```html
<div class="tab-section-block">
  <h2 class="section-title">Your New Section Title</h2>
  <ul class="records-list-minimal">
    <li><strong>First Entry</strong> (Year). Details here.</li>
    <li><strong>Second Entry</strong> (Year). Details here.</li>
  </ul>
</div>
```

Replace `Your New Section Title` and the list items with the actual content.

---

## Quick Reference — Which file to edit for what

| What you want to update | File(s) to edit |
|-------------------------|-----------------|
| Home page slideshow images/captions | `index.html` + add image to `abstract arts/` |
| Home page Group News | `index.html` |
| Publications cover art carousel | `publications.html` + add image to `cover arts/` |
| Papers list | Google Sheet only (automatic) |
| Funding Agencies / Consultancy | `projects.html` |
| Presentations / Chairing | Google Sheet only (automatic) |
| Group hero photo (People page) | `people.html` + add photo to `people/` |
| Current members | `people.js` + add photo to `people/current/...` |
| Alumni members | `people.js` + add photo to `people/alumni/...` |
| Group gallery photos | `people.html` + add photo to `people/group gallery/` |
| PI CV | Replace `YMJ_CV.pdf` in the main folder |
| PI recognitions / professional roles | `about.html` |

---
## Foot Notes

If something is unclear, feel free to reach out to:<br>
Rohan Batra <br>
batra22rohan@gmail.com  <br>
(UG 21-26 ChemE-CS IITK )

Developed with love ❤️:<br>
Design and Planning - Devanjali Sharma & Rohan Batra <br>
Implementation - Rohan Batra (with generous help from LLMs)<br>