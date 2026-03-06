"use client";

import { useEffect, useRef } from "react";

interface MapEmbedProps {
  embedUrl?: string;
  title: string;
  className?: string;
  lat?: number;
  lng?: number;
}

// Dark monochrome style — black/white/grey tones matching brand
const MAP_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#212121" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#757575" }] },
  { featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
  { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#181818" }] },
  { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
  { featureType: "poi.park", elementType: "labels.text.stroke", stylers: [{ color: "#1b1b1b" }] },
  { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#2c2c2c" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#8a8a8a" }] },
  { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#373737" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3c3c3c" }] },
  { featureType: "road.highway.controlled_access", elementType: "geometry", stylers: [{ color: "#4e4e4e" }] },
  { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
  { featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3d3d3d" }] },
];

export default function MapEmbed({ title, className = "", lat = 51.2802, lng = 1.078 }: MapEmbedProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey || !mapRef.current) return;

    const initMap = () => {
      if (!mapRef.current || !window.google?.maps) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 13,
        styles: MAP_STYLE,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        scrollwheel: false,
      });

      new window.google.maps.Circle({
        strokeColor: "#9ca3af",
        strokeOpacity: 0.75,
        strokeWeight: 1.5,
        fillColor: "#9ca3af",
        fillOpacity: 0.12,
        map,
        center: { lat, lng },
        radius: 1800,
      });

      new window.google.maps.Marker({
        position: { lat, lng },
        map,
        title,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: "#ffffff",
          fillOpacity: 1,
          strokeColor: "#4a4a4a",
          strokeWeight: 2,
        },
      });
    };

    if (window.google?.maps) {
      initMap();
      return;
    }

    const scriptId = "google-maps-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=__initGoogleMap`;
      script.async = true;
      script.defer = true;
      (window as Window & { __initGoogleMap?: () => void }).__initGoogleMap = initMap;
      document.head.appendChild(script);
    } else {
      (window as Window & { __initGoogleMap?: () => void }).__initGoogleMap = initMap;
    }
  }, [lat, lng, title, apiKey]);

  return (
    <div className={`rounded-2xl overflow-hidden shadow-lg border border-gray-800 ${className}`}>
      <div ref={mapRef} style={{ width: "100%", height: "400px", background: "#212121" }} />
    </div>
  );
}
