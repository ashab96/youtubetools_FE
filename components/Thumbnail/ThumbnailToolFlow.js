import React from "react";
import ToolFeatureTitle from "../Common/ToolFeatureTitle";
import DownloadSteps from "./DownloadSteps";
import DownloadDetails from "./DownloadDetails";

const ThumbnailToolFlow = () => {
  return (
    <>
      <ToolFeatureTitle Pageh2="How to Download YouTube Thumbnail in a Few Seconds" />
      <DownloadSteps />
      <ToolFeatureTitle Pageh2="About YouTube Thumbnail Downloader" />
      <DownloadDetails />
    </>
  );
};

export default ThumbnailToolFlow;
