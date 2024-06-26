/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import ServiceCard from 'components/service-card';

const services = [
  {
    title: 'Cloud Solutions',
    price: 0.63,
  },
  {
    title: 'Devops Solution',
    price: 0.75,
  },
  {
    title: 'AI Solutions',
    price: 0.68,
  },
  {
    title: 'Storage Solutions',
    price: 0.72,
  },
  {
    title: 'Developer Teams',
    price: 0.63,
  },
  {
    title: 'Design Solutions',
    price: 0.56,
  },
  {
    title: 'Database Solutions',
    price: 0.69,
  },
  {
    title: 'Marketing Solutions',
    price: "",
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Ideal solutions for you"
          title="Didn’t find what you were looking for?"
        />
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: ['70px', null, null, null, '100px', null, '140px'],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 4],
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      null,
      'repeat(4, 1fr)',
      'repeat(4, 300px)',
    ],
  },
};
