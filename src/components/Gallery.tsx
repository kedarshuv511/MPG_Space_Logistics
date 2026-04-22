import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Building2, 
  Package, 
  TrendingUp,
  PlayCircle,
  ImageIcon
} from "lucide-react";

const galleryCategories = [
  { id: 'all', label: 'All Photos', icon: Camera },
  { id: 'exterior', label: 'Exterior', icon: Building2 },
  { id: 'interior', label: 'Interior', icon: Package },
  { id: 'features', label: 'Loading & Features', icon: TrendingUp },
];

// Static gallery metadata. Image paths that point under `/src/assets/` will be
// resolved to their final, hashed URLs by Vite below using import.meta.glob.
const galleryItems = [
  // Exterior Photos
  {
    id: 1,
    category: 'exterior',
    type: 'image',
    title: 'Main Warehouse Front View',
    description: 'Entrance showing Grade A construction',
    image: '/src/assets/R2_View-9.jpg',
  },
  {
    id: 2,
    category: 'exterior',
    type: 'image',
    title: 'Side View of Facility',
    description: '125,000 sq ft built-up area',
    image: '/src/assets/R2_View-8.jpg',
  },
  {
    id: 3,
    category: 'exterior',
    type: 'image',
    title: 'Aerial View',
    description: 'Complete facility overview',
    image: '/src/assets/R2_View-5.jpg',
  },

  {
    id: 4,
    category: 'exterior',
    type: 'image',
    title: 'Warehouse Side Elevation',
    description: 'Detailed view showcasing the side elevation of the warehouse structure',
    image: '/src/assets/R2_View-1.jpg',
  },

  {
    id: 5,
    category: 'exterior',
    type: 'image',
    title: 'Warehouse Campus View with Water Reservoir',
    description: 'This panoramic view highlights our warehouse facility with dedicated water reservoir in a well-organized industrial setting',
    image: '/src/assets/R2_View-10.jpg',
  },

  {
    id: 6,
    category: 'features',
    type: 'image',
    title: 'Utility & Support Services Block',
    description: 'Dedicated to core utility and support functions, featuring water storage tanks, treatment and pumping systems, electrical facilities, and staff support rooms',
    image: '/src/assets/R2_View-11.jpg',
  },

{
    id: 7,
    category: 'exterior',
    type: 'image',
    title: 'Utility & Support Services Block',
    description: 'Dedicated to core utility and support functions, featuring water storage tanks, treatment and pumping systems, electrical facilities, and staff support rooms',
    image: '/src/assets/R2_View-12.jpg',
  },
  // Interior Warehouse
  {
    id: 8,
    category: 'interior',
    type: 'image',
    title: 'Main Warehouse Space',
    description: '16-meter center height, wide open space',
    image: '/src/assets/R2_View-13.jpg',
  },
  {
    id: 9,
    category: 'interior',
    type: 'image',
    title: 'Storage Area',
    description: 'FM-2 flooring, Grade A quality',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&q=80',
  },
  {
    id: 10,
    category: 'interior',
    type: 'image',
    title: 'Mezzanine Floor',
    description: '565 sq meter mezzanine level',
    image: '/src/assets/R2_View-14.jpg',
  },
  // Loading Docks & Features
  {
    id: 11,
    category: 'features',
    type: 'image',
    title: 'Loading Docks',
    description: '27 loading docks with dock levellers',
    image: '/src/assets/main_3.png',
  },
  {
    id: 12,
    category: 'features',
    type: 'image',
    title: 'Dock Area',
    description: '28-meter driveway, 4-feet dock height',
    image: '/src/assets/R2_View-4.jpg',
  },
  {
    id: 13,
    category: 'features',
    type: 'image',
    title: 'Warehouse Entrance & Administrative Block',
    description: 'Warehouse Entrance & Administrative Block',
    image: '/src/assets/R2_View-7.jpg',
  },
  // Drone Video
  {
    id: 14,
    category: 'exterior',
    type: 'video',
    title: 'Drone Video Tour',
    description: 'Complete facility tour from above',
    thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    videoUrl: '#', // Replace with actual video URL
  },
];

// Resolve any local asset paths (e.g. '/src/assets/Name.jpg') to the
// production URLs emitted by Vite. This uses import.meta.glob to load all
// matching files under src/assets and returns a map of filename -> url.
const _imageModules = import.meta.glob('/src/assets/*.{png,jpg,jpeg}', { eager: true, as: 'url' }) as Record<string, string>;
const _imageMap: Record<string, string> = Object.fromEntries(
  Object.entries(_imageModules).map(([k, v]) => [k.replace('/src/assets/', ''), v])
);

function resolveImagePath(p?: string | null) {
  if (!p) return p ?? null;
  // Only rewrite local src asset references that start with the project path
  if (p.startsWith('/src/assets/')) {
    const key = p.replace('/src/assets/', '');
    return _imageMap[key] ?? p; // fallback to original path if not found
  }
  return p;
}

// Use resolved URLs for runtime rendering. This keeps the original metadata
// (titles, categories, etc.) but points `image`/`thumbnail` to the final URL.
const galleryItemsResolved = galleryItems.map((it) => ({
  ...it,
  image: resolveImagePath(it.image as string) as string | null,
  thumbnail: resolveImagePath((it as any).thumbnail) as string | null,
}));

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItemsResolved[0] | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItemsResolved
    : galleryItemsResolved.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="w-full relative z-10">
        <div className="text-center mb-12 px-6">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              Photo Gallery
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            See Our Facility
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our Grade A warehouse through detailed photos and videos
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-6">
          {galleryCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105'
                    : 'bg-background hover:bg-primary/5 text-foreground hover:scale-105 border-2 border-border hover:border-primary/30'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid - Full Width */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 px-2">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer rounded-lg"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image || item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>

                {/* Video Badge */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <PlayCircle className="h-6 w-6 text-white" />
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-white border-0">
                    {galleryCategories.find(c => c.id === item.category)?.label}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Boxes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">High Quality</h3>
                  <p className="text-sm text-muted-foreground">Professional photography</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-transparent border-2 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-500 rounded-xl flex items-center justify-center">
                  <ImageIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Every Detail</h3>
                  <p className="text-sm text-muted-foreground">Complete facility coverage</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-2 border-green-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <PlayCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Virtual Tour</h3>
                  <p className="text-sm text-muted-foreground">Drone footage available</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Modal for viewing images/videos in full size */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors text-2xl"
            >
              ✕
            </button>
            
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-w-full max-h-[90vh] rounded-lg"
              />
            ) : (
              <div className="bg-black rounded-lg p-8">
                <div className="aspect-video">
                  <iframe
                    src={selectedItem.videoUrl}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
            
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
              <p className="text-white/80">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
