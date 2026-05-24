"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "li" | "header";
  amount?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
  amount = 0.2,
  once = true,
}: Props) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  as?: "div" | "ul" | "section";
  amount?: number;
};

export function Stagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.05,
  as = "div",
  amount = 0.15,
}: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "article";
};

export function StaggerItem({
  children,
  className,
  y = 14,
  as = "div",
}: StaggerItemProps) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag variants={variants} className={cn(className)}>
      {children}
    </MotionTag>
  );
}
