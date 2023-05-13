import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonOne = (props) => (
  <ContentLoader
    className="w-2/4 flex justify-center items-center"
    speed={2}
    width={600}
    height={300}
    viewBox="0 0 600 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-1" y="-1" rx="0" ry="0" width="594" height="290" />
  </ContentLoader>
);

export default SkeletonOne;
