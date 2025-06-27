
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import Activities from '@/components/Activities';
import Footer from '@/components/Footer';

const ActivitiesPage = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <Header />
      <main className="pt-16">
        <Activities />
      </main>
      <Footer />
    </div>
  );
};

export default ActivitiesPage;
