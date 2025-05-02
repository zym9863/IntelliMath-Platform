import { Container, Typography, Box, Button, Grid, Card, CardContent, CardActions, Paper, Divider, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalculateIcon from '@mui/icons-material/Calculate';
import SchoolIcon from '@mui/icons-material/School';
import calculusCourse from '../data/calculusData';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          my: { xs: 4, md: 8 },
          py: { xs: 4, md: 6 },
          textAlign: 'center',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          color: 'white',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"/%3E%3C/svg%3E")',
          }}
        />
        <Container maxWidth="md">
          <Typography
            variant={isMobile ? "h4" : "h2"}
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              mb: 3
            }}
          >
            欢迎使用智学高数
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 500,
              opacity: 0.9,
              mb: 3
            }}
          >
            结构化高等数学学习平台
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            智学高数提供清晰、系统的高等数学知识点梳理，帮助您更好地理解和掌握高等数学概念。
            通过结构化的学习方式，让复杂的数学变得简单易懂。
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/chapters"
            sx={{
              mt: 2,
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              fontWeight: 600,
              backgroundColor: 'white',
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }
            }}
          >
            开始学习
          </Button>
        </Container>
      </Box>

      {/* Course Content Section */}
      <Box sx={{ my: { xs: 6, md: 10 } }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            mb: 4,
            textAlign: 'center',
            fontWeight: 600,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              backgroundColor: theme.palette.primary.main,
              borderRadius: '2px'
            }
          }}
        >
          课程内容
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {calculusCourse.chapters.map((chapter) => (
            <Grid item xs={12} md={4} key={chapter.id}>
              <Card
                className="chapter-card"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, pt: 4 }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {chapter.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {chapter.description}
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      p: 1.5,
                      bgcolor: 'rgba(25, 118, 210, 0.05)',
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <AutoStoriesIcon color="primary" fontSize="small" />
                    <Typography variant="body2" fontWeight={500}>
                      包含 {chapter.concepts.length} 个知识点
                    </Typography>
                  </Box>
                </CardContent>
                <Divider />
                <CardActions sx={{ p: 2 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    component={RouterLink}
                    to={`/chapter/${chapter.id}`}
                    sx={{ fontWeight: 500 }}
                    fullWidth
                  >
                    查看详情
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Features Section */}
      <Box sx={{ my: { xs: 6, md: 10 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 5,
              fontWeight: 600
            }}
          >
            为什么选择智学高数？
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                    boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  结构化知识体系
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  按照章节、知识点、定理、公式等层次清晰组织内容，帮助您系统掌握高等数学。
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                    boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
                  }}
                >
                  <CalculateIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  数学公式清晰呈现
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  使用LaTeX渲染数学公式，确保公式显示准确、美观，提升学习体验。
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                    boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
                  }}
                >
                  <AutoStoriesIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  丰富的例题与解析
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  每个知识点配有相关例题和详细解析，帮助您加深理解和应用。
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default HomePage;
