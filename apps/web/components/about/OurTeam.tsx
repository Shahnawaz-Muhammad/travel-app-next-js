"use client";

import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface OurTeamProps {
  team: TeamMember[];
}
export function OurTeam({ team }: OurTeamProps) {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground">
            The passionate people behind your unforgettable journeys
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-2">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
