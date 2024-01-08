import iconMap from "./iconMap";

const DynamicIconRenderer = ({itemName}) => {
  if (iconMap[itemName]) {
    const IconComponent = iconMap[itemName];
    return <IconComponent />;
  } else {
    return <div>Icon not found</div>;
  }
};
export default DynamicIconRenderer;
