import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};
const layout = ({ children }) => {
  return (
    <html lang="ko">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default layout;
