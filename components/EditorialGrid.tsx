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
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6059.jpg?alt=media&token=59d64374-c968-4afa-88e2-5020841da75b",
    focalPoint: { x: 0.5, y: 0.22 }
  },
  {
    id: "strategic-storytelling",
    title: "Strategic storytelling",
    tagline: "Where brand meets narrative",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5932.jpg?alt=media&token=980dbfd2-d3d7-4517-9830-686f3a9b53d0",
    focalPoint: { x: 0.5, y: 0.28 }
  },
  {
    id: "location-stories",
    title: "Location based stories",
    tagline: "Every setting tells a story",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5775.jpg?alt=media&token=30d2adca-c45d-46b1-9972-30b87c4f27d4",
    focalPoint: { x: 0.5, y: 0.26 }
  },
  {
    id: "premium-presence",
    title: "Premium presence",
    tagline: "Elevating your authority through visuals",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5303.jpg?alt=media&token=7e4aad5b-45a7-4f6e-a3d2-70ff74515c62",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {editorialItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-gray-100 aspect-[4/3] sm:aspect-[4/3] rounded-none"
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index * 0.1) + 0.3 }}
                  viewport={{ once: true }}
                  className="text-white"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-white/90 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-white/90 group-hover:text-white transition-colors">
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
