"use client";

import { motion } from "framer-motion";

interface Stat {
    value: string;
    label: string
}

interface StatsProps {
    stats: Stat[]
}

export function Stats( {stats}: StatsProps) {
    return(
        <section className="py-12 -mt-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl shadow-elevated p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
    )
}