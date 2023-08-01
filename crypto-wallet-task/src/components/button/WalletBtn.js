import { Button } from "antd";
import React from "react";

function WalletBtn({
  children,
  action,
  classNames,
  block = false,
  type = "primary",
  size = "default",
}) {
  return (
    <>
      <Button
        type={type}
        size={size}
        onClick={action}
        block={block}
      >
        {children}
      </Button>
    </>
  );
}

export default WalletBtn;
