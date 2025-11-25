// components/EmbedWithFallback.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

interface EmbedWithFallbackProps {
  videoUrl?: string; // must be embed-form: https://www.youtube.com/embed/VIDEO_ID
  title?: string;
  poster?: string; // optional fallback image (resource.image)
}

export default function EmbedWithFallback({
  videoUrl,
  title,
  poster,
}: EmbedWithFallbackProps) {
  const [thumbOk, setThumbOk] = useState<boolean | null>(null);
  const [thumbUrl, setThumbUrl] = useState<string | null>(null);

  const videoId = useMemo(() => {
    if (!videoUrl) return null;
    // try to extract ID from embed or watch url
    const m = videoUrl.match(/\/embed\/([A-Za-z0-9_-]{6,})/);
    if (m && m[1]) return m[1];
    const m2 = videoUrl.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
    if (m2 && m2[1]) return m2[1];
    return null;
  }, [videoUrl]);

  const watchUrl = useMemo(
    () => (videoId ? `https://www.youtube.com/watch?v=${videoId}` : undefined),
    [videoId]
  );

  useEffect(() => {
    if (!videoId) {
      setThumbOk(false);
      setThumbUrl(null);
      return;
    }
    // test thumbnail (maxresdefault then fallback)
    const candidates = [
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    ];

    let cancelled = false;

    (async () => {
      for (const url of candidates) {
        try {
          await new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              // some videos return a 120x90 "not available" image but still onload => we guard by size
              if ((img.naturalWidth ?? 0) >= 120) {
                resolve();
              } else {
                reject(new Error("thumbnail too small"));
              }
            };
            img.onerror = () => reject(new Error("thumb load error"));
            img.src = url + `?cacheBust=${Date.now()}`;
          });
          if (cancelled) return;
          setThumbOk(true);
          setThumbUrl(url);
          return;
        } catch {
          // try next
        }
      }
      if (!cancelled) {
        setThumbOk(false);
        setThumbUrl(null);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [videoId]);

  // Show inline iframe if we have an embed url AND thumbnail check succeeded (thumbOk === true)
  // If thumbOk === null (still checking) we show poster or skeleton.
  // If thumbOk === false we show poster + Watch on YouTube button.
  if (!videoUrl) {
    return (
      <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
        {poster ? (
          <img src={poster} alt={title ?? "Video"} className="w-full object-cover" />
        ) : (
          <div className="w-full h-60 md:h-96 flex items-center justify-center text-gray-500">
            No video available
          </div>
        )}
      </div>
    );
  }

  // Inline iframe stage
  if (thumbOk === true) {
    return (
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          key={videoUrl} // force reload if url changes
          src={`${videoUrl}?rel=0&modestbranding=1&enablejsapi=1`}
          title={title || "Video"}
          className="w-full h-[320px] md:h-[480px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
        <div className="p-3 flex items-center justify-end gap-3 bg-white/60 dark:bg-black/40">
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm shadow hover:bg-indigo-700 transition"
          >
            ▶ Watch on YouTube
          </a>
        </div>
      </div>
    );
  }

  // Still checking or thumbnail failed => show poster or thumbnail and fallback button
  const displayImg = poster ?? thumbUrl ?? `/images/video-placeholder.jpg`;
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <img
        src={displayImg}
        alt={title ?? "Video poster"}
        className="w-full h-[320px] md:h-[480px] object-cover"
      />
      <div className="p-4 bg-white/60 dark:bg-black/40 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm text-gray-700 dark:text-gray-200">
          {thumbOk === null ? (
            <span>Checking video availability…</span>
          ) : (
            <span>
              If the player does not appear, the video might restrict embedding. You can open it on YouTube.
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm shadow hover:bg-indigo-700 transition"
          >
            ▶ Watch on YouTube
          </a>
          <button
            onClick={() => {
              // Encourage user to try inline (reload by toggling key)
              // Force immediate attempt: set thumbOk to true and rely on iframe key to reload.
              setThumbOk(true);
            }}
            className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 text-sm hover:bg-indigo-50 transition"
          >
            Try Inline
          </button>
        </div>
      </div>
    </div>
  );
}
