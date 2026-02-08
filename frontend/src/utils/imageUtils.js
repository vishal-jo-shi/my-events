// ---------- load image ----------
const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

// ---------- pad to aspect ----------
export const padToAspectRatio = async (
  file,
  aspect,
  bg = "#f3f4f6"
) => {
  const url = URL.createObjectURL(file);
  const img = await loadImage(url);
  URL.revokeObjectURL(url);

  let cw, ch;
  if (img.width / img.height > aspect) {
    cw = img.width;
    ch = Math.round(img.width / aspect);
  } else {
    ch = img.height;
    cw = Math.round(img.height * aspect);
  }

  const canvas = document.createElement("canvas");
  canvas.width = cw;
  canvas.height = ch;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, cw, ch);
  ctx.drawImage(
    img,
    Math.round((cw - img.width) / 2),
    Math.round((ch - img.height) / 2)
  );

  return new Promise((resolve) => {
    canvas.toBlob(
      (b) =>
        resolve(new File([b], file.name, { type: "image/jpeg" })),
      "image/jpeg",
      0.92
    );
  });
};

// ---------- canvas → file ----------
export const canvasToFile = (canvas) =>
  new Promise((resolve) => {
    canvas.toBlob(
      (b) =>
        resolve(new File([b], "cropped.jpg", { type: "image/jpeg" })),
      "image/jpeg",
      0.92
    );
  });
