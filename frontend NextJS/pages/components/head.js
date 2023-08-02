import Head from "next/head"
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';


export default function HeadComponent({ seo }) {

    const projectId = process.env.PROJECT_ID;
    const client = createClient({
        projectId: projectId,
        dataset: "production",
        useCdn: false
    });
    const builder = imageUrlBuilder(client);


    return (
        <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <meta property="og:site_name" content={seo.og_site_name} />
            <meta property="og:title" content={seo.og_title} />
            <meta property="og:description"
                content={seo.og_description} />
            <meta property="og:url" content={seo.og_url} />
            <link rel="canonical" href={seo.canonical_url} />
            <meta name="author" content={seo.author} />
            <meta name="language" content={seo.language} />
            <meta name="twitter:card" content={seo.twitter_card} />
            <meta name="twitter:site" content={seo.twitter_site} />
            <meta name="application-name" content={seo.application_name} />
            <meta name="apple-mobile-web-app-title" content={seo.apple_mobile_web_app_title} />
            <link rel="icon" href={builder.image(seo.favicon).width(1500).url()} />
            <title>{seo.title}</title>
        </Head>
    )
}

export async function getServerSideProps() {

    const projectId = process.env.PROJECT_ID;
    const client = createClient({
        projectId: projectId,
        dataset: "production",
        useCdn: false
    });
    const seoquery = `*[_type == "seo"][0]`;
    const seo = await client.fetch(seoquery);

    return {
        props: {
            seo

        }
    }
}