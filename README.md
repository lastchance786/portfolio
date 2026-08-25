# Tejas Wakchoure Portfolio

A Vercel-ready portfolio built with Next.js, TypeScript, and Tailwind CSS.

## What is included

- Responsive professional portfolio
- Supplied professional portrait
- Skills, projects, experience, and contact sections
- Searchable featured certification section
- Link to the complete public Google Drive certification library
- GitHub and LinkedIn links
- Basic SEO metadata

## Important edits before publishing

1. Open `data/certifications.ts` and replace the six sample titles with the exact certificate names.
2. For the best viewing experience, use an individual public link for each certificate in the `url` field.
3. Put your CV at `public/resume.pdf`. The Resume button already points there.
4. Review the experience and project text and add only verified, non-confidential achievements.
5. If your LinkedIn URL differs, update `linkedinUrl` in `app/page.tsx`.

## Run locally

Install Node.js 20 or newer, open a terminal in this folder, and run:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Push to GitHub

Create an empty repository named `tejas-portfolio` in your GitHub account. Then run:

```bash
git init
git add .
git commit -m "Create professional BI portfolio"
git branch -M main
git remote add origin https://github.com/lastchance786/tejas-portfolio.git
git push -u origin main
```

If the GitHub repository has another name, update the remote URL accordingly.

## Deploy on Vercel

1. Sign in to Vercel with GitHub.
2. Choose Add New, then Project.
3. Import the `tejas-portfolio` repository.
4. Keep the automatically detected Next.js settings.
5. Choose Deploy.

Every later push to the `main` branch will update the deployed portfolio.
