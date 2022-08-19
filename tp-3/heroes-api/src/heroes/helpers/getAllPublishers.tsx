import React from "react";

export const getAllPublishers = (publicAll:any) => {
  const publishers:any[]  = [];
  for (let i = 0; i < publicAll.length; i++) {
    if (
      !publishers.includes(publicAll[i].biography.publisher) &&
      publicAll[i].biography.publisher !== null && publicAll[i].biography.publisher !== ""
    ){
      publishers.push(publicAll[i].biography.publisher);}}

  return publishers;};
