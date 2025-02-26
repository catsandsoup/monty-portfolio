import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
const Index = () => {
  return <main className="min-h-screen">
      <Hero />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">My Roles + Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/portfolio/project-management" className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p className="text-gray-600">Leading teams and delivering successful outcomes</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all group-hover:w-full" />
            </Link>
            <Link to="/portfolio/product-development" className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">Product Development</h3>
              <p className="text-gray-600">Creating innovative software solutions</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all group-hover:w-full" />
            </Link>
            <Link to="/portfolio/entrepreneurship" className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">Entrepreneurship</h3>
              <p className="text-gray-600">Building and scaling successful businesses</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all group-hover:w-full" />
            </Link>
          </div>
        </div>
      </section>
    </main>;
};
export default Index;