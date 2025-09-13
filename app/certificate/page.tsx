"use client";

import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const templateMap: Record<string, string> = {
  "abc123": "/certificate-test.png",
  "xyz789": "/certificate-test2.png",
};

function CertificateForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [template, setTemplate] = useState<string | null>(null);

  const handleGenerate = () => {
    const foundTemplate = templateMap[password];
    if (!foundTemplate) {
      alert("Invalid password");
      return;
    }
    setTemplate(foundTemplate);
  };

  const handleDownload = async () => {
    const element = document.getElementById("certificate");
    if (!element) return;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "pt", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save(`${name}-certificate.pdf`);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      {/* Input Form */}
      <input
        type="text"
        placeholder="Enter your name"
        className="border p-2 rounded w-64"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password (should be provided)"
        className="border p-2 rounded w-64 text-xs"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-[#334852] hover:bg-[#405862] transition-colours duration-300 text-white px-4 py-2 rounded"
        onClick={handleGenerate}
      >
        Generate Certificate
      </button>

      {/* Certificate Preview */}
      {template && (
        <div className="mt-6 flex flex-col items-center gap-4">
          <div
            id="certificate"
            className="relative w-[800px] h-[600px] border shadow-lg"
            style={{
              backgroundImage: `url(${template})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="absolute top-80 bottom-8 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-black">
              {name}
            </span>
          </div>
          <button
            className=" bg-[#3DBDB5] hover:bg-[#4DCCC3] transition-colours duration-300 text-white px-4 py-2 rounded"
            onClick={handleDownload}
          >
            Download as PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default function CertificateBuilderPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">
        Get your certificate here!
      </h1>
      <CertificateForm />
    </div>
  );
}
