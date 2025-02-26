
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Monty's strategic vision and execution capabilities transformed our digital presence, delivering exceptional results that exceeded our expectations.",
    author: "Sarah Chen",
    title: "CEO, TechVision Inc.",
  },
  {
    quote: "Working with Monty was a game-changer for our startup. His product development expertise helped us scale rapidly while maintaining quality.",
    author: "Michael Rodriguez",
    title: "Founder, InnovateLab",
  },
  {
    quote: "Monty brings a unique blend of technical knowledge and business acumen that consistently drives success in complex projects.",
    author: "Emma Thompson",
    title: "Director of Innovation, Future Systems",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
        >
          Client Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="h-full rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                <svg
                  className="w-8 h-8 text-[#00a5ee]/20 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                </svg>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="mt-auto">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
