import { useState } from "react";
import { padToAspectRatio } from "../../utils/imageUtils";
import ImageCropModal from "../../components/ImageCropModal";

export default function CreateEvent() {
  /* ================= DETAILS ================= */
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");

  /* ================= MEDIA ================= */
  const [media, setMedia] = useState([]);
  const [cropImg, setCropImg] = useState(null);
  const [cropAspect, setCropAspect] = useState(null);
  const [cropIndex, setCropIndex] = useState(null);

  /* ================= SCHEDULE ================= */
  const [eventDate, setEventDate] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const preview = (file) => URL.createObjectURL(file);
  const validateSize = (file, maxMB) =>
    file.size / (1024 * 1024) <= maxMB;

  /* ================= MEDIA UPLOAD ================= */
  const uploadMedia = async (file, index, aspect, maxMB) => {
    if (!validateSize(file, maxMB)) {
      alert(`Max ${maxMB}MB allowed`);
      return;
    }
    const normalized = await padToAspectRatio(file, aspect);
    setMedia((prev) => {
      const copy = [...prev];
      copy[index] = normalized;
      return copy;
    });
  };

  const uploadGallery = async (files) => {
    const list = [];
    for (let f of files) {
      if (list.length + media.length >= 7) break;
      if (!validateSize(f, 4)) continue;
      list.push(await padToAspectRatio(f, 4 / 5));
    }
    setMedia((prev) => [...prev, ...list]);
  };

  /* ================= CROP ================= */
  const handleCropDone = async (file) => {
    const aspect =
      cropIndex === 0 ? 1 :
      cropIndex === 1 ? 1.91 :
      4 / 5;

    const normalized = await padToAspectRatio(file, aspect);
    setMedia((prev) => {
      const copy = [...prev];
      copy[cropIndex] = normalized;
      return copy;
    });

    setCropImg(null);
    setCropIndex(null);
    setCropAspect(null);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = () => {
    if (!agreeTerms) return alert("Accept terms");
    console.log({ title, shortDesc, fullDesc, media, eventDate });
    alert("Event Created (check console)");
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Create Event</h1>

      {/* ================= DETAILS ================= */}
      <section className="bg-card border rounded-xl p-6 mb-8 space-y-4">
        <h2 className="font-semibold text-lg">Event Details</h2>
        <input className="input" placeholder="Title" value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <textarea className="input" placeholder="Short Description"
          value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} />
        <textarea className="input" placeholder="Full Description"
          value={fullDesc} onChange={(e) => setFullDesc(e.target.value)} />
      </section>

      {/* ================= MEDIA ================= */}
      <section className="bg-card border rounded-xl p-6 mb-8 space-y-6">
        <h2 className="font-semibold text-lg">Media & Branding</h2>

        {/* Thumbnail + Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Thumbnail */}
          <div>
            <label className="label">Thumbnail (1:1)</label>
            <div className="relative aspect-square border rounded overflow-hidden">
              {media[0] ? (
                <>
                  <button
                    className="absolute top-1 right-1 bg-blue-500 text-white p-1 rounded z-10"
                    onClick={() => {
                      setCropImg(preview(media[0]));
                      setCropAspect(1);
                      setCropIndex(0);
                    }}
                  >✂</button>
                  <img src={preview(media[0])} className="w-full h-full object-cover" />
                </>
              ) : (
                <label className="flex h-full items-center justify-center cursor-pointer">
                  Upload
                  <input hidden type="file" accept="image/*"
                    onChange={(e) => uploadMedia(e.target.files[0], 0, 1, 2)} />
                </label>
              )}
            </div>
          </div>

          {/* Banner */}
          <div className="md:col-span-2">
            <label className="label">Banner (1.91:1)</label>
            <div className="relative aspect-[1.91/1] border rounded overflow-hidden">
              {media[1] ? (
                <>
                  <button
                    className="absolute top-1 right-1 bg-blue-500 text-white p-1 rounded z-10"
                    onClick={() => {
                      setCropImg(preview(media[1]));
                      setCropAspect(1.91);
                      setCropIndex(1);
                    }}
                  >✂</button>
                  <img src={preview(media[1])} className="w-full h-full object-cover" />
                </>
              ) : (
                <label className="flex h-full items-center justify-center cursor-pointer">
                  Upload
                  <input hidden type="file" accept="image/*"
                    onChange={(e) => uploadMedia(e.target.files[0], 1, 1.91, 4)} />
                </label>
              )}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <label className="label">Gallery (4:5)</label>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {media.slice(2).map((img, i) => (
              <div key={i} className="relative aspect-[4/5] border rounded overflow-hidden">
                <button
                  className="absolute top-1 right-1 bg-blue-500 text-white p-1 rounded z-10"
                  onClick={() => {
                    setCropImg(preview(img));
                    setCropAspect(4 / 5);
                    setCropIndex(i + 2);
                  }}
                >✂</button>
                <img src={preview(img)} className="w-full h-full object-cover" />
              </div>
            ))}

            {media.length < 7 && (
              <label className="aspect-[4/5] border rounded flex items-center justify-center cursor-pointer">
                +
                <input hidden multiple type="file" accept="image/*"
                  onChange={(e) => uploadGallery(e.target.files)} />
              </label>
            )}
          </div>
        </div>
      </section>

      {/* ================= SCHEDULE ================= */}
      <section className="bg-card border rounded-xl p-6 mb-8 space-y-4">
        <h2 className="font-semibold text-lg">Schedule</h2>
        <input type="date" className="input"
          value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        <label className="flex gap-2 text-sm">
          <input type="checkbox" checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)} />
          Accept Terms & Conditions
        </label>
      </section>

      <button className="btn-primary w-full md:w-auto" onClick={handleSubmit}>
        Create Event
      </button>

      {cropImg && (
        <ImageCropModal
          image={cropImg}
          aspect={cropAspect}
          onCancel={() => setCropImg(null)}
          onComplete={handleCropDone}
        />
      )}
    </>
  );
}
