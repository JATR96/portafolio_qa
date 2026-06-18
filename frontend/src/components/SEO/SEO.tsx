import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({
  title,
  description,
}: SEOProps): React.JSX.Element => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />
    </Helmet>
  );
};

export default SEO;