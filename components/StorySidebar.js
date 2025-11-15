'use client'; // We need state to manage the active link

import { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  TrendingUp,
  Users,
  Building,
  CheckCircle,
} from 'lucide-react';

// 1. Define your sections. The 'id' must match the 'id' of the
// <section> tags in your main article content.
const sections = [
  { id: 'introduction', title: 'Introduction', icon: BookOpen },
  { id: 'early-days', title: 'The Early Days', icon: TrendingUp },
  { id: 'advice', title: 'Advice for the Upcoming', icon: Users },
  { id: 'building', title: 'Building the Empire', icon: Building },
  { id: 'conclusion', title: 'Conclusion', icon: CheckCircle },
];

export default function StorySidebar({ storyTitle, authorName }) {
  // 2. State to track the active section.
  // 'introduction' is active by default.
  // A more advanced implementation would use an IntersectionObserver
  // to update this state based on scroll position.
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <aside className="sticky top-0 h-screen w-full p-8 hidden lg:block">
      {/* 3. Story/Author Header */}
      <div className="mb-12">
        <Link href="/" className="text-xl font-bold text-primary">
          Journeys
        </Link>
        <div className="mt-4 border-l-2 border-surface pl-4">
          <h2 className="font-bold text-text-primary">{storyTitle}</h2>
          <p className="text-sm text-text-secondary">By {authorName}</p>
        </div>
      </div>

      {/* 4. Navigation */}
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            const Icon = section.icon;

            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setActiveSection(section.id)}
                  className={`
                    group flex items-center gap-3 px-4 py-2 rounded-md
                    transition-all duration-300
                    ${
                      isActive
                        ? 'border-l-2 border-primary text-text-primary'
                        : 'border-l-2 border-transparent text-text-secondary hover:text-text-primary'
                    }
                  `}
                >
                  <Icon
                    size={20}
                    className={`
                      transition-colors duration-300
                      ${
                        isActive
                          ? 'text-primary'
                          : 'text-text-secondary group-hover:text-text-primary'
                      }
                    `}
                  />
                  <span className="font-medium">{section.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}