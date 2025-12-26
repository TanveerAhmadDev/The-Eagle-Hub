import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Text,
  Button,
} from "@react-email/components";

export default function WelcomeEmail({ name, message }) {
  return (
    <Html>
      <Head />
      <Preview>New Message from {"name"}</Preview>
      <Body>
        <Text>Hello {name},</Text>
        <Text>{message}</Text>
        <Button href="https://yourapp.com">Visit Us</Button>
      </Body>
    </Html>
  );
}
