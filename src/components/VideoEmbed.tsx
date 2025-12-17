import React from 'react';

interface VideoEmbedProps {
  src: string;
  title: string;
  description?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ src, title, description }) => (
  <div className="my-12">
    {description && <p className="mb-4 text-lg text-center">{description}</p>}
    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  </div>
);

export default VideoEmbed;
