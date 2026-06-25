import { useState } from 'react';
import './PhotoGallery.css';

export default function PhotoGallery({ propertyName, folderPath }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Generate image paths
  const images = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `${folderPath}/${String(i + 1).padStart(2, '0')}-${['ingresso', 'camera-1', 'camera-2', 'balcone', 'vista-mare', 'salone', 'camera-3', 'dettagli'][i]}.jpg`,
    alt: `${propertyName} - Photo ${i + 1}`
  }));

  return (
    <>
      <div className="photo-gallery">
        <div className="gallery-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
              <div className="overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="close-btn">&times;</button>
          <img src={selectedImage.src} alt={selectedImage.alt} />
        </div>
      )}
    </>
  );
}
