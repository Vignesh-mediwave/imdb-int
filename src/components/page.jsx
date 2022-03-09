import { useEffect } from "react";
const Page = (props) => {
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);
  return <div className="container">{props.children}</div>;
};

export default Page;
