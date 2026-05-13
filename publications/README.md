# Publications Folder

This folder contains PDF files of your published papers.

## 📁 Folder Structure

```
publications/
├── journal/          ← Upload journal paper PDFs here
│   ├── paper-2025-fsi.pdf
│   ├── paper-2024-jaram.pdf
│   └── paper-2024-jmep.pdf
│
└── conference/       ← Upload conference paper PDFs here
    ├── conf-2025-jpcs.pdf
    ├── conf-2023-cmame.pdf
    └── conf-2023-dexa.pdf
```

## 📝 How to Add Your Papers

### Step 1: Rename Your PDF Files

**NEW: Use paper titles for filenames!**

Rename your PDFs based on their actual titles:

**Rules:**
- All lowercase
- Replace spaces with hyphens (-)
- Remove special characters (colons, parentheses, etc.)
- Keep numbers and letters only

**Example:**
```
Original title:
"Application of the Small Punch Creep Test in Predicting Creep Properties of Grade 91 Steel"

Rename to:
application-small-punch-creep-test-predicting-creep-properties-grade-91-steel.pdf
```

**📄 See `PAPER-FILENAMES.md` for the EXACT filename for each of your 9 papers!**

### Step 2: Upload to GitHub

**Method A: Web Upload**
1. Go to your repository: `github.com/YOUR-USERNAME/YOUR-USERNAME.github.io`
2. Navigate to `publications/journal/` folder
3. Click **"Add file"** → **"Upload files"**
4. Drag your journal paper PDFs
5. Commit changes
6. Repeat for `publications/conference/` folder

**Method B: Git Command Line**
```bash
# Copy your PDF files to the folders
cp your-journal-paper.pdf publications/journal/paper-2024-jmep.pdf
cp your-conference-paper.pdf publications/conference/conf-2023-cmame.pdf

# Commit and push
git add publications/
git commit -m "Added publication PDFs"
git push
```

### Step 3: Update data.js

Make sure the filenames in `data.js` match your uploaded PDFs:

```javascript
publications: {
  journals: [
    {
      title: "Your Paper Title",
      journal: "Journal Name",
      year: "2024",
      doi: "10.xxxx/xxxxx",
      status: "Published",
      pdfFile: "publications/journal/paper-2024-jmep.pdf"  // ← Match this!
    }
  ]
}
```

## 📋 Current Papers (from your CV)

### Journal Papers (5 papers)
1. `evaluation-thinning-behaviour-plastic-hardening-surface-friction-small-punch-test.pdf`
2. `evaluation-yield-strength-small-punch-loading-different-specimen-thicknesses.pdf`
3. `application-small-punch-creep-test-predicting-creep-properties-grade-91-steel.pdf`
4. `rupture-life-failure-mechanism-grade-91-steel-notch-constraint.pdf`
5. `numerical-prediction-creep-rupture-life-ex-service-as-received-grade-91-steel-873k.pdf`

### Conference Papers (4 papers)
1. `influence-thickness-non-uniformity-mechanical-behaviour-small-punch-load.pdf`
2. `influence-clamping-force-contact-friction-small-punch-test.pdf`
3. `target-precursor-named-entities-recognition-scientific-texts-high-temperature-steel-deep-neural-network.pdf`
4. `prediction-creep-behavior-p91-steel-873k-continuum-damage-mechanics-model.pdf`

**📄 See `PAPER-FILENAMES.md` in the root folder for the complete reference guide!**

## ✅ Checklist

- [ ] Collected all published paper PDFs
- [ ] Renamed PDFs following the naming pattern
- [ ] Uploaded to correct folders (journal/ or conference/)
- [ ] Verified filenames match in `data.js`
- [ ] Tested download links on website

## 🆘 Troubleshooting

**Download button not working?**
- Check filename spelling matches exactly in `data.js`
- Ensure PDF is uploaded to correct folder
- Path is case-sensitive: `paper-2024-jmep.pdf` ≠ `Paper-2024-JMEP.pdf`

**PDF not found (404 error)?**
- Verify the PDF exists in the repository
- Check the path in `data.js` includes the folder: `publications/journal/filename.pdf`
- Wait 2 minutes after uploading for GitHub to process

**Don't have PDF for a paper?**
- Leave the `pdfFile` field as is (placeholder name)
- The download button won't show if file doesn't exist
- Only "View Online" button will display

## 📌 Important Notes

- **File size**: Keep PDFs under 25MB each (GitHub limit per file)
- **Copyright**: Only upload papers you have rights to distribute
- **Updates**: When you add new papers, update both the PDF and `data.js`
- **Testing**: Always test download links after uploading

## 🎯 Quick Example

Adding a new paper:

1. **Get the PDF**: `my-new-paper-2024.pdf`
2. **Rename**: `paper-2024-newjournal.pdf`
3. **Upload** to `publications/journal/`
4. **Update data.js**:
```javascript
{
  title: "My New Research Paper",
  journal: "New Journal Name",
  year: "2024",
  doi: "10.1234/newpaper",
  status: "Published",
  pdfFile: "publications/journal/paper-2024-newjournal.pdf"
}
```
5. **Commit and push**
6. **Test** the download link on your website!

---

**Need help?** Check the main README.md or contact support.
