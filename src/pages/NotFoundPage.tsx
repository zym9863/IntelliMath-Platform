import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          页面未找到
        </Typography>
        <Typography variant="body1" paragraph>
          您访问的页面不存在或已被移除。
        </Typography>
        <Button 
          variant="contained" 
          component={RouterLink} 
          to="/"
          sx={{ mt: 2 }}
        >
          返回首页
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
