import { Helmet } from "react-helmet-async";

function SEO() {
    return (
        <Helmet>
            <title>Your Website Title</title>
            <meta name="description" content="Description of your website" />
            <meta name="keywords" content="your, keywords, here" />
            <meta property="og:title" content="Your Open Graph Title" />
            <meta property="og:description" content="Description for social sharing" />
            <meta property="og:image" content="https://yourwebsite.com/image.jpg" />
        </Helmet>
    );
}

export default SEO;
