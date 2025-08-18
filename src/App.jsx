import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import EarnForOver from "./components/EarnForOver";
import SetUp from "./components/SetUp";
import WeHelpIndividuals from "./components/WeHelpIndividuals";
import MakingPaymentSimple from "./components/MakingPaymentSimple";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import Example from "./components/Example";
import AltHero from "./components/AltHero";
import { Team } from "./components/Team";
import ContactUs from "./components/ContactUs";
import OpeningTime from "./components/OpeningTime";

// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/68a37ad97d18e21931dcddec/1j2v9fom0';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->

export default function App() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/68a37ad97d18e21931dcddec/1j2v9fom0";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);
  return (
    <div className="">
      <OpeningTime />
      <NavBar />
      {/* <Hero /> */}
      <AltHero />
      <AboutUs />
      {/* <EarnForOver /> */}
      <SetUp />
      <Team />
      <Testimonials />
      {/* <Example /> */}
      {/* <WeHelpIndividuals /> */}
      <FAQ />
      <ContactUs />
      <MakingPaymentSimple />

      <Footer />
    </div>
  );
}
