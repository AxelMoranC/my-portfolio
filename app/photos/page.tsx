import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Photos</h1>
      

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/axel1.jpg", alt: "Roman columns" },
          { src: "/photos/axel2.jpg", alt: "Big Ben" },
          { src: "/photos/axel3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/axel4.jpg", alt: "Eiffel Tower" },
        ]}
      />

    
    </section>
  );
}
