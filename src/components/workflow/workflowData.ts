import {
  FaTruck,
  FaClipboardCheck,
  FaMoneyCheckAlt,
  FaTools,
  FaShieldAlt,
  FaMotorcycle,
} from "react-icons/fa";

export const workflow = [
  {
    step: "01",
    title: "Pickup Request",
    description:
      "Book your bike service through REVIGOO.",
    icon: FaTruck,
  },
  {
    step: "02",
    title: "Vehicle Inspection",
    description:
      "Our team inspects your bike and prepares a report.",
    icon: FaClipboardCheck,
  },
  {
    step: "03",
    title: "Quotation Approval",
    description:
      "Receive a transparent quotation before repairs.",
    icon: FaMoneyCheckAlt,
  },
  {
    step: "04",
    title: "Garage Service",
    description:
      "Trusted garages complete the approved work.",
    icon: FaTools,
  },
  {
    step: "05",
    title: "Quality Inspection",
    description:
      "Every bike is checked before delivery.",
    icon: FaShieldAlt,
  },
  {
    step: "06",
    title: "Doorstep Delivery",
    description:
      "Your serviced bike is delivered back safely.",
    icon: FaMotorcycle,
  },
];