import React from "react";
import { Text } from "@radix-ui/themes";

const ErrorText = ({ message }: { message: string | undefined }) => {
  return (
    <div>
      <Text as="p" color="red">
        {message}
      </Text>
    </div>
  );
};

export default ErrorText;
