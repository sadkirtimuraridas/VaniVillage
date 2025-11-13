"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, Target, Award } from "lucide-react";
import Link from "next/link";



// Mission data with detailed information
const missionData = {
  "education-programs": {
    title: "Education Programs",
    shortDescription: "Vani Village continues this mission through learning, discussion, and sharing Śrīla Prabhupāda’s wisdom in a living, practical way.",
    image: "/vanivillage_herologo.png",
    detailedDescription: "In 2018, Bhaktivedanta Library Services a.s.b.l. purchased a 3,500 m² plot of land adjacent to Radhadesh. We are now building 680 meters of floor space on three levels.This multipurpose building will have storage for books, a 60 m² working space for vanipedia.org, six living rooms (with a communal kitchen) and 2 two-bedroom apartments. With the remaining land we will create a first class functional garden to feed the team along with lots of space for meditation and relaxing for all those who come to visit.",
    keyFeatures: [
      "Learnings",
      "Discussions",
    ],
    impact: {
      Books: "500+",
      Languages: "108+",
      Classroom: "25+",
      
      workshops: "15+"
    },
    upcomingEvents: [
      "Gita Marathon 2025",
    ]
  },
  "talent-showcase": {
    title: "Construction & Infrastructure",
    shortDescription: "Posts about building the Vani Village facility itself.",
    image: "/talent.jpg",
    detailedDescription: "This project will create a shelter for high thinking (Vani Village) and simple living (Vaikuntha Gardens). Each structure is being built to support spiritual culture — spaces for study, service, and reflection in harmony with nature.",
    keyFeatures: [
      "Marble Construction",
      "Eco-Friendly",
      
    ],
    impact: {
      Workers: "30+", 
      Engineers: "5+",
      Architects: "2",
      
    },
    upcomingEvents: [
      "Grand Opening in 2027",
      "Art Exhibition - April 2026",
    ]
  },
  "social-change": {
    title: "Sustainability",
    shortDescription: "The programme of the adjacent Vaikuntha Gardens (permaculture, meditation-garden etc.",
    image: "/socialchange.jpeg",
    detailedDescription: "Through permaculture, meditation gardens, and mindful land care, Vaikuntha Gardens embodies the spirit of simple living and high thinking.",

    keyFeatures: [
       "Agriculture management",
      "Environmental conservation campaigns",
     
    ],
    impact: {
      TreesPlanted: "50+",
      SeedsSown: "70+",
      volunteers: "100+",
      Gardeners: "10+"
    },
    upcomingEvents: [
      "Environmental Cleanup Drive - March 2026",
    
      "Community Health Camp - May 2026"
    ]
  },
  "leadership-building": {
    title: "Community Life",
    shortDescription: "Shaping the leaders of tomorrow is core to our vision. We offer workshops and real-world opportunities for students to develop crucial leadership skills.",
    image: "/leadership.jpeg",
    detailedDescription: "Vani Village grows through the efforts of many hands and hearts. Stay connected with news, volunteer stories, and the collective journey of serving Śrīla Prabhupāda’s vision together.",
    keyFeatures: [
      "Community development projects",
      "Leadership development workshops",
      "Team building and collaboration exercises",
      "Public speaking and communication training",
      "Project management skills development",
      "Mentorship programs with industry leaders",
      "Leadership retreats and conferences"
    ],
    impact: {
      leadersTrained: "150+",
      workshopsConducted: "40+",
      mentorshipPrograms: "25+",
      leadershipProjects: "60+"
    },
    upcomingEvents: [
      "Leadership Summit - March 2026",
      "Mentorship Program Launch - April 2026",
      "Youth Leadership Conference - May 2026"
    ]
  }
};

export default function MissionDetailPage({ params }) {
  const { slug } = React.use(params);
  const mission = missionData[slug];

  if (!mission) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Mission Not Found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Our Mission
            </Link>
            
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              {mission.title}
            </h1>
            
            <p className="mx-auto max-w-3xl text-lg text-gray-300 sm:text-xl">
              {mission.shortDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto max-w-7xl px-6 lg:px-8 mb-16"
      >
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={mission.image}
            alt={mission.title}
            className="h-96 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">About This Initiative</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {mission.detailedDescription}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mission.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {mission.upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50"
                  >
                    <Calendar className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{event}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Impact Stats */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="sticky top-8"
            >
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Progress</h3>
                <div className="space-y-6">
                  {Object.entries(mission.impact).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold text-blue-400 mb-2">{value}</div>
                      <div className="text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-8 text-center"
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
                >
                  Get Involved
                  <ArrowLeft className="h-5 w-5 rotate-180" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
