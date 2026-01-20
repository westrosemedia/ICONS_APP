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
    title: "Editorial authority",
    tagline: "Visuals that position you as the obvious choice",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6059.jpg?alt=media&token=59d64374-c968-4afa-88e2-5020841da75b",
    focalPoint: { x: 0.5, y: 0.22 }
  },
  {
    id: "strategic-storytelling",
    title: "Strategic narrative",
    tagline: "Messaging and visuals working as one system",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5932.jpg?alt=media&token=980dbfd2-d3d7-4517-9830-686f3a9b53d0",
    focalPoint: { x: 0.5, y: 0.28 }
  },
  {
    id: "location-stories",
    title: "Context driven presence",
    tagline: "Your brand, grounded in the right environments",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5775.jpg?alt=media&token=30d2adca-c45d-46b1-9972-30b87c4f27d4",
    focalPoint: { x: 0.5, y: 0.26 }
  },
  {
    id: "premium-presence",
    title: "Recognizable presence",
    tagline: "Built for trust, authority, and momentum",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5303.jpg?alt=media&token=7e4aad5b-45a7-4f6e-a3d2-70ff74515c62",
    focalPoint: { x: 0.5, y: 0.55 }
  }
];

export default function EditorialGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-elegant">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-display text-black mb-6">Content that signals authority</h2>
          <p className="text-editorial max-w-2xl mx-auto">
            Every shoot is designed to position founders as credible, recognizable leaders. This is not about trends or aesthetics. It is about trust, clarity, and being taken seriously in the rooms that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {editorialItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-gray-100 aspect-[4/3] sm:aspect-[4/3] rounded-xl transition-shadow duration-200 ease-out group-hover:shadow-lg group-focus-within:shadow-lg"
              tabIndex={0}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03] group-focus-within:scale-[1.03] motion-reduce:transform-none"
                  style={{
                    objectPosition: `${item.focalPoint.x * 100}% ${item.focalPoint.y * 100}%`
                  }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 group-focus-within:bg-black/50 transition-colors duration-200 ease-out" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: (index * 0.15) + 0.4, ease: [0.25, 0.1, 0.25, 1] }}
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
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 group-focus-within:border-white/20 transition-colors duration-200 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
