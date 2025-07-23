import React from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const leaders = [
  {
    name: 'Jason Girzadas',
    title: 'Chief Executive Officer | Deloitte US',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    linkedin: '#',
    group: 'Leadership',
  },
  {
    name: 'Lara Abrash',
    title: 'Chair | Deloitte US',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    linkedin: '#',
    group: 'Leadership',
    extra: true,
  },
  // Dev Leads
  {
    name: 'Alex Kim',
    title: 'Lead Developer',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    linkedin: '#',
    group: 'Dev Leads',
  },
  {
    name: 'Priya Patel',
    title: 'Senior Frontend Engineer',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    linkedin: '#',
    group: 'Dev Leads',
  },
  // SMM Lead
  {
    name: 'Sofia Martinez',
    title: 'Social Media Marketing Lead',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    linkedin: '#',
    group: 'SMM Lead',
  },
  // Other roles
  {
    name: 'Michael Chen',
    title: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
    linkedin: '#',
    group: 'Other',
  },
  {
    name: 'Emily Nguyen',
    title: 'UX/UI Designer',
    image: 'https://randomuser.me/api/portraits/women/72.jpg',
    linkedin: '#',
    group: 'Other',
  },
];

const LinkedInIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M7 10v4m0 0v4m0-4h.01M12 14v-2a2 2 0 1 1 4 0v2m0 0v4m0-4h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const XCircleIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);

const groupOrder = ['Leadership', 'Dev Leads', 'SMM Lead', 'Other'];

const Team = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="section-container py-16">
        <div className="text-center mb-8">
          <div className="text-sm text-gray-700 font-semibold mb-2">Our people</div>
          <h2 className="text-3xl md:text-4xl font-light mb-12">Meet our US leaders</h2>
        </div>
        {groupOrder.map((group) => {
          const groupMembers = leaders.filter(l => l.group === group);
          if (groupMembers.length === 0) return null;
          return (
            <div key={group} className="mb-12">
              {group !== 'Leadership' && (
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">{group}</h3>
              )}
              <div className="flex flex-col md:flex-row justify-center items-center gap-12 flex-wrap">
                {groupMembers.map((leader) => (
                  <div key={leader.name} className="flex flex-col items-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 shadow-md bg-gray-100">
                      <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-primary font-semibold text-lg mb-1">{leader.name}</div>
                    <div className="text-xs text-gray-500 mb-3">{leader.title}</div>
                    <div className="flex items-center gap-3">
                      <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 border border-primary rounded-full p-1.5 transition">
                        <LinkedInIcon />
                      </a>
                      {leader.extra && (
                        <button className="text-gray-400 hover:text-gray-600 border border-gray-300 rounded-full p-1.5 transition" title="Other">
                          <XCircleIcon />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default Team