import React, { useState } from 'react';
import { Megaphone, Calendar, ArrowRight, MapPin, Clock, Search, Download } from 'lucide-react';

const NoticeBoard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Academic", "Placement", "Exams", "Research"];

  const notices = [
    { id: 1, title: "Commencement of Classes for VI Semester B.E.", date: "Feb 10, 2026", tag: "Academic" },
    { id: 2, title: "Placement Drive: Google Cloud Recruitment 2026", date: "Feb 12, 2026", tag: "Placement" },
    { id: 3, title: "Internal Assessment - II Schedule Released", date: "Feb 15, 2026", tag: "Exams" },
    { id: 4, title: "Call for Research Proposals - DST Funding", date: "Feb 18, 2026", tag: "Research" },
  ];

  const events = [
    {
      id: 1,
      title: "Annual Tech Fest '26",
      date: "March 05 - 07",
      location: "Main Auditorium",
      time: "10:00 AM",
      image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=400",
      color: "border-blue-500"
    },
    {
      id: 2,
      title: "International AI Conference",
      date: "March 15",
      location: "Seminar Hall 2",
      time: "09:30 AM",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
      color: "border-orange-500"
    }
  ];

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "All" || notice.tag === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Notice Board Column */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#002147] p-6">
            <div className="flex items-center gap-3 text-white mb-6">
              <Megaphone className="w-6 h-6 text-orange-400" />
              <h2 className="text-xl font-bold uppercase tracking-wider">Notice Board</h2>
            </div>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300" />
              <input 
                type="text"
                placeholder="Search notices..."
                className="w-full bg-blue-900/40 border border-blue-800 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeTab === cat ? "bg-orange-500 text-white" : "bg-blue-800 text-blue-100 hover:bg-blue-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="p-2">
            {filteredNotices.map((notice) => (
              <div key={notice.id} className="group p-4 flex items-center justify-between border-b border-gray-50 last:border-0 hover:bg-gray-50 rounded-xl transition-all">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">{notice.tag}</span>
                  <h3 className="text-gray-800 font-bold group-hover:text-blue-900">{notice.title}</h3>
                  <p className="text-xs text-gray-500 font-medium">{notice.date}</p>
                </div>
                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-6 h-6 text-[#002147]" />
            <h2 className="text-xl font-bold text-[#002147] uppercase tracking-wider">Upcoming Events</h2>
          </div>

          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
              {/* Event Image */}
              <div className="h-40 w-full overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className={`p-5 border-l-4 ${event.color}`}>
                <div className="bg-orange-100 text-orange-700 w-fit px-3 py-1 rounded-md text-[10px] font-black uppercase mb-3">
                  {event.date}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-800 transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /> {event.location}</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /> {event.time}</div>
                </div>
              </div>
            </div>
          ))}

          <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 font-bold hover:border-blue-400 hover:text-blue-600 hover:bg-white transition-all">
            View All Events
          </button>
        </div>

      </div>
    </section>
  );
};

export default NoticeBoard;