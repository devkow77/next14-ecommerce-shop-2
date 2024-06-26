"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar, Container } from "@/components/index";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Introduction = () => {
  const introductionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: introductionRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.6, 1],
    [0, 1, 1, 0.2, 0],
  );
  return (
    <motion.article
      className="relative z-20 h-[120vh]"
      ref={introductionRef}
      style={{ opacity }}
    >
      <div className="fixed left-0 top-0 w-full">
        <Navbar />
        <div className="relative flex h-[--header-height] flex-col items-start justify-center">
          <Container>
            <div>
              <h1 className="mb-[96px] max-w-4xl pr-20 text-5xl font-black md:text-7xl">
                FENDIE <br /> <span className="text-red-600">BEST</span> CLOTHES
                IN NEW YORK
              </h1>
            </div>
            <div className="absolute bottom-8 flex items-center gap-3">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="p-1"
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="p-1"
              >
                <Instagram />
              </Link>
              <Link href="https://x.com/" target="_blank" className="p-1">
                <Twitter />
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </motion.article>
  );
};

export default Introduction;
