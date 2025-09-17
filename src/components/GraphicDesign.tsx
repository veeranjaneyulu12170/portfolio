import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GraphicDesign = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const designProjects = [
    {
      title: "Mitti & Co - Coming Soon Campaign",
      description: "Brand identity and coming soon campaign for sustainable food brand",
      image: "/lovable-uploads/acf54b56-db0c-465a-b281-1d6a4e44292c.png",
      category: "Brand Identity",
      tools: ["Photoshop", "After Effects"]
    },
    {
      title: "Mitti & Co - Brand Styling",
      description: "Alternative brand styling with warm earth tones and organic elements",
      image: "/lovable-uploads/2b93e50f-2120-4e11-996c-2ccbebab71cc.png",
      category: "Brand Design",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      title: "Grano Foods - Product Packaging",
      description: "Premium product packaging design for chickpea flour brand",
      image: "/lovable-uploads/72999da6-b8a5-4763-9db7-fb49c67a3432.png",
      category: "Packaging Design",
      tools: ["Photoshop", "Blender"]
    },
    {
      title: "Phyto Craft - Multivitamin Package",
      description: "Pet supplement packaging with clean, professional aesthetic",
      image: "/lovable-uploads/eeb9a8c8-98a7-4346-b144-ed5dabb63712.png",
      category: "Product Design",
      tools: ["Photoshop", "3D Rendering"]
    },
    {
      title: "WWH Pet Supplements",
      description: "Minimalist packaging design for premium pet vitamin supplements",
      image: "/lovable-uploads/9ee51ac6-13a2-401d-81c6-40a45c45104c.png",
      category: "Product Design",
      tools: ["Photoshop", "Blender"]
    },
    {
      title: "Grano Product Collection",
      description: "Complete product line photography and styling showcase",
      image: "/lovable-uploads/3f37dea8-4469-4e5c-92c5-c95b3aeb1a9a.png",
      category: "Product Photography",
      tools: ["Photography", "Photoshop"]
    }
  ];

  const categories = ["All", "Brand Identity", "Packaging Design", "Product Design", "Product Photography"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? designProjects 
    : designProjects.filter(project => project.category === activeCategory);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="graphics" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rich-brown mb-4">
            Graphic Design & VFX
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visual storytelling through product animation, brand identity, and creative design
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-primary/10'
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(project.image)}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-soft hover:shadow-medium transition-all duration-300 group-hover:scale-105">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-rich-brown/0 group-hover:bg-rich-brown/20 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-lg font-semibold text-rich-brown mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-2 py-1 bg-soft-beige text-xs text-foreground rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Overview */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-soft">
            <div className="text-3xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-rich-brown mb-3">Product Animation</h3>
            <p className="text-muted-foreground">Dynamic 3D product animations and motion graphics using Blender and After Effects</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-soft">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-rich-brown mb-3">Brand Identity</h3>
            <p className="text-muted-foreground">Complete brand identity systems including logos, packaging, and visual guidelines</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-soft">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-rich-brown mb-3">Visual Effects</h3>
            <p className="text-muted-foreground">Professional VFX and post-production using industry-standard software</p>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Selected design"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 border-white/30"
                onClick={closeLightbox}
              >
                <X className="text-white" size={20} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GraphicDesign;