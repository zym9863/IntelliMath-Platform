import { Box, Typography, Container, Divider, Link, Grid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FunctionsIcon from '@mui/icons-material/Functions';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FunctionsIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6" color="text.primary" fontWeight={600}>
                智学高数
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph>
              结构化高等数学学习平台，帮助学生更好地理解和掌握高等数学概念。
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" fontWeight={600} gutterBottom>
              快速链接
            </Typography>
            <Link href="/" color="text.secondary" display="block" sx={{ mb: 1 }}>
              首页
            </Link>
            <Link href="/chapters" color="text.secondary" display="block" sx={{ mb: 1 }}>
              章节
            </Link>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" fontWeight={600} gutterBottom>
              资源
            </Typography>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              学习指南
            </Link>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              常见问题
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" color="text.primary" fontWeight={600} gutterBottom>
              关注我们
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton aria-label="github" size="small" sx={{ color: 'text.secondary' }}>
                <GitHubIcon />
              </IconButton>
              <IconButton aria-label="twitter" size="small" sx={{ color: 'text.secondary' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="linkedin" size="small" sx={{ color: 'text.secondary' }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} 智学高数 - 结构化高等数学学习平台
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
