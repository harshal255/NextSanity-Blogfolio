![Portfolio](https://res.cloudinary.com/dlsxq98fr/image/upload/v1691080742/NextSanity%20Blogfolio/profile_jqf56f.png)

<div align="center">
  &middot;
  <i>NextSanity Blogfolio built in Next.js + SanityCMS + Tailwind CSS</i>
  &middot;
  <br/>
  <br/>

  <p align="center">
    <img src="https://img.shields.io/github/forks/harshal255/NextSanity-Blogfolio?style=for-the-badge" />
  <a href="https://harshalkahar.vercel.app/">
    <img src="https://img.shields.io/static/v1?label=&message=View%20Demo&style=for-the-badge&color=black&logo=vercel" />
  </a>
</p>

<p align="center">
  <a href="#introduction-">Introduction</a> •
  <a href="#development-">Loacal Development</a> •
    <a href="#deployment-">Deployment</a> •
  <a href="#license-">License</a>
</p>

</div>

## Introduction 👋

<h1>Why ??</h1>

## 📚 Embrace the Power of Open Source:

NextSanity blogfolio is not just another portfolio builder; it's an open source project crafted with love and dedication. We believe in the power of giving back to the community, and that's why we're making this platform freely available for all aspiring students out there. You don't need to be a seasoned developer to showcase your skills anymore - NextSanity blogfolio simplifies the process for you!

## 🎨 Seamless Integration of Cutting-Edge Technologies:

Our tech stack is built with excellence in mind. NextJS ensures blazing-fast server-side rendering, while Tailwind CSS adds a touch of elegance and responsiveness to your portfolio's design. To create eye-catching animations, we leverage the power of Framer Motion, bringing life to your projects and experiences.

## 💻 Powering the Backend with Sanity Headless CMS & GROQ Query Language:

Behind the scenes, we've incorporated Sanity Headless CMS, providing you with a seamless content management experience. Now you can effortlessly update your portfolio content without diving into complex codebases. With GROQ query language, fetching and displaying your data is a breeze, giving you more time to focus on creating the perfect narrative for your story.

## 📝 Your Journey, Your Story:

NextSanity blogfolio understands that you are more than just a resume. That's why we've thoughtfully designed sections for "About," "Experience," "Projects," "Blogs," and even a special space for your "School & College Story." Let your personality shine through, and showcase not just your achievements but also your unique journey that has shaped you into the extraordinary individual you are today."

## Local Development 💻

Here are the steps to run the portfolio locally.

Step 1. Fork [this](https://github.com/harshal255/NextSanity-Blogfolio) repository.

Step 2. Clone your forked copy of the repo

```bash
git clone https://github.com/<yourusername>/NextSanity-Blogfolio.git
```

Step 3. Creating a Sanity Project:

Create a sanity project on [https://www.sanity.io](https://www.sanity.io/).

Step 4. Copy Project ID (Secret):
To proceed, you need to redirect to https://www.sanity.io/manage/personal and copy your project's projectId.

Step 5. Run the Backend (SanityIO):
Create a .env file in the backend of SanityIO.

```bash
cd NextSanity-Blogfolio
```

```bash
cd backend SanityIO
```

```bash
touch .env
```

Fill up the .env file with your Sanity project ID. You don't need to change the dataset variable.

```javascript
SANITY_STUDIO_PROJECT_ID = "xxxxxxxx";
SANITY_STUDIO_DATASET = "production";
```

Then, run.

```bash
yarn install
```

```bash
yarn run dev
```

( don't use npm package )

Step 6. After opening Sanity Studio, log in to your Sanity account and then fill up all schema fields. (All fields are mandatory.)

Your desk for maintaining sanity looks like this:

![sanity1](https://res.cloudinary.com/dlsxq98fr/image/upload/v1691078361/NextSanity%20Blogfolio/1_varwbz.png)

![sanity2](https://res.cloudinary.com/dlsxq98fr/image/upload/v1691078361/NextSanity%20Blogfolio/2_vcchyn.png)

![sanity3](https://res.cloudinary.com/dlsxq98fr/image/upload/v1691078361/NextSanity%20Blogfolio/3_qnxi1h.png)

![sanity4](https://res.cloudinary.com/dlsxq98fr/image/upload/v1691078361/NextSanity%20Blogfolio/4_hwue2e.png)

Step 7. Run the NextJS application.
Go to the NextSanity-Blogfolio directory and then proceed.

```bash
cd ..
```

```bash
cd frontend NextJS
```

```bash
touch .env
```

After creating a .env file, fill it up with your Sanity project ID.

```javascript
NEXT_SANITY_PROJECT_ID="xxxxxxxx”
```

```bash
yarn install
```

```bash
yarn run dev
```

## Deployment 🚀

Step 1. Create a Vercel account and select "Import Project"

Step 2. Select the forked repository and deploy

Step 3. Add the following environment variables in the Vercel dashboard:

```javascript
NEXT_SANITY_PROJECT_ID="xxxxxxxx”
```

Step 4. Congratulations your applicaton is ready✨

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/harshal255/NextSanity-Blogfolio/blob/master/LICENSE)

## Contact 📬

If you want to contact me, you can reach me through below handles.

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/harshal-kahar-4115a321b)

## Support 🙌

If you like this portfolio, please consider giving it a ⭐ on GitHub and sharing it with your friends via social media.

<div align="center">
  <h3> Show some &nbsp;❤️&nbsp; by starring this repo! </h3>
</div>
