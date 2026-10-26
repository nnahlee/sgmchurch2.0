"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState } from "react";

import { gallerySlides } from "@/../types";

const GalleryPagination = () => {
  const IMAGES_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(gallerySlides.length / IMAGES_PER_PAGE);
  //   slice non mutation does not include end item (slice(start, end))
  const lastIndexPageItem = currentPage * IMAGES_PER_PAGE;
  const firstIndexPageItem = lastIndexPageItem - IMAGES_PER_PAGE;
  const currentImageItems = gallerySlides.slice(
    firstIndexPageItem,
    lastIndexPageItem,
  );
  //   array starting 0-11 , length 12
  //   slice is taking portions based on start and end of state
  console.log(currentImageItems);

  const handleNext = () => {
    // last page check
    if (currentPage === totalPages) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };

  const handlePaginationClick = (pageNumber: number) => {
    if (pageNumber <= 0 || pageNumber > 5) return;
    // console.log(`current page ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Array(totalPages)
    .fill(0)
    .map((_, idx) => idx + 1);

  return (
    <div className="w-full px-4 py-8 sm:px-6 md:py-8 lg:px-8">
      <h2 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        Gallery
      </h2>

      {/* grid 4 cols 3 rows */}
      <div className=" grid w-full py-12  gap-12  sm:gap-5 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {currentImageItems.map(({ src, alt }, index) => {
          return (
            <Link
              key={src}
              className="relative aspect-square overflow-hidden rounded-2xl"
              aria-label={`View image: ${alt}`}
              href={`gallery/${index}`}
            >
              <Image
                sizes="(max-width: 639px) 33vw, (max-width: 767px) 33vw, (max-width: 1023px) 25vw, 20vw"
                quality={100}
                className="object-cover transition-transform duration-300 hover:scale-105"
                src={src}
                alt={alt}
                fill
              />
            </Link>
          );
        })}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePrev} href="#" />
          </PaginationItem>

          {pageNumbers.map((item) => {
            return (
              <PaginationItem key={item}>
                <PaginationLink
                  onClick={() => handlePaginationClick(item)}
                  href={`/gallery`}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext onClick={handleNext} href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default GalleryPagination;
