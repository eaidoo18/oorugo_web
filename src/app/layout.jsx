import "./globals.css";


export const metadata = {
  title: "Oorugo",
  description: "Renting in Accra Made Easy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <link href="https://fonts.cdnfonts.com/css/euclid-circular-a" rel="stylesheet"/>
                
      </head>
      <body>
       
        {children}
      </body>
    </html>
  );
}
