/**
 * JSON-LD structured data for SEO / rich results.
 * Renders a Person schema describing Ritu Bera's professional profile.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ritu Bera",
    jobTitle: "MBA Student — Marketing Major, Operations Minor",
    description:
      "MBA student at Lovely Professional University specializing in Marketing with a minor in Operations, focused on brand management, marketing strategy, consumer behaviour and business development.",
    email: "mailto:ritubera.work23@gmail.com",
    url: "https://ritu-bera-portfolio.vercel.app",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Lovely Professional University (LPU)",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "MPC Autonomous College, Odisha",
      },
    ],
    knowsAbout: [
      "Marketing Strategy",
      "Brand Management",
      "Consumer Behaviour",
      "Business Development",
      "Marketing Management",
      "Operations Management",
    ],
    sameAs: ["https://www.linkedin.com/in/ritu-bera-53a47443a/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
