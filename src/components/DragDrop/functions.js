import pdfjsLib from "pdfjs-dist/webpack";

async function getPdfText(data) {
  let doc = await pdfjsLib.getDocument({ data }).promise;
  let pageTexts = Array.from({ length: doc.numPages }, async (v, i) => {
    return (await (await doc.getPage(i + 1)).getTextContent()).items
      .map((token) => token.str)
      .join("");
  });
  return (await Promise.all(pageTexts)).join("");
}

const dragDropStyle = {
  backgroundColor: "white",
  cursor: "pointer",
  opacity: 0.7,
};

const regexCarmela = /^(?!(\d* יח׳)$).*/gm;

const filterArray = (product) => 
!product.includes("ק״ג") && !product.includes("מארז") && product.trim();


export { getPdfText, dragDropStyle, filterArray, regexCarmela };
