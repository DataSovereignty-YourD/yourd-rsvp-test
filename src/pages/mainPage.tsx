import MainHero from "../components/main/mainhero";
import Usecase from "../components/main/usecase";
import Footer from "../components/common/footer";
import Login from "../components/common/login";
import QrFeature from "../components/main/qrFeature";
import EasyFeature from "../components/main/easyFeature";

export default function MainPage() {
  return (
    <>
      <MainHero />
      <QrFeature />
      <EasyFeature />
      <Usecase />
      <Footer />
    </>
  );
}
