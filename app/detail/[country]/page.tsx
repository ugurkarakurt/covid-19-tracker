import React from "react";
import DetailContainer from "@/containers/detail/detail.container";
import { DetailPageProps } from "@/types/types";



const DetailPage: React.FC<DetailPageProps> = ({ params }) => {
  const country: string = params.country;

  return <DetailContainer country={country} />;
};

export default DetailPage;
