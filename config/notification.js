import { notification } from "antd";

export default ({ message, description }) => {
  notification.open({
    message,
    description
  });
};
