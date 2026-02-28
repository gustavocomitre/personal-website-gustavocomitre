import Container from "@/components/layout/Container";

interface WorkImageGridProps {
  images: { src: string; alt: string; fullWidth?: boolean }[];
}

export default function WorkImageGrid({ images }: WorkImageGridProps) {
  if (!images || images.length === 0) return null;

  const gridImages = images.slice(0, 2);
  const fullWidthImages = images.slice(2);

  return (
    <Container className="py-12 md:py-20">
      {/* 2-column grid for first 2 images */}
      {gridImages.length > 0 && (
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {gridImages.map((image, index) => (
            <div
              key={index}
              className="flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gray-100"
            >
              <p className="text-sm text-gray-400">{image.alt}</p>
            </div>
          ))}
        </div>
      )}

      {/* Full-width remaining images */}
      {fullWidthImages.map((image, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gray-100">
            <p className="text-sm text-gray-400">{image.alt}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}
