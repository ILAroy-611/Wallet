import { Tabs } from "antd";
import "./frequencytab.css";

function FrequencyTab({ items, handleTabChange }) {
  return (
    <>
      <Tabs
        centered
        tabBarStyle={{ 
            width: "100%", 
            justifyContent: "space-between !important", 
            padding:'0px' 
        }}
        size={"large"}
        items={items}
        defaultActiveKey={items[0].key}
        onChange={handleTabChange}
      />
    </>
  );
}

export default FrequencyTab;
