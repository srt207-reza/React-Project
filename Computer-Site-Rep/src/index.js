import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Center, ChakraProvider } from "@chakra-ui/react";
import Theme from "./Theme/Theme";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import CustomeLoading from "./Utils/CustomLoading/CustomeLoading";
import { DirectionProvider } from "./Context/LocaleProvider";
import { ResponsiveProvider } from "./Context/Responsive";

//************************* || Multi Lng code || *************************
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "fa",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/Assets/Locale/{{lng}}/translation.json",
    },
    react: { useSuspense: true },
  });
//***********************************************************************

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense
    fallback={
      <Center w={"full"} h={"100vh"}>
        <CustomeLoading />
      </Center>
    }
  >
    <ResponsiveProvider>
      <DirectionProvider>
        <ChakraProvider theme={Theme}>
          <App />
        </ChakraProvider>
      </DirectionProvider>
    </ResponsiveProvider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
