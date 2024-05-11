import Header from "@/Header/page";
export const metadata = {
  title: "Esas title",
  description: "Bu esas proyektir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <div></div>
      </body>
    </html>
  );
}
