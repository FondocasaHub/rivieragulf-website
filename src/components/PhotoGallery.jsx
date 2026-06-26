import { useState, useEffect } from 'react';
import './PhotoGallery.css';

export default function PhotoGallery({ propertyName, folderPath }) {
  const [selectedImageId, setSelectedImageId] = useState(null);

  // Generate image paths
  const images = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `${folderPath}/${String(i + 1).padStart(2, '0')}-${['ingresso', 'camera-1', 'camera-2', 'balcone', 'vista-mare', 'salone', 'camera-3', 'dettagli'][i]}.jpg`,
    alt: `${propertyName} - Photo ${i + 1}`
  }));

  const selectedImage = images.find(img => img.id === selectedImageId);

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (selectedImageId < images.length) {
      setSelectedImageId(selectedImageId + 1);
    }
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (selectedImageId > 1) {
      setSelectedImageId(selectedImageId - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') handleNextImage(e);
      if (e.key === 'ArrowLeft') handlePrevImage(e);
      if (e.key === 'Escape') setSelectedImageId(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageId, images.length]);

  return (
    <>
      <div className="photo-gallery">
        <div className="gallery-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImageId(image.id)}
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
        <div className="lightbox" onClick={() => setSelectedImageId(null)}>
          <button className="close-btn" onClick={() => setSelectedImageId(null)}>&times;</button>

          {selectedImageId > 1 && (
            <button className="nav-btn nav-prev" onClick={handlePrevImage}>
              &#10094;
            </button>
          )}

          <img src={selectedImage.src} alt={selectedImage.alt} />

          {selectedImageId < images.length && (
            <button className="nav-btn nav-next" onClick={handleNextImage}>
              &#10095;
            </button>
          )}

          <div className="lightbox-counter">
            {selectedImageId} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
