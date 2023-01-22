import Navigation from "@/ui/navigation";

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
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "10px 0px",
            }}
          >
            <Navigation href="/">Home</Navigation>
            <Navigation href="/about">About</Navigation>
            <Navigation href="/contact">Contact</Navigation>
            <Navigation href="/products">Products</Navigation>
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
