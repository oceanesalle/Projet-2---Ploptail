import Banniere from '../Banniere';
import Footer from '../Footer';
import ContactUs from './ContactUs';
import Navbar from '../Navbar';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Banniere title="Pour nous contacter, c'est ici !" />
        <ContactUs />
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Contact;
