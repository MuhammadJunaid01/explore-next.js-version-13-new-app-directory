import Navigation from "@/ui/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Navigation href="/addProduct">Add Product</Navigation>
            <Navigation href="/createOffer">Create offer</Navigation>
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
