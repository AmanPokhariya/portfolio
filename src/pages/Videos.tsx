
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import VideoIntro from '@/components/VideoIntro';
import Footer from '@/components/Footer';

const Videos = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <Header />
      <main className="pt-16">
        <VideoIntro />
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
