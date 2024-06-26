"use client";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchDataset } from "@/lib/features/dataset/datasetSlice";

function Dataset() {
  const dispatch = useAppDispatch();
  const dataSets = useAppSelector((state) => state.dataset.dataSets);

  useEffect(() => {
    dispatch(fetchDataset());
  }, [dispatch]);

  return (
    <>
      <div>Dataset</div>
      {dataSets.map((dataset: any, index: number) => (
        <p key={index}> {dataset.datasetname}</p>
      ))}
    </>
  );
}

export default Dataset;
