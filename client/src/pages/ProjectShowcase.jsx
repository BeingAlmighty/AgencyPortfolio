import { useParams, Navigate } from 'react-router-dom';
import ProjectHero from '../components/ProjectHero';
import FeatureShowcase from '../components/FeatureShowcase';
import VideoShowcase from '../components/VideoShowcase';
import CaseStudy from '../components/CaseStudy';
import ProjectFooter from '../components/ProjectFooter';
import { projectsData } from '../data/projectData';

export default function ProjectShowcase() {
  const { projectId } = useParams();
  const project = projectsData[projectId];
  // If project doesn't exist, redirect to home
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="relative bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] text-white min-h-screen overflow-x-hidden">
      {/* Global animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#ff5722]/5 to-purple-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/4 to-indigo-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ff5722]/3 to-transparent rounded-full blur-3xl opacity-30"></div>
      </div>      
      <div className="relative z-10">
        <ProjectHero 
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
        />
      
      {/* Feature Showcases */}
      {project.features.map((feature, index) => (
        <FeatureShowcase
          key={index}
          title={feature.title}
          description={feature.description}
          feature={feature.feature}
          imageUrl={feature.imageUrl}
          imageAlt={feature.imageAlt}
          imagePosition={feature.imagePosition}
          isMobile={feature.isMobile}
        />
      ))}
        {/* Video Showcase */}
      {project.video && (
        <VideoShowcase 
          title={project.video.title}
          description={project.video.description}
          videoUrl={project.video.videoUrl}
        />
      )}
        
      <CaseStudy
        stats={project.stats}
        quote={project.quote}
        author={project.author}
      />
      
      <ProjectFooter />
      </div>
    </div>
  );
}
