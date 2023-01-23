import Navbar from "@/ui/navbar";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div>
          <div>
            <Navbar paths={["Home", "About", "Contact", "Products", "Admin"]} />
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
