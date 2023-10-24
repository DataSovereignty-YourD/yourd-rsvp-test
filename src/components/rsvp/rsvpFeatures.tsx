import QrFeature from "../feature/qrFeature";
import EasyFeature from "../feature/easyFeature";
import CustomFeature from "../feature/customFeature";

export default function RsvpFeatures() {
  return (
    <div>
      <QrFeature />

      {/* <CustomFeature /> */}
      <EasyFeature />
    </div>
  );
}
