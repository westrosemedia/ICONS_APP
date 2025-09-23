"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface EditorialItem {
  id: string;
  title: string;
  tagline: string;
  imageUrl: string;
  focalPoint: { x: number; y: number };
}

const editorialItems: EditorialItem[] = [
  {
    id: "editorial-looks",
    title: "Editorial looks",
    tagline: "High impact examples from recent shoots",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5983.jpg?alt=media",
    focalPoint: { x: 0.5, y: 0.22 }
  },
  {
    id: "strategic-storytelling",
    title: "Strategic storytelling",
    tagline: "Where brand meets narrative",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR3352.jpg?alt=media",
    focalPoint: { x: 0.5, y: 0.28 }
  },
  {
    id: "location-stories",
    title: "Location based stories",
    tagline: "Every setting tells a story",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR4578.jpg?alt=media",
    focalPoint: { x: 0.5, y: 0.26 }
  },
  {
    id: "premium-presence",
    title: "Premium presence",
    tagline: "Elevating your authority through visuals",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8747.jpg?alt=media",
    focalPoint: { x: 0.5, y: 0.25 }
  }
];

export default function EditorialGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-elegant">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-black mb-6">Our Work</h2>
          <p className="text-editorial max-w-2xl mx-auto">
            Four pillars of our creative approach, each telling a unique story of brand transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {editorialItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-gray-100 aspect-[4/3] rounded-none"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    objectPosition: `${item.focalPoint.x * 100}% ${item.focalPoint.y * 100}%`
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index * 0.1) + 0.3 }}
                  viewport={{ once: true }}
                  className="text-white"
                >
                  <h3 className="text-elegant text-2xl md:text-3xl mb-3 group-hover:text-white/90 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-lg text-white/90 group-hover:text-white transition-colors">
                    {item.tagline}
                  </p>
                </motion.div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
