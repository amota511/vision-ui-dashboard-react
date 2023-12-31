// @mui material components
import Card from "@mui/material/Card";

import scanMeQR from './scan-me-ai.png';

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";

// React icons
import { BsCheckCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { SiDropbox } from "react-icons/si";

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import AdobeXD from "examples/Icons/AdobeXD";

// Vision UI Dashboard theme imports
import palette from "assets/theme/base/colors";
const containerStyle = {
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%', // For full height of the parent, or use '100vh' for full viewport height
  width: '100%', // For full width of the parent, or use '100vw' for full viewport width
  position: 'relative' // Use 'fixed' or 'absolute' if you want to position it relative to the viewport
};
const urlTextFieldStyle = {
  marginTop: '50px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%', // For full height of the parent, or use '100vh' for full viewport height
  width: '50%', // For full width of the parent, or use '100vw' for full viewport width
  position: 'relative' // Use 'fixed' or 'absolute' if you want to position it relative to the viewport
};

const promptTextFieldStyle = {
  marginTop: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%', // For full height of the parent, or use '100vh' for full viewport height
  width: '50%', // For full width of the parent, or use '100vw' for full viewport width
  position: 'relative' // Use 'fixed' or 'absolute' if you want to position it relative to the viewport
};

const generateButtonStyle = {
  marginTop: '50px',
  marginBottom: '50px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%', // For full height of the parent, or use '100vh' for full viewport height
  width: '50%', // For full width of the parent, or use '100vw' for full viewport width
  position: 'relative' // Use 'fixed' or 'absolute' if you want to position it relative to the viewport
};

function GenerationView() {
  return (
    <Card className="h-100">
      <VuiBox style={containerStyle} >
        <img src={scanMeQR} alt="QR Code" />
        <div style={urlTextFieldStyle}>
          <VuiInput
            placeholder="Type URL..."
            icon={{ component: "link", direction: "left" }}
          />  
        </div>
        <div style={promptTextFieldStyle}>
          <VuiInput
            placeholder="Describe what you want it to look like..."
            icon={{ component: "lightbulb", direction: "left" }}
          />  
        </div>
        <div style={generateButtonStyle}>
          <VuiButton color="info" fullWidth>
            Generate
          </VuiButton>
        </div>

        {/* <VuiTypography variant="lg" fontWeight="bold" mb="5px" color="white">
          Orders overview
        </VuiTypography>
        <VuiBox mb={2}>
          <VuiBox display="flex" alignItems="center">
            <BsCheckCircleFill color="green" size="15px" mr="5px" />
            <VuiTypography variant="button" color="text" fontWeight="medium" ml="5px" mr="2px">
              +30%
            </VuiTypography>{" "}
            <VuiTypography variant="button" color="text" fontWeight="regular">
              {" "}
              this month
            </VuiTypography>
          </VuiBox>
        </VuiBox> */}
      </VuiBox>
      <VuiBox>
        {/* <TimelineItem
          icon={<FaBell size="16px" color={palette.info.main} />}
          title="$2400, Design changes"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          icon={<IoLogoCss3 size="16px" color={palette.error.main} />}
          title="New order #1832412"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          icon={<FaShoppingCart size="16px" color={palette.lightblue.main} />}
          title="Server payments for April"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          icon={<BsCreditCardFill size="16px" color={palette.warning.main} />}
          title="New card added for order #4395133"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          icon={<SiDropbox size="16px" color={palette.primary.focus} />}
          title="New card added for order #4395133"
          dateTime="18 DEC 4:54 AM"
        />
        <TimelineItem icon={<AdobeXD size="20px" />} title="New order #9583120" dateTime="17 DEC" /> */}
      </VuiBox>
    </Card>
  );
}

export default GenerationView;
