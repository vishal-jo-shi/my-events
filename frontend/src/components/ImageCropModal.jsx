import Cropper from "react-easy-crop";
import { useState } from "react";
import { canvasToFile } from "../utils/imageUtils";

export default function ImageCropModal({
  image,
  aspect,
  onCancel,
  onComplete,
}) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [pixels, setPixels] = useState(null);

  const saveCrop = async () => {
    if (!pixels) return;

    const img = await loadImage(image);
    const canvas = document.createElement("canvas");

    canvas.width = pixels.width;
    canvas.height = pixels.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      img,
      pixels.x,
      pixels.y,
      pixels.width,
      pixels.height,
      0,
      0,
      pixels.width,
      pixels.height
    );

    onComplete(await canvasToFile(canvas));
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-card p-4 rounded-xl w-[90vw] max-w-lg">
        <div className="relative h-80 bg-black rounded overflow-hidden">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={(_, p) => setPixels(p)}
          />
        </div>

        <div className="flex justify-between mt-4">
          <button className="btn-outline" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn-primary" onClick={saveCrop}>
            Crop & Save
          </button>
        </div>
      </div>
    </div>
  );
}

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = src;
  });
