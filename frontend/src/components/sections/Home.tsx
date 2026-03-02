import './.css';

export const Home: React.FC = () => {
  const handleScrollToRegistration = () => {
    const el = document.getElementById('registration');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    
  );
};
