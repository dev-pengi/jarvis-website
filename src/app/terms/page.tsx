"use client";
import { FC, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const page: FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <div style={{ width: "90%", margin: "30px auto" }}>
        <Document
          file="/terms.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from(new Array(numPages || 0), (_, index) => (
            <Page
              key={index}
              pageNumber={index + 1}
              width={
                typeof window !== "undefined" ? window.innerWidth * 0.9 : 800
              }
              renderTextLayer
              renderAnnotationLayer
            />
          ))}
        </Document>
      </div>
      <Footer />
    </>
  );
};

export default page;
