import { useEffect, useRef, useState, memo } from "react";

interface ProjectVideoProps {
  src: string;
  title: string;
}

const ProjectVideo = memo(({ src, title }: ProjectVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "200px", threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="mb-4 overflow-hidden rounded-lg">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={`${title} demo video`}
        className="w-full object-contain"
      />
    </div>
  );
});

ProjectVideo.displayName = "ProjectVideo";

export default ProjectVideo;
