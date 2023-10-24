import qr from "../assets/img/qr.png";
import bgImg from "../assets/img/background1.png";
import MainRsvp from "../components/rsvp/mainRsvp";
import RsvpFeatures from "../components/rsvp/rsvpFeatures";
import RsvpUsecase from "../components/rsvp/rsvpUsecase";
import Footer from "../components/common/footer";

export default function MainPage() {
  return (
    <>
      <MainRsvp />
      <RsvpFeatures />
      <RsvpUsecase />
      <Footer />
    </>
  );
}
