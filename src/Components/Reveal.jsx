import React from 'react';
import { motion } from 'framer-motion';

// Apparition douce quand l'élément entre dans la zone visible (une seule fois).
// `index` décale légèrement les éléments d'une même grille pour un effet en cascade.
export default function Reveal({ children, index = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.08, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}