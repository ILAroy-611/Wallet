import { Tabs } from "antd";
import "./frequencytab.css";

function FrequencyTab({ items, handleTabChange, defaultActiveKey }) {
  return (
    <>
      <Tabs
        defaultActiveKey={defaultActiveKey}
        centered
        tabBarStyle={{
          width: "100%",
          justifyContent: "space-between !important",
          padding: "0px",
        }}
        size={"large"}
        items={items}
        onChange={handleTabChange}
      />
    </>
  );
}

export default FrequencyTab;
