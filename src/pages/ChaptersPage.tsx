import { Container, Typography, Box } from '@mui/material';
import ChapterList from '../components/calculus/ChapterList';
import calculusCourse from '../data/calculusData';

const ChaptersPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {calculusCourse.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {calculusCourse.description}
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <ChapterList chapters={calculusCourse.chapters} />
        </Box>
      </Box>
    </Container>
  );
};

export default ChaptersPage;
