import { motion } from 'motion/react';
import { Utensils, Brain, ShoppingBag, BookOpen, Users, HelpCircle } from 'lucide-react';

const LABOR_CARDS = [
  { icon: Utensils, text: "Planning every\nmeal" },
  { icon: Brain, text: "Remembering\neverything" },
  { icon: ShoppingBag, text: "Managing\ngroceries" },
  { icon: BookOpen, text: "Handling school\n& activities" },
  { icon: Users, text: "Keeping everyone\non track" },
  { icon: HelpCircle, text: "Answering every\nquestion" }
];

export default function LaborSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <div className="text-left mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-serif text-brand-text mb-4"
        >
          The work nobody sees
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl text-brand-text/50 font-medium"
        >
          You carry so much — From household chores to professional work. Hearthly helps you manage it all.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {LABOR_CARDS.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-start gap-5 p-2"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-peach/50 flex items-center justify-center text-brand-primary shadow-sm border border-brand-primary/10">
              <card.icon className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <p className="text-[15px] font-bold text-brand-text/80 leading-tight whitespace-pre-line">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
