import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container, Typography, Box, Breadcrumbs, Link, Paper,
  Divider, Button, useTheme, Grid, Card, CardContent, CardActionArea
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DeleteIcon from '@mui/icons-material/Delete';
import { Exercise } from '../types/calculus';
import { getWrongExercises, removeFromWrongExercises } from '../data/exercisesData';
import ExerciseCard from '../components/exercises/ExerciseCard';
import calculusCourse from '../data/calculusData';
import chapterExercises from '../data/exercisesData';

const WrongExercisesPage = () => {
  const [wrongExercises, setWrongExercises] = useState<Exercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const theme = useTheme();

  // 获取所有练习题
  const getAllExercises = () => {
    return chapterExercises.flatMap(ce => ce.exercises);
  };

  // 加载错题集
  const loadWrongExercises = () => {
    const wrongExerciseIds = getWrongExercises();
    const allExercises = getAllExercises();
    const wrongExercisesList = allExercises.filter(ex => wrongExerciseIds.includes(ex.id));
    setWrongExercises(wrongExercisesList);
  };

  useEffect(() => {
    loadWrongExercises();
  }, []);

  // 处理练习题完成事件
  const handleExerciseComplete = (exerciseId: string, isCorrect: boolean) => {
    if (isCorrect) {
      // 如果答对了，从错题集中移除
      removeFromWrongExercises(exerciseId);
      // 重新加载错题集
      loadWrongExercises();
    }
  };

  // 清空错题集
  const clearWrongExercises = () => {
    // 逐个移除所有错题
    wrongExercises.forEach(ex => removeFromWrongExercises(ex.id));
    setWrongExercises([]);
    setSelectedExercise(null);
  };

  // 获取章节名称
  const getChapterTitle = (exerciseId: string) => {
    const chapterId = chapterExercises.find(ce => 
      ce.exercises.some(ex => ex.id === exerciseId)
    )?.chapterId;
    
    if (chapterId) {
      return calculusCourse.chapters.find(ch => ch.id === chapterId)?.title || '未知章节';
    }
    return '未知章节';
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" color="inherit">
            首页
          </Link>
          <Typography color="text.primary">错题集</Typography>
        </Breadcrumbs>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 4,
          justifyContent: 'space-between'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BookmarkIcon 
              sx={{ 
                fontSize: 40, 
                mr: 2, 
                color: theme.palette.error.main 
              }} 
            />
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ fontWeight: 600 }}
            >
              我的错题集
            </Typography>
          </Box>

          {wrongExercises.length > 0 && !selectedExercise && (
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={clearWrongExercises}
            >
              清空错题集
            </Button>
          )}

          {selectedExercise && (
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setSelectedExercise(null)}
            >
              返回列表
            </Button>
          )}
        </Box>

        <Divider sx={{ mb: 4 }} />

        {wrongExercises.length === 0 ? (
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4, 
              textAlign: 'center',
              bgcolor: 'background.default',
              border: '1px dashed',
              borderColor: 'divider',
              borderRadius: 2
            }}
          >
            <Typography variant="h6" color="text.secondary" gutterBottom>
              暂无错题记录
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              当你在练习中答错题目时，系统会自动将题目添加到错题集
            </Typography>
            <Button
              component={RouterLink}
              to="/chapters"
              variant="contained"
              color="primary"
            >
              去做练习
            </Button>
          </Paper>
        ) : selectedExercise ? (
          <ExerciseCard 
            exercise={selectedExercise} 
            onComplete={handleExerciseComplete}
          />
        ) : (
          <Grid container spacing={3}>
            {wrongExercises.map((exercise) => (
              <Grid item xs={12} sm={6} md={4} key={exercise.id}>
                <Card 
                  elevation={2} 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <CardActionArea 
                    onClick={() => setSelectedExercise(exercise)}
                    sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                  >
                    <CardContent sx={{ p: 2, flexGrow: 1 }}>
                      <Typography variant="subtitle1" component="h3" gutterBottom>
                        {exercise.title}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          mb: 2
                        }}
                      >
                        {exercise.problem.replace(/\$.*?\$/g, '[数学公式]')}
                      </Typography>

                      <Typography variant="caption" color="primary">
                        来自: {getChapterTitle(exercise.id)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default WrongExercisesPage;