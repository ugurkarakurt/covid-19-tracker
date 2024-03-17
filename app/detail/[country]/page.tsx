import React from "react";
import DetailContainer from "@/containers/detail/detail.container";
import { DetailPageProps } from "@/types/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Covid-19 Tracker Detail",
  description: "View the COVID-19 situation of a specific country in detail. Learn about the number of cases, deaths, recoveries and other important statistics.",
};

const DetailPage: React.FC<DetailPageProps> = ({ params }) => {
  const country: string = params.country;

  return <DetailContainer country={country} />;
};

export default DetailPage;
