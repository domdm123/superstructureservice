interface MapEmbedProps {
  embedUrl: string;
  title: string;
  className?: string;
}

export default function MapEmbed({ embedUrl, title, className = "" }: MapEmbedProps) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-lg border border-gray-100 ${className}`}>
      <iframe
        src={embedUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${title}`}
        className="w-full"
      />
    </div>
  );
}
