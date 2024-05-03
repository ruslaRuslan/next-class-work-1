export const metadata = {
  title: "Esas title",
  description: "Bu esas proyektir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>bu navbardi</div>
        {children}
        <div>bu footerdir</div>
      </body>
    </html>
  );
}
