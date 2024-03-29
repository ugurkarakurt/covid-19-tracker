"use client"
import { Space_Grotesk } from "next/font/google";
import "@/styles/global.scss";
import Header from "@/components/header/header.component";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { RootLayoutProps } from "@/types/types";

const ubuntu = Space_Grotesk({ subsets: ["latin"] });

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Provider store={store}>
          <Header />
          <main>{children}</main>
        </Provider>
        <span className="creator">Created by Ugur Karakurt</span>
      </body>
    </html>
  );
}

export default RootLayout;