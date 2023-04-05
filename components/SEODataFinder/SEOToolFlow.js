import React from "react";
import ToolFeatureTitle from "../Common/ToolFeatureTitle";
import DownloadSteps from "./DownloadSteps";
import DownloadDetails from "./DownloadDetails";

const SEOToolFlow = () => {
  return (
    <>
      <ToolFeatureTitle Pageh2="How to Extract YouTube Video Title & Description in a Few Seconds" />
      <DownloadSteps />
      <ToolFeatureTitle Pageh2="About YouTube Title and Description Extractor" />
      <DownloadDetails />
    </>
  );
};

export default SEOToolFlow;
